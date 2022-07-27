import '/assets/css/common.css'
import './index.scss'
import { $ } from '/assets/js/common.js'
import img01 from '/assets/images/chapter5/1.jpg'
import img02 from '/assets/images/chapter5/2.jpg'
import img03 from '/assets/images/chapter5/3.jpg'
import img04 from '/assets/images/chapter5/4.jpg'
import img06 from '/assets/images/chapter5/6.jpg'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <header class="header">
    <div class="logo">SCROLL INTERACTION</div>
  </header>
  <section class="section_mask">
    <article class="area_txt">
      <div class="wrap_title">
        <h2 class="title_common">TEXT OVERLAP</h2>
        <p class="txt_common">텍스트로 구현하는 엣지 있는 모션 :)</p>
      </div>
      <div class="area_motion">
        <div class="wrap_txt">
          <div class="left">
            <p class="txt_com txt01">
              <span>모션 만들기!</span>
              <!-- 왼쪽 글자 -->
            </p>
          </div>
          <div class="right">
            <p class="txt_com txt01">
              <span>모션 만들기!</span>
              <!-- 오른쪽 글자 -->
            </p>
          </div>
        </div>
        <div class="wrap_txt type02">
          <div class="left">
            <p class="txt_com txt01">
              <span>수강생 화이팅!</span>
            </p>
          </div>
          <div class="right">
            <p class="txt_com txt01">
              <span>수강생 화이팅!</span>
            </p>
          </div>
        </div>
        <div class="wrap_txt type03">
          <div class="left">
            <p class="txt_com txt01">
              <span>신난다 재미난다!</span>
            </p>
          </div>
          <div class="right">
            <p class="txt_com txt01">
              <span>신난다 재미난다!</span>
            </p>
          </div>
        </div>
      </div>
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
      $('.section_mask').classList.add('active')
    }, 200)
  })
})()
