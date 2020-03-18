export const strict = false;
export const state = () => ({
  sitekey: process.env.RECAPTCHA_SITEKEY,
  location: null,
  showMenu: false,
  is_corona_amum: false
});
export const mutations = {
  toggleMenu(state) {
    state.showMenu = !state.showMenu;
  },
  showMenu(state) {
    state.showMenu = true;
  },
  changeMenu(state, value) {
    state.showMenu = value;
  },
  hideMenu(state) {
    state.showMenu = false;
  }
};
export const actions = {
  async nuxtServerInit({ dispatch, state }, { req, route, $axios, $storage }) {
    if (process.server) {
      let ip =
        req.connection.remoteAddress ||
        req.socket.remoteAddress || // socket is an alias to connection, just delete this line
        req.connection.socket.remoteAddress;
      if (process.env.NODE_ENV == "development" && ip == "127.0.0.1") {
        ip = "37.40.96.22";
      }
      try {
        const Ip_location = await $axios.get(
          "https://api.ipgeolocation.io/ipgeo?apiKey=22c7c02d22334a3dbfa13318db2dd9bf&ip=" +
            ip
        );
        state.location = Ip_location.data.country_name;
      } catch (error) {
        console.log(error);
      }
    }
    if (route.query.utm_campaign == "corona_amum") {
      state.is_corona_amum = true;
    }
    let referrer = $storage.getUniversal("referrer");
    if (referrer && referrer.includes("corona_amum")) {
      state.is_corona_amum = true;
    }
  },
  async nuxtClientInit({ state }, { route, $storage }) {
    let referrer = document.referrer.includes(process.env.SITE_URL)
      ? ""
      : document.referrer;
    let query = route.query;
    if (query.utm_source || query.gclid) {
      referrer = route.fullPath.split("?")[1];
    }
    if (referrer && referrer != "" && referrer != " ") {
      $storage.setUniversal("referrer", referrer);
      localStorage.setItem("referrer", referrer);
    }
    referrer = localStorage.getItem("referrer");
    if (referrer && referrer.includes("corona_amum")) {
      state.is_corona_amum = true;
    }
  }
};
