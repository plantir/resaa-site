export default function({ $axios, route, redirect }) {
  $axios.onResponseError(error => {
    if (error.response.status == 401) {
      localStorage.removeItem("auth");
      redirect(`/patient/login?return_url=${route.fullPath}`);
    }
  });
}
