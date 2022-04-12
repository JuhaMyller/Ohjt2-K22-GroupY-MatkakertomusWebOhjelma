const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync(path.join(__dirname, '..', 'uploads'), { recursive: true });
    cb(null, path.join('uploads'));
  },
  filename: function (req, file, cb) {
    const baseURL = req.baseUrl.replaceAll('/', '_') + '_';
    cb(null, baseURL + uuidv4() + '.jpeg');
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
    cb(null, true);
  else cb(null, false);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
