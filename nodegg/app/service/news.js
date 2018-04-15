const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    const { total, list } = this.config.news;
    return list;
  }
}

module.exports = NewsService;
