const axios = require("axios");

async function init() {
  const data = await axios.get(
    "https://dev.resaa.net/api/categories/8/RelatedDoctors",
    { data: { limit: 10, offset: 0 } }
  );
  console.log(data);
}

init();
