export default class PraiseButton {
  
  constructor (props) {
    this.el = props.el
    this.times = props.times || 0
    this.onTimesChange = props.onTimesChange || (() => {})
  }

  add () {
    this.times++
    this._onTimesChange()
    return this.times
  }

  _onTimesChange () {
    this.onTimesChange(this.el, this.times)
  }
}
