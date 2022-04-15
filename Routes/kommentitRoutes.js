const { Router } = require('express');
const router = Router();
const kommentitController = require('../Controllers/kommentitController');

//http://localhost:4000/api/kommentit

router.post('/uusi', kommentitController.uusiKommentti);
router.get('/tarina/:id', kommentitController.tarinanKommentit);

module.exports = router;
