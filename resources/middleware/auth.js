export default function ({
  store,
  redirect,
  error
}) {
  if (!localStorage.getItem('auth')) {
    redirect('/patient/landing')
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
