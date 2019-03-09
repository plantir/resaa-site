const sm = require('sitemap');
const fs = require('fs');
require('dotenv').config();
const request = require('request');
const SITE_URL = process.env.SITE_URL || 'https://resaa.net';
const API_URL = process.env.API_URL || 'https://webapi.resaa.net';

let static_urls = [{
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
request.get({
    method: 'GET',
    uri: `${API_URL}/misc/sitemap`,
    json: true
  },
  (error, response, body) => {
    let temp = {
      url: '',
      changefreq: 'daily',
      priority: 0.9
    };
    let doctors_url = [];
    let Specialty_url = [];
    for (let id of body.result.doctorSubscriberNumbers) {
      let item = {
        ...temp
      };
      item.url = `/doctors/${id}`;
      doctors_url.push(item);
    }
    _build_sitemap(doctors_url, 'sitemap_doctors');
    for (let id of body.result.medicalSpecialtyIds) {
      let item = {
        ...temp
      };
      item.url = `/specialty/${id}`;
      Specialty_url.push(item);
    }
    _build_sitemap(Specialty_url, 'sitemap_specialities');

  }
);

function _build_sitemap(urls, sitemap_name) {
  var sitemap = sm.createSitemap({
    hostname: SITE_URL,
    cacheTime: 600000, //600 sec (10 min) cache purge period
    urls: urls
  });
  fs.writeFileSync(`./resources/static/${sitemap_name}.xml`, sitemap.toString());
}
