export default function({ store, redirect, route, error }) {
  if (!localStorage.getItem("auth")) {
    redirect(`/patient/login?return_url=${route.fullPath}`);
    error({
      message: "You are not connected",
      statusCode: 403
    });
  }
}
