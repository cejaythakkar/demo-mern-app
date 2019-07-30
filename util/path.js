const path = require('path');

module.exports.getRootDirectory = () => path.dirname(process.mainModule.filename)