//päätyy tähä catch blockista jossa errori on päästetty eteenpäin funtiolla =>  next(error)
//vastaa clientille error statukset ja viestin
const res = require('express/lib/response');
const fs = require('fs');
const util = require('util');
const unlink = util.promisify(fs.unlink);

const errorHandler = async (error, req, res, next) => {
  try {
    const { statusCode } = error;
    console.error('Server Error: ', error);
    if (req.file) await unlink(req.file.path);
    if (req.files) await handleUploadsFolder(req.files);
    res.status(statusCode || 500).json({ message: error.message });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Odottamaton virhe' });
  }
};

const handleUploadsFolder = async (files) => {
  return files.map(async (file) => {
    await unlink(file.path);
  });
};

module.exports = errorHandler;
