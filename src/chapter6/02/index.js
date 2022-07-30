import '/assets/css/common.css'
import './index.scss'
import '/assets/js/modernizr.js'
import { $ } from '/assets/js/common.js'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <header class="header">
    <div class="logo">SCROLL INTERACTION</div>
  </header>
  <section class="title_section">
    <h2>FIXED CONTENT</h2>
  </section>
  <section class="content_section">
    <!-- 스크롤할 거리를 설정하는 엘리먼트 -->
    <article class="wrap_content">
      <!-- 고정시킬 엘리먼트 sticky -->
      <div class="inner_content">
        <div class="txt_intro">
          <h2>APPLE</h2>
        </div>
        <div class="left_mask"></div>
        <div class="right_mask"></div>
        <figure class="bg_img"></figure>
        <div class="txt_ending">
          <div class="row_table">
            <div class="cell_table">
              <p>APPLE</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
  <section class="title_section">
    <h2>END</h2>
  </section>
</div>`

  window.addEventListener('load', () => {
    const $section = $('.content_section')
    const $introTitle = $('.txt_intro')
    const $endingTitle = $('.txt_ending')
    const $maskLeft = $('.left_mask')
    const $maskRight = $('.right_mask')
    const $bgImage = $('.bg_img')
    const maskStartValue = 50
    const maskEndValue = 0
    const zoomValue = 1.5
    const zoomOutValue = 1
    const calculator = () => {
      const winScrollY = window.scrollY
      const winHeight = window.innerHeight
      const sectionTop = $section.offsetTop
      const sectionHeight = $section.offsetHeight
      const scrollHeight = sectionHeight - winHeight
      const percent = (winScrollY - sectionTop) / scrollHeight

      // 스크롤에 따라 width 값이 변경된다. max 값은 maskStartValue 보다 커도 상관 없다.
      const maskVal = Math.max(
        maskEndValue,
        maskStartValue - percent * maskStartValue
      )

      // 스크롤에 따라 scale 값이 변경된다. max 값은 zoomValue 보다 커도 상관 없다
      const scaleVal = Math.max(zoomOutValue, zoomValue - percent * zoomValue)

      $maskLeft.style.width = `${maskVal}%`
      $maskRight.style.width = `${maskVal}%`
      $bgImage.style.transform = `scale(${scaleVal})`

      if (percent * 100 > 0.3) {
        $introTitle.classList.add('active')
      } else {
        $introTitle.classList.remove('active')
      }

      if (percent * 100 >= 70) {
        $endingTitle.classList.add('active')
      } else {
        $endingTitle.classList.remove('active')
      }
    }
    console.log(Modernizr.csspositionsticky);
    // css sticky가 지원될 경우에만 이벤트 등록 및 계산을 한다.
    if (Modernizr.csspositionsticky) {
      window.addEventListener('scroll', calculator)
      window.addEventListener('resize', calculator)
      calculator()
    }
  })
})()
