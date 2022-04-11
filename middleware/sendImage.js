const { getFileStream } = require('../utils/AWS_s3');

const sendImage = (req, res, next) => {
  const key = req.params.key;
  getFileStream(key, res);
};

module.exports = sendImage;
