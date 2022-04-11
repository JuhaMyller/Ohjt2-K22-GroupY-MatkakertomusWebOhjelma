const mongoose = require('mongoose');

const TarinaSchema = mongoose.Schema(
  {
    matkaaja: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Matkaaja',
    },
    matkakohde: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Matkakohde',
    },
    lukukertoja: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Matkaaja',
      },
    ],
    alkupvm: { type: Date, required: true },
    loppupvm: { type: Date, required: true },
    yksityinen: { type: Boolean, required: true, default: false },
    teksti: {
      type: String,
      required: true,
    },
    otsikko: {
      type: String,
      required: true,
    },
    kuva: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tarina', TarinaSchema);
