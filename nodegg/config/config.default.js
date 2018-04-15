module.exports = {

  keys: 'anwoodier',

  view: {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  },

  news: {
    total: 16,
    list: [
      { id: 1, title: 'this is news 1', url: '/news/1', time: 1523803650 },
      { id: 2, title: 'this is news 2', url: '/news/2', time: 1523703650 }
    ]
  },

  robot: {
    ua: [
      /curl/i,
      /Baiduspider/i,
    ],
  },

}
