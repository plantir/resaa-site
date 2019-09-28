export default function({ $axios, redirect }) {
  $axios.onResponseError(error => {
    debugger;
    if (error.response.status == 401) {
      localStorage.removeItem('auth');
      redirect('/patient/login');
    }
  });
}
