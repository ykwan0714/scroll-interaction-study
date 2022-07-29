import '/assets/css/common.css'
import './index.scss'
import { $ } from '/assets/js/common.js'
import imgIphone from '/assets/images/chapter5/img_iphone01.png'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <header class="header">
    <div class="logo">SCROLL INTERACTION</div>
  </header>
  <section class="section_overlap">
    <article class="wrap_overlap">
      <div class="wrap_title">
        <h2 class="title_common">OVERLAP BACKGROUND</h2>
        <p class="txt_common">배경으로 강조하는 상품이미지</p>
      </div>
      <figure class="img_device">
        <img src="${imgIphone}" />
      </figure>
      <div class="bg_change color01"></div>
      <div class="bg_change color02"></div>
      <div class="bg_change color03"></div>
      <div class="bg_change color04"></div>
    </article>
  </section>
  <footer class="footer">
    <div class="txt_area">
      <p>당신의 열정을 응원합니다. :)</p>
    </div>
  </footer>
</div>`

  window.addEventListener('load', () => {
    setTimeout(function () {
      $('.section_overlap').classList.add('active')
    }, 200)
  })
})()
