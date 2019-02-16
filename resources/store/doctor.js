export const state = () => ({
  info: {
    specialtyId: null,
    gender: null,
    subscriptionPlan: 1,
    contactInformation: {
      provinceId: null,
      cityId: null
    }
  }
})
export const mutations = {
  doctor_subscriptionPlan(state, subscriptionPlan) {
    state.doctor.subscriptionPlan = subscriptionPlan;
  },
  clear_doctor_info(state) {
    state.info = {
      specialtyId: null,
      gender: null,
      subscriptionPlan: 1,
      contactInformation: {
        provinceId: null,
        cityId: null
      }
    };
    localStorage.removeItem('doctor_info');
  },
  save_doctor_info(state) {
    localStorage.setItem('doctor_info', JSON.stringify(state.info));
  },
  initialize_doctor_info(state) {
    if (process.browser) {
      let doctor = localStorage.getItem('doctor_info');
      if (doctor) {
        state.info = JSON.parse(doctor);
      } else {
        state.info = {
          specialtyId: null,
          gender: null,
          subscriptionPlan: 1,
          contactInformation: {
            provinceId: null,
            cityId: null
          }
        };
      }
    }
  },
}
export const strict = false
