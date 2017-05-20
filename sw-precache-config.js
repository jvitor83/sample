module.exports = {
  "staticFileGlobs": [
    "**/*.css",
    "**/*.html",
    "**/*.png",
    "**/*.ico",
    "**/*.svg",
    "**/*.woff2",
    "**/*.js",
    "**/*.json"
  ],
  "runtimeCaching": [{
    "urlPattern": /^https:\/\/api.musixmatch.com\//,
    "handler": "networkFirst"
  },{
    "urlPattern": /^http:\/\/s.mxmcdn.net\//,
    "handler": "networkFirst"
  }]
}