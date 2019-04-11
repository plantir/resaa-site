const axios = require('axios')
let url = 'https://webapi.resaa.net'
url = 'http://Resa-web-api.bsn.local'
axios.get(`${url}/Doctors/7562?fields=id,firstName`).then(res => {
    console.log(res.data.result.doctor.id);
}).catch(err => {
    console.log(err);
})