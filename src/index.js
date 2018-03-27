import $ from 'jquery'
import All from './praise'
import './style/index.css'

const { Thumb } = All

new Thumb({
  el: $('.thumb'),
  times: 6,
  onTimesChange (times) {
    $('.show_times').text(times)
  }
})
