import PraiseButton from './PraiseButton.js'

export default class Thumb extends PraiseButton {

  constructor (props) {
    super(props)
    console.log('thumb init - praise times: ', this.times)
    this.init()
  }

  init () {
    this.initDom()
    this.initEvent()
  }

  initDom () {
    this.el.html(`<div class="dz-wrapper">
      <div class="dz-hand">
        <div class="damuzhi1"></div>
        <div class="damuzhi2"></div>
        <div class="damuzhi3"></div>
        <div class="shizhi1"></div>
        <div class="shizhi2"></div>
        <div class="zhongzhi"></div>
        <div class="wumingzhi"></div>
        <div class="xiaomuzhi"></div>
        <div class="xiuzi"></div>
      </div>
    </div>`)
  }

  initEvent () {
    this.el.on('click', this.add.bind(this))
  }
}
