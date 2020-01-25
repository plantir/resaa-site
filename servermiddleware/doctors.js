const axios = require("axios");
const API_URL = process.env.API_URL;
module.exports = async function(req, res, next) {
  let is_api = req.url.match(/^\/api/);
  if (is_api) {
    return next();
  }
  let regex = /\/(doctors)\/([0-9]+)/gim;
  let is_doctor = req.url.match(regex);
  if (is_doctor) {
    let regex_result = regex.exec(req.url);
    let doctor_id = regex_result[2];
    let { data } = await axios.get(`${API_URL}/doctors/${doctor_id}/profile`);
    let doctor = data.result.doctor;
    if (doctor) {
      let url = `/doctors/${doctor.specialtyEnglishTitle
        .toLowerCase()
        .replace(/ /g, "-")}/${doctor.subscriberNumber}`;
      res.writeHead(301, { Location: url });
      return res.end();
    }
    // let
  }
  next();
};
