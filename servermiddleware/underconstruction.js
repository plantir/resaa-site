module.exports = function(req, res, next) {
  if (process.env.UNDERCONSTRUCTION) {
    if (req.url == "/underconstruction") {
      return next();
    }
    res.writeHead(301, {
      Location: "/underconstruction"
    });
    return res.end();
  }
};
