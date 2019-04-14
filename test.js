const axios = require('axios')
let api = 'https://webapi.resaa.net/charge/denominations'
api = 'http://resa-web-api.bsn.local/charge/denominations'
axios.get(api).then(res => {
    console.log(res.data.result.denominations);
})