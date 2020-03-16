module.exports = function(req, res, next) {
  if (req.url == "/underconstruction") {
    return next();
  }
  if (process.env.UNDERCONSTRUCTION == "true") {
    res.writeHead(301, {
      Location: "/underconstruction"
    });
    return res.end();
  }
  return next();
};
