const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const list = await ctx.service.news.list();
    await ctx.render('news/list', { list });
  }
}

module.exports = NewsController;