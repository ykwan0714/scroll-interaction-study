import '/assets/css/common.css'
import './index.css'
import { $ } from '/assets/js/common.js'
import bgImg from '/assets/images/4.jpg'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <section class="tit_area">
    <article class="f_content">
      <h2 class="tit">
        GGANG CODING
      </h2>
      <p class="txt">애니메이션 가속도 처리방법</p>

      <figure class="img">
        <img src="${bgImg}" alt="" width="600" height="600">
      </figure>
    </article>
  </section>`

  window.addEventListener('load', () => {
    setTimeout(() =>	$('.tit_area .f_content').classList.add('active'), 1000)
  })
})()
