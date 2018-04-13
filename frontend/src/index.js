import $ from 'jquery'
import All from './praise'
import './style/index.css'
import axios from 'axios'

const { Thumb } = All

Array.from($('.thumb')).forEach(domthumb => {
  new Thumb({
    el: $(domthumb),
    async onTimesChange (el, times) {
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
  })
})
