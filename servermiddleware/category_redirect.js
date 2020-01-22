const axios = require("axios");
const related = require("../related_categories");
// { Orthopaedics: 1, "General-practitioner": 4, psychology: 8 };
const API_URL = process.env.API_URL;
module.exports = async function(req, res, next) {
  let is_api = req.url.match(/^\/api/);
  if (is_api) {
    return next();
  }
  let regex = /\/(categories)\/(.+)\/([0-9]+)/gim;
  let is_category = req.url.match(regex);
  if (is_category) {
    let regex_result = regex.exec(req.url);
    let category_name = regex_result[2];
    let category_id = regex_result[3];
    let exist_psycology = Object.entries(related).find(([key, value]) => {
      return value == category_id;
    });
    if (exist_psycology) {
      let url = `/doctors/${exist_psycology[0]}`;
      res.writeHead(301, { Location: url });
      return res.end();
    }
    let { data } = await axios.get(`${API_URL}/categories/${category_id}`);
    let category = data.result.manifest;
    if (
      category.englishTitle.toLowerCase().replace(/ /g, "-") !== category_name
    ) {
      let url = `/categories/${category.englishTitle
        .toLowerCase()
        .replace(/ /g, "-")}/${category_id}`;
      res.writeHead(301, { Location: url });
      return res.end();
    }
    // let
  }
  next();
};
