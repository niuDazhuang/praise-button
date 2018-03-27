export default class PraiseButton {
  
  constructor (props = {
    el: document.querySelector('body'),
    times: 0,
    onTimesChange: () => {}
  }) {
    this.el = props.el || document.querySelector('body')
    this.times = props.times || 0
    this.onTimesChange = props.onTimesChange || this._onTimesChange
    this.onTimesChange(this.times)
  }

  add () {
    this.times++
    this.onTimesChange(this.times)
    return this.times
  }

  _onTimesChange () {}
}
