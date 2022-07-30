import '/assets/css/common.css'
import './index.scss'
import { $ } from '/assets/js/common.js'
import img01 from '/assets/images/chapter5/1.jpg'
import img02 from '/assets/images/chapter5/2.jpg'
import img03 from '/assets/images/chapter5/3.jpg'
import img04 from '/assets/images/chapter5/4.jpg'
import img06 from '/assets/images/chapter5/6.jpg'
import imgIphone from '/assets/images/chapter5/img_iphone01.png'
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
  <section class="section_today">
    <article class="wrap_today">
      <div class="row_table">
        <div class="cell_table">
          <strong class="txt_date">TODAY</strong>
          <div class="date_count"></div> <!-- 롤링될 날짜가 추가될 엘리먼트 -->
        </div>
      </div>
    </article>
  </section>
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
    const sperateEvent = (query, callback) => {
      const ele = $(query)
      let isActive = false // active class의 추가 여부
      const calculateActivation = () => {
        const screenHeight = window.innerHeight // 현재 브라우저의 높이
        const fastIn = screenHeight / 2 // 화면의 절반 크기, active 클래스가 보다 빠르게 추가되도록 한다.
        const winScrollY = window.scrollY
        const sectionHeight = ele.offsetHeight // 엘리먼트의 높이
        const sectionTop = ele.offsetTop - fastIn // 엘리먼트의 offsetTop
        const sectionBottom = sectionTop + sectionHeight + fastIn // 엘리먼트의 바닥, 즉 엘리먼트에서 벗어나는 지점

        if (winScrollY >= sectionTop && winScrollY <= sectionBottom && isActive === false) {
          isActive = true
          ele.classList.add('active')
          if (typeof callback === 'function') {
            callback()
          }
        }
      }
      window.addEventListener('scroll', calculateActivation)
      window.addEventListener('resize', calculateActivation)
      calculateActivation()

    }

    const countDate = () => {
      const $target = $('.date_count')
      const date = new Date()
      const todayDate = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}` // 현재 날짜 문자열
      const rolling = 24 //
      const resultArray = todayDate.split('') // 날짜를 한자리 숫자로 쪼갠다. 2022 -> 2,0,2,2
      resultArray.forEach((val, idx) => {
        const div = document.createElement('div') // 숫자 리스트를 가질 element
        div.setAttribute('class', 'list_count')
        for (let i = 0; i <= rolling; i++) {
          const span = document.createElement('span')
          // 시작 숫자로 부터 1씩 증가하여 총 24개의 글자를 만든다. 2가 시작 숫자면, 2, 3, 4... 10으로 나눈 나머지로 한자리 숫자만 사용한다.
          span.innerText = (val * 1 + i) % 10
          div.appendChild(span) // 만들어 진 숫자를 상위에서 생성한 element에 삽입한다.
        }
        $target.appendChild(div) // 만들어진 숫자 리스트 element를 타겟 element에 삽입한다.
        setTimeout(() => {
          div.classList.add('active') // 0.3초마다 active 되도록 한다.
        }, idx * 300)
      })
    }

    // 각 엘리먼트들 마다 이벤트를 등록한다.
    sperateEvent('.section_first')
    sperateEvent('.section_today', countDate)
    sperateEvent('.article_img')
    sperateEvent('.article_mask')
    sperateEvent('.section_mask')
    sperateEvent('.section_overlap')

  })
})()
