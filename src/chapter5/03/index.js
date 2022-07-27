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
  <section class="section_product">
    <article class="article_mask">
      <div class="wrap_title">
        <h2 class="title_common">IMAGE MASK</h2>
        <p class="txt_common">숨어있다가 나오는 느낌의 이미지 마스크 기법</p>
      </div>
      <ul class="list_img">
        <li>
          <figure class="img_content">
            <img src="${img01}" />
          </figure>
        </li>
        <li>
          <figure class="img_content">
            <img src="${img02}" />
          </figure>
        </li>
        <li>
          <figure class="img_content">
            <img src="${img03}" />
          </figure>
        </li>
        <li>
          <figure class="img_content">
            <img src="${img04}" />
          </figure>
        </li>
      </ul>
    </article>
    <article class="article_img">
      <div class="area_txt">
        <h3 class="title">텍스트와 이미지 패턴</h3>
        <p class="txt_desc">
          왼쪽은 텍스트 오른쪽은 이미지! :) CSS를 활용해 모션을 만들고
          스크롤위치에 도착 했을때 등장하는 인터렉션을 구현해보세요. 공부가
          목적이 아니라도 재밌는 수업이 될거라 믿습니다 :)
        </p>
      </div>
      <div class="area_img">
        <figure>
          <img src="${img06}" />
        </figure>
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
      $('.article_mask').classList.add('active')
      $('.article_img').classList.add('active')
    }, 200)
  })
})()
