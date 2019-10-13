const sm = require('sitemap');
const fs = require('fs');
const axios = require('axios');
const SITE_URL = 'https://resaa.net';
let API_URL = 'http://resa-web-api.bsn.local';
//API_URL = 'https://webapi.resaa.net';
let static_urls = [
  {
    url: '/',
    changefreq: 'always',
    priority: 1
  },
  {
    url: '/doctors',
    changefreq: 'always',
    priority: 1
  },
  {
    url: '/patient/landing',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/doctors/landing',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/privacy',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/faq',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/about',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/contact-us',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/faq',
    changefreq: 'weekly',
    priority: 0.8
  }
];
_build_sitemap(static_urls, 'sitemap_static');
axios.get(`${API_URL}/misc/sitemap`).then(res => {
  let temp = {
    url: '',
    changefreq: 'daily',
    priority: 0.9
  };
  let doctors_url = [];
  let Specialty_url = [];
  for (let id of res.data.result.doctorSubscriberNumbers) {
    let item = {
      ...temp
    };
    if (['7830', '7155', '7594', '7265', '7106', '7305'].includes(id)) {
      item.url = `/doctors/psychology/${id}`;
    } else {
      item.url = `/doctors/${id}`;
    }
    doctors_url.push(item);
  }
  _build_sitemap(doctors_url, 'sitemap_doctors');
  for (let id of res.data.result.medicalSpecialtyIds) {
    let item = {
      ...temp
    };
    item.url = `/specialty/${id}`;
    Specialty_url.push(item);
  }
  _build_sitemap(Specialty_url, 'sitemap_specialities');
});

function _build_sitemap(urls, sitemap_name) {
  var sitemap = sm.createSitemap({
    hostname: SITE_URL,
    cacheTime: 600000, // 600 sec (10 min) cache purge period
    urls: urls
  });
  fs.writeFileSync(`./static/${sitemap_name}.xml`, sitemap.toString());
}
