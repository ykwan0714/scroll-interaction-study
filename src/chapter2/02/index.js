
import '/assets/css/common.css'
import './index.css'
import { $ } from '/assets/js/common.js'
import jakeImg from '/assets/images/jake.png'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <h2 class="tit">CSS ANIMATION KEYFRAME</h2>
  <figure class="jake">
    <img src="${jakeImg}" alt="">
  </figure>
</div>`

  window.addEventListener('load', () => {
    setTimeout(()=>  $('.wrap .jake').classList.add('active'), 1000)
  })
})()
