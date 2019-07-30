const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  path = require('path'),
  pathUtil = require('./util/path'),
  router = require('./routes/index').router;

app.use(express.static(path.join(pathUtil.getRootDirectory(),'react-redux-app','build')));
app.use(express.static(path.join(pathUtil.getRootDirectory(),'react-redux-app','node_modules','bootstrap','dist')));
app.use(router);
app.listen(port, () => console.log(`server listening on port ${port}`));
