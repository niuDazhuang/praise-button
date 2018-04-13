import PraiseButton from '../../src/praise/PraiseButton'

describe('PraiseButton类', () => {
  it('默认值0点赞加1', () => {
    const btn = new PraiseButton()
    expect(btn.add()).toBe(1)
  })
  it('初始值点赞加1', () => {
    const btn = new PraiseButton({times: 5})
    expect(btn.add()).toBe(6)
  })
})