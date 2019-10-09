export default function({ $axios, redirect }) {
  $axios.onResponseError(error => {
    if (error.response.status == 401) {
      localStorage.removeItem('auth');
      redirect('/patient/login');
    }
  });
}
