import '/assets/css/common.css'
import './index.scss'
import { $ } from '/assets/js/common.js'
import img1 from '/assets/images/chapter7/1.jpg'
import img2 from '/assets/images/chapter7/2.jpg'
import img3 from '/assets/images/chapter7/3.jpg'
import img4 from '/assets/images/chapter7/4.jpg'
import imgDevice from '/assets/images/chapter7/bg_device.png'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <section class="section_common">
    <h2>FIXED CONTENT</h2>
  </section>
  <section class="section_fixed">
    <article class="wrap_fixed inner">
      <h2 class="title_fixed">watchOS</h2>
      <div class="content_txt">
        <p class="txt01 active">
          여러분 드디어 수업이 막바지에 이르렀습니다 :)
        </p>
        <p class="txt02">
          2편에서는 더 고급스럽고 난이도 있는 인터렉션을 만들 예정입니다
        </p>
        <p class="txt03">
          1편에서 기초를 탄탄하게 다져야 2편이 수월해집니다
        </p>
        <p class="txt04">
          이 수업이 여러분에게 많은 도움이 되었다면 좋겠습니다
        </p>
      </div>
      <div class="content_device">
        <!-- sticky로 고정시킬 엘리먼트-->
        <div class="wrap_img">
          <figure class="img_device">
            <img src="${imgDevice}" alt="" />
          </figure>
          <div class="wrap_slide">
            <!-- 이미지 슬라이더 -->
            <div class="slide">
              <figure>
                <img src="${img1}">
              </figure>
              <figure>
                <img src="${img2}">
              </figure>
              <figure>
                <img src="${img3}">
              </figure>
              <figure>
                <img src="${img4}">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
  <section class="section_common"></section>
</div>`

  window.addEventListener('load', () => {
    const $target = $('.wrap_fixed')
    const $slide = $('.wrap_slide .slide')
    const deviceImgWidth = 195

    const contentIn = (percent) => {
      let moveX = 0
      if (percent < 12) {
        $('.section_fixed .content_txt .txt01').classList.remove('active')
        $('.section_fixed .content_txt .txt02').classList.remove('active')
        $('.section_fixed .content_txt .txt03').classList.remove('active')
        $('.section_fixed .content_txt .txt04').classList.remove('active')
      } else if (percent >= 12 && percent < 43) {
        moveX = deviceImgWidth * 0
        $('.section_fixed .content_txt .txt01').classList.add('active')
      } else if (percent >= 43 && percent < 75) {
        moveX = deviceImgWidth * 1
        $('.section_fixed .content_txt .txt02').classList.add('active')
      } else if (percent >= 75 && percent < 107) {
        moveX = deviceImgWidth * 2
        $('.section_fixed .content_txt .txt03').classList.add('active')
      } else if (percent >= 107) {
        moveX = deviceImgWidth * 3
        $('.section_fixed .content_txt .txt04').classList.add('active')
      }

      $slide.style.transform = `translateX(${-moveX}px)`
    }
    const scrollFunc = () => {
      const scrollHeight = $target.offsetHeight - window.innerHeight
      const sectionOffsetTop = $target.offsetTop
      const winScrollTop = window.scrollY
      const sectionScrollTop = winScrollTop - sectionOffsetTop
      const scrollPercent = (sectionScrollTop / scrollHeight) * 100
      contentIn(scrollPercent)
    }
    window.addEventListener('scroll', () => {
      scrollFunc()
    })
    scrollFunc()
  })
})()
