const Tarina = require('../models/tarina');
const Matkakohde = require('../models/matkakohde');
const reqParams = require('../utils/requestParams');
const ErrorHandler = require('../utils/ErrorHandler');
const { upload, deleteFile } = require('../utils/AWS_s3');

module.exports.uusiTarina = async (req, res, next) => {
  try {
    const { matkakohde, yksityinen, teksti } = req.body;
    const { alkupvm, loppupvm, otsikko } = req.body;

    const haveParams = reqParams(
      { matkakohde, yksityinen, teksti, alkupvm, loppupvm },
      req.body
    );
    if (!haveParams) ErrorHandler(400, 'Params puuttuu');

    const matkakohdeExists = await Matkakohde.findById(matkakohde);

    if (!matkakohdeExists)
      return ErrorHandler(400, 'Matkakohdetta ei ole olemassa');

    const tarinaImgs = [];

    for (let index = 0; index < req.files.length; index++) {
      const singleImg = await upload(req.files[index]);
      tarinaImgs.push(singleImg.Key);
    }

    const tarina = new Tarina({
      matkaaja: req.userID,
      matkakohde,
      yksityinen,
      teksti,
      alkupvm,
      loppupvm,
      otsikko,
      kuva: tarinaImgs,
    });

    const savedTarina = await tarina.save();
    matkakohdeExists.tarinat.push(savedTarina.id);
    await matkakohdeExists.save();

    res.status(201).json({ message: 'OK', savedTarina });
  } catch (error) {
    next(error);
  }
};

module.exports.kaikkiTarinat = async (req, res, next) => {
  try {
    const tarinat = await Tarina.find({ yksityinen: false })
      .populate('matkaaja', 'nimimerkki')
      .select('otsikko teksti alkupvm loppupvm createdAt lukukertoja')
      .sort({ createdAt: -1 })
      .exec();

    res.status(200).json({ tarinat });
  } catch (error) {
    next(error);
  }
};

module.exports.tarinaID = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return ErrorHandler(400, 'ID puuttuu');
    const tarina = await Tarina.findById(id)
      .select('otsikko teksti createdAt kuva lukukertoja')
      .populate('matkaaja', 'etunimi sukunimi kuva')
      .populate('matkakohde', 'kohdenimi')
      .exec();

    if (!tarina) return ErrorHandler(400, 'Virheellinen id');

    if (tarina.yksityinen && tarina.matkaaja.id.toString('hex') !== req.userID)
      return res
        .status(400)
        .json({ message: 'Sinulla ei ole oikeutta katsoa tätä tarinaa' });

    if (!tarina.lukukertoja?.includes(req.userID)) {
      tarina.lukukertoja.push(req.userID);
      await tarina.save();
    }

    res.status(200).json({ message: 'OK', tarina });
  } catch (error) {
    next(error);
  }
};

module.exports.matkakohteenTarinat = async (req, res, next) => {
  try {
    const { matkakohdeID } = req.params;
    if (!matkakohdeID) return ErrorHandler(400, 'ID puuttuu');
    const tarinat = await Tarina.find({
      matkakohde: matkakohdeID,
      yksityinen: false,
    })
      .populate('matkaaja', 'nimimerkki')
      .select('otsikko teksti alkupvm loppupvm createdAt lukukertoja')
      .sort({ createdAt: -1 })
      .exec();
    res.status(200).json({ message: 'OK', tarinat });
  } catch (error) {
    next(error);
  }
};
module.exports.omatTarinat = async (req, res, next) => {
  try {
    const tarinat = await Tarina.find({
      matkaaja: req.userID,
    })
      .populate('matkaaja', 'nimimerkki')
      .select('otsikko teksti alkupvm loppupvm createdAt lukukertoja')
      .sort({ createdAt: -1 })
      .exec();

    res.status(200).json({ tarinat });
  } catch (error) {
    next(error);
  }
};

module.exports.kayttajanTarinat = async (req, res, next) => {
  const { id } = req.params;
  try {
    const tarinat = await Tarina.find({
      matkaaja: id,
      yksityinen: false,
    })
      .populate('matkaaja', 'nimimerkki')
      .select('otsikko teksti alkupvm loppupvm createdAt lukukertoja')
      .exec();

    const suosituimmat = tarinat.sort(
      (a, b) => b.lukukertoja.length - a.lukukertoja.length
    );

    res.status(200).json({ tarinat: suosituimmat.slice(0, 5) });
  } catch (error) {
    next(error);
  }
};
module.exports.poistaTarina = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id) ErrorHandler(400, 'Id puuttuu');

    const tarina = await Tarina.findById(id);

    if (!tarina) ErrorHandler(400, 'Tarinaa ei ole olemassa');

    if (req.userID !== tarina.matkaaja._id.toString())
      ErrorHandler(400, 'Sinulla ei ole oikeutta poistaa tätä tarinaa');

    const matkakohde = await Matkakohde.findById(tarina.matkakohde._id);
    matkakohde.tarinat.pull(id);
    await tarina.delete();
    await matkakohde.save();
    const poistettavatKuvat = tarina.kuva.map((k) => {
      return { Key: k };
    });
    if (poistettavatKuvat.length > 0) await deleteFile(poistettavatKuvat);
    return res.status(204).json();
  } catch (error) {
    next(error);
  }
};
module.exports.muokkaaTarina = async (req, res, next) => {
  const { id } = req.params;
  const { otsikko, teksti, vanhatkuvat } = req.body;
  const kuvatUrl = vanhatkuvat.split(',');

  try {
    if (!id) ErrorHandler(400, 'Id puuttuu');
    const haveParams = reqParams({ otsikko, teksti, vanhatkuvat }, req.body);
    if (!haveParams) ErrorHandler(400, 'Params puuttuu');

    const tarina = await Tarina.findById(id);
    const kuvat = [...tarina.kuva];

    if (!tarina) ErrorHandler(400, 'Tarinaa ei ole olemassa');

    if (req.userID !== tarina.matkaaja._id.toString())
      ErrorHandler(400, 'Sinulla ei ole oikeutta muokata tätä tarinaa');

    for (let index = 0; index < req.files.length; index++) {
      const singleImg = await upload(req.files[index]);
      kuvat.push(singleImg.Key);
    }

    const poistettavatKuvat = tarina.kuva.filter((k) => !kuvatUrl.includes(k));

    if (poistettavatKuvat.length > 0)
      await deleteFile(
        poistettavatKuvat.map((k) => {
          return { Key: k };
        })
      );

    const uudetKuvat = kuvat.filter((k) => !poistettavatKuvat.includes(k));

    tarina.kuva = uudetKuvat;
    tarina.otsikko = otsikko;
    tarina.teksti = teksti;

    const paivitettyTarina = await tarina.save();

    return res.status(200).json({ message: 'OK', tarina: paivitettyTarina });
  } catch (error) {
    next(error);
  }
};

module.exports.suosituimmatTarinat = async (req, res, next) => {
  try {
    const suosituimmat = await Tarina.aggregate([
      { $match: { yksityinen: false } },
      {
        $lookup: {
          from: 'matkaajas',
          let: { nimimerkki: 'nimimerkki' },
          pipeline: [{ $project: { _id: 1, nimimerkki: 1 } }],
          localField: 'matkaaja',
          foreignField: '_id',
          as: 'matkaaja',
        },
      },
      {
        $project: {
          matkaaja: 1,
          lukukertoja: 1,
          teksti: 1,
          otsikko: 1,
          createdAt: 1,
          length: { $size: '$lukukertoja' },
        },
      },
      { $sort: { length: -1 } },
      { $limit: 4 },
    ]);

    return res.status(200).json({ message: 'OK', tarinat: suosituimmat });
  } catch (error) {
    next(error);
  }
};
