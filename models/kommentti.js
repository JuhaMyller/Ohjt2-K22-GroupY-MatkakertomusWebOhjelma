const mongoose = require('mongoose');

const Kommentti = mongoose.Schema(
  {
    kirjoittaja: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Matkaaja',
    },
    tarina: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Tarina',
    },
    teksti: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Kommentti', Kommentti);
