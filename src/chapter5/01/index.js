import '/assets/css/common.css'
import './index.scss'
import { $ } from '/assets/js/common.js'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <header class="header">
    <div class="logo">SCROLL INTERACTION</div>
  </header>
  <section class="section_first">
    <article class="wrap_first inner">
      <div class="row_table">
        <div class="cell_table">
          <nav class="nav">
            <ul class="list_nav">
              <li class="item_nav">
                <a href="" class="active">
                  <span class="txt">TODAY</span>
                  <span class="mask"></span>
                  <!-- mask1 텍스트 등장 전에 나오는 흰색 배경-->
                  <span class="mask2"></span>
                  <!-- mask2 메뉴 오버시 나오는 노란색 밑줄 -->
                </a>
              </li>
              <li class="item_nav">
                <a href="">
                  <span class="txt">IMAGE Mask</span>
                  <span class="mask"></span>
                  <span class="mask2"></span>
                </a>
              </li>
              <li class="item_nav">
                <a href="">
                  <span class="txt">TEXT Mask</span>
                  <span class="mask"></span>
                  <span class="mask2"></span>
                </a>
              </li>
              <li class="item_nav">
                <a href="">
                  <span class="txt">OVERLAP</span>
                  <span class="mask"></span>
                  <span class="mask2"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="bg_rotate"></div>
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
      $('.section_first').classList.add('active')
    }, 200)
  })
})()
