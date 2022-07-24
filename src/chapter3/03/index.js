import '/assets/css/common.css'
import './index.css'
import { $ } from '/assets/js/common.js'
import fishImg from '/assets/images/fish.png'
import diverBodyImg from '/assets/images/diver-body.png'
import diverLegImg from '/assets/images/diver-leg.png'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <div class="area_motion">
    <div class="bg one active"></div>
    <div class="bg two"></div>
    <div class="bg three"></div>
    <div class="bg four"></div>
    <div class="fish">
      <figure>
       <img src="${fishImg}" >
      </figure>
    </div>
    <div class="diver">
    <figure class="figure_body">
      <img src="${diverBodyImg}" />
    </figure>
    <figure class="figure_leg">
      <img src="${diverLegImg}" />
    </figure>
  </div>
  </div>
</div>`

  window.addEventListener('load', () => {
    const parallaxDistance =  350 // 요소가 최대로 움직일 수 있는 거리 조절
    const $areaMotion = $('.area_motion')

    /* 움직일 요소  */
    const $bgs = $('.area_motion .bg') // 배경
    const $diver = $('.area_motion .diver') // 다이버
    const $fish = $('.area_motion .fish') // 물고기

    const changeBakcground = (percent) => {
      //해당 높이가 됐을 때 백그라운드를 바꿔주는 함수
      let index = -1
      if (percent < 25) {
        index = 0
      } else if (percent >= 25 && percent < 50) {
        index = 1
      } else if (percent >= 50 && percent < 75) {
        index = 2
        $fish.classList.remove('active')
      } else if (percent >= 75 ) {
        index = 3
        $fish.classList.add('active')
      }
      $bgs.forEach((el, idx) => {
        el.classList.remove('active')
        if (idx === index) el.classList.add('active')
      })
    }

    const moveParallax = (percent) => {
      $diver.style.transform = `translate(214px, ${parallaxDistance * (percent / 100)}px) rotate(70deg)`
    }
    window.addEventListener('scroll', () => {
      const scrollRealHeight = $areaMotion.offsetHeight - window.innerHeight // 실제로 스크롤 해야 될 높이 값을 구합니다
      const scrollY = window.scrollY // (window.pageYOffset === window.scorllY)
      const scrollPerecnt = (scrollY / scrollRealHeight) * 100 //백분율 구하기
      changeBakcground(scrollPerecnt)
      moveParallax(scrollPerecnt)
    })
  })
})()
