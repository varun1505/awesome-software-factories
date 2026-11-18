// Serves the built site. The old domain redirects to the primary one,
// so search engines see a single address.
const PRIMARY = 'awesome-software-factories.fyi'
const REDIRECT_FROM = ['awesome-software-factory.fyi']

export default {
  fetch(request, env) {
    const url = new URL(request.url)
    if (REDIRECT_FROM.includes(url.hostname)) {
      url.hostname = PRIMARY
      url.protocol = 'https:'
      return Response.redirect(url.toString(), 301)
    }
    return env.ASSETS.fetch(request)
  },
}
