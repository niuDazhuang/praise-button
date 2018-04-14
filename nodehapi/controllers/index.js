const axios = require('axios')

const handlers = {
  static: {
    directory: {
      path: 'public'
    }
  },
  home: async (req, h) => {
    res = await axios.get(`http://yii.hd/?r=home/list`)
    return h.view('home/index', res.data.data)
  },
  api: async (req, h) => {
    const url = `http://yii.hd/?r=${req.params.path}&id=${req.query.id}`
    let res = ''
    try {
      res = await axios.get(url)
    } catch (e) {
      console.log(e.message)
    }
    return res.data
  }
}

module.exports = handlers