const { Router } = require('express');
const router = Router();
const tarinatController = require('../Controllers/tarinatController');
const multer = require('../middleware/multer');

//http://localhost:4000/api/tarina

// <----> toimii

//postaa uusi tarina
router.post('/tarina', multer.array('kuva', 12), tarinatController.uusiTarina);
//palauttaa kaikki tarinat
router.get('/kaikkitarinat', tarinatController.kaikkiTarinat);
//palauttaa tarinan id:n perusteella
router.get('/tarina/:id', tarinatController.tarinaID);
//palauttaa tarinat matkakohde id:n perusteella
router.get(
  '/matkakohteentarinat/:matkakohdeID',
  tarinatController.matkakohteenTarinat
);
//palauttaa omat tarinat käyttäjälle
router.get('/omattarinat', tarinatController.omatTarinat);
//palauttaa tarinat tietylle käyttäjälle
router.get('/kayttajantarinat/:id', tarinatController.kayttajanTarinat);
//poistaa tarinan id:n perusteella
router.delete('/tarina/:id', tarinatController.poistaTarina);
// Muokkaa tarinaa
router.put(
  '/tarina/:id',
  multer.array('kuva', 12),
  tarinatController.muokkaaTarina
);
router.get('/suosituimmattarinat', tarinatController.suosituimmatTarinat);

// <---->

module.exports = router;
