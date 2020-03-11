export const strict = false;
export const state = () => ({
  sitekey: process.env.RECAPTCHA_SITEKEY,
  location: null,
  showMenu: false
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
  async nuxtServerInit({ dispatch, state }, { req, $axios }) {
    try {
      if (process.server) {
        let ip =
          req.connection.remoteAddress ||
          req.socket.remoteAddress || // socket is an alias to connection, just delete this line
          req.connection.socket.remoteAddress;
        if (process.env.NODE_ENV == "development" && ip == "127.0.0.1") {
          ip = "37.40.96.22";
        }
        const Ip_location = await $axios.get(
          "https://api.ipgeolocation.io/ipgeo?apiKey=22c7c02d22334a3dbfa13318db2dd9bf&ip=" +
            ip
        );
        state.location = Ip_location.data.country_name;
      }
    } catch (error) {}
  },
  async nuxtClientInit(state, { route }) {
    let referrer = document.referrer.includes(process.env.SITE_URL)
      ? ""
      : document.referrer;
    let query = route.query;
    if (query.utm_source || query.gclid) {
      referrer = route.fullPath.split("?")[1];
    }
    if (referrer && referrer != "" && referrer != " ") {
      localStorage.setItem("referrer", referrer);
    }
  }
};
