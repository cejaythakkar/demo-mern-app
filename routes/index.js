const express = require("express"),
  router = express.Router(),
  path = require("path"),
  pathUtil = require("../util/path"),
  todos = require('./todos');

router.get("/", (request, response, next) => {
  response
    .status(200)
    .sendFile(
      path.join(
        pathUtil.getRootDirectory(),
        "react-redux-app",
        "build",
        "index.html"
      )
    );
});

router.use('/todos',todos);

// app.get("*", () => {});
exports.router = router;
