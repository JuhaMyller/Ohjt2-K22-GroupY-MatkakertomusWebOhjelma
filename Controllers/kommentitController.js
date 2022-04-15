const Kommentti = require('../models/kommentti');
const Tarina = require('../models/tarina');
require('dotenv').config();
const reqParams = require('../utils/requestParams');
const ErrorHandler = require('../utils/ErrorHandler');

module.exports.uusiKommentti = async (req, res, next) => {
  try {
    const { tarinaID, teksti } = req.body;

    const haveParams = reqParams({ tarinaID, teksti }, req.body);
    if (!haveParams) ErrorHandler(400, 'Params puuttuu');

    //tarkistetaan onko olemassa tarinaa
    const exists = await Tarina.exists({ _id: tarinaID });

    if (!exists) ErrorHandler(400, 'Tarinaa ei ole olemassa');

    const kommentti = new Kommentti({
      kirjoittaja: req.userID,
      tarina: tarinaID,
      teksti,
    });

    const uusiKommentti = await kommentti.save();

    res.status(201).json({ message: 'OK', kommentti: uusiKommentti });
  } catch (error) {
    next(error);
  }
};

module.exports.tarinanKommentit = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const haveParams = reqParams({ id }, req.params);
    if (!haveParams) ErrorHandler(400, 'ID puuttuu');

    const kommentit = await Kommentti.find({ tarina: id })
      .populate('kirjoittaja', 'nimimerkki kuva')
      .populate();

    res.status(200).json({ message: 'OK', kommentit });
  } catch (error) {
    next(error);
  }
};
