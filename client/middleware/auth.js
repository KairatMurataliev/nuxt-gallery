export default function (context) {
  if (!context.app.context.app.$cookies.get('user')) {
    return context.redirect('/login')
  }
}
