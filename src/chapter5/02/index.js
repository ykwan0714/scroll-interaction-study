import '/assets/css/common.css'
import './index.scss'
import { $ } from '/assets/js/common.js'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <header class="header">
    <div class="logo">SCROLL INTERACTION</div>
  </header>
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
    <footer class="footer">
    <div class="txt_area">
      <p>당신의 열정을 응원합니다. :)</p>
    </div>
  </footer>
</div>`

  window.addEventListener('load', () => {
    setTimeout(function () {
      $('.section_today').classList.add('active')
    }, 200)

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
    countDate()
  })
})()
