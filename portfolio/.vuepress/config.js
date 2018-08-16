module.exports = {
  title: "Meekohi",
  description: "techtrek",
  base: "/",
  themeConfig: {
    logo: "/upload/logo.svg",
    footer: "Ⓒ Meekohi",
    nav: [
      { text: "Works", link: "/", position: "left", external: false },
      { text: "Instagram", link: "https://www.instagram.com/meekohi/", position: "left", external: true },
      { text: "Say hi!", link: "mailto:meekohi@gmail.com", position: "right", external: true },
      { text: 'Journal', link: '/journal/', position: 'right', external: false },
    ]
  },
  head: [
    ['link', { rel: "icon", href: "favicon-32x32.png" }]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
