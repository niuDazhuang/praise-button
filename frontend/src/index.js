import $ from 'jquery'
import All from './praise'
import './style/index.css'
import axios from 'axios'

const { Thumb } = All

const throttle = (fn, wait) => {
  let timer = null
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => timer = null, wait)
      return fn.apply(this, args)
    }
  }
}

const handleTimesChange = async (el, times) => {
  const res = await axios.get('/api/home/increment', {
    params: {
      id: el.attr('data-id')
    }
  })
  const data = res.data
  if (!data.errcode) {
    el.parent().find('.show_times').text(data.data.num)
  } else {
    window.alert('服务器炸了！')
  }
}

Array.from($('.thumb')).forEach(domthumb => {
  new Thumb({
    el: $(domthumb),
    onTimesChange: throttle(handleTimesChange, 1000)
  })
})
