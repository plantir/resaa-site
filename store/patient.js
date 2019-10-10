import jwtDecode from 'jwt-decode';
export const state = () => ({
  registrationToken: null,
  user: null,
  user_id: null
});
export const mutations = {
  register_token(state, token) {
    state.registrationToken = token;
    localStorage.setItem('register_token', token);
  },
  unregister_token(state) {
    debugger;
    state.registrationToken = null;
    localStorage.removeItem('register_token');
  },
  initialize_user(state) {
    state.registrationToken = localStorage.getItem('register_token');
    let user = localStorage.getItem('auth');
    if (!user) {
      return;
    }
    user = JSON.parse(user);
    this.$axios.setToken(user.access_token, 'Bearer');
    state.user = user;
    let decoded_token = jwtDecode(user.access_token);
    state.user_id =
      decoded_token[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ];
  },
  login(state, user) {
    state.user = user;
    localStorage.setItem('auth', JSON.stringify(user));
  },
  logout(state) {
    state.user = null;
    localStorage.removeItem('auth');
    // router.push({
    //   name: 'patient-landing'
    // })
  }
};
