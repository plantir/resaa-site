module.exports = function(req, res, next) {
  console.log(req.url);
  let regex = /\/(doctors)\/([0-9]+)/gim;
  let is_doctor_profile = req.url.match(regex);
  if (is_doctor_profile) {
    let url = req.url.replace(/\/(doctors)\/([0-9]+)/gim, function(val, a, b) {
      return `/${a.toLowerCase()}/${b.length > 4 ? b.slice(1, 5) : b}`;
    });
    if (url == req.url) {
      return next();
    }
    res.writeHead(301, { Location: url });
    res.end();
  } else {
    next();
  }
};
