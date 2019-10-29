module.exports = function(req, res, next) {
  let regex = /\/(doctors)\/([0-9]+)/gim;
  let is_doctor_profile = req.url.match(regex);
  let is_api = req.url.match(/^\/api/);
  if (is_api) {
    return next();
  }
  if (is_doctor_profile) {
    let url = req.url.replace(/\/(doctors)\/([0-9]+)/gim, function(val, a, b) {
      b = b.length > 4 ? b.slice(1, 5) : b;
      let test_doctor = ["7830", "7155", "7594", "7265", "7106", "7305"].find(
        item => item.includes(b)
      );
      return `/${a.toLowerCase()}${test_doctor ? "/psychology" : ""}/${b}`;
    });
    if (url.endsWith("/")) {
      url = url.replace(/.$/, "");
    }
    if (url == req.url) {
      return next();
    }
    res.writeHead(301, { Location: url });
    res.end();
  } else {
    if (req.url.endsWith("/")) {
      let url = req.url.replace(/.$/, "");
      res.writeHead(301, { Location: url });
      return res.end();
    }
    next();
  }
};
