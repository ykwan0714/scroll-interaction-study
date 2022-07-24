import '/assets/css/common.css'
import './index.scss'
import videoFile from '/assets/video/sky.mp4'
import list1Img from '/assets/images/chapter4/img_list01.jpg'
import list2Img from '/assets/images/chapter4/img_list02.jpg'
import list3Img from '/assets/images/chapter4/img_list03.jpg'
import mson1Img from '/assets/images/chapter4/mson1.jpg'
import mson2Img from '/assets/images/chapter4/mson2.jpg'
import mson3Img from '/assets/images/chapter4/mson3.jpg'
import mson4Img from '/assets/images/chapter4/mson4.jpg'
import mson5Img from '/assets/images/chapter4/mson5.jpg'
import mson6Img from '/assets/images/chapter4/mson6.jpg'
import mson7Img from '/assets/images/chapter4/mson7.jpg'
import mson8Img from '/assets/images/chapter4/mson8.jpg'
import { $ } from '/assets/js/common.js'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <header class="header">
    <div class="logo">SCROLL INTERACTION STUDY</div>
  </header>
  <nav class="nav">
    <ul class="list_nav">
      <li>
        <button class="btn btn_top">TOP</button>
      </li>
      <li>
        <button class="btn btn_mi">MI</button>
      </li>
      <li>
        <button class="btn btn_pl">PL</button>
      </li>
    </ul>
  </nav>
  <section class="section_main">
    <article class="visual_main">
      <h2 class="title_main">
        인터렉티브한 웹사이트
      </h2>
      <figure class="video_main">
        <video width="100%" autoplay loop muted>
        <source src="${videoFile}" type="video/mp4">
        </video>
      </figure>
    </article>
  </section>
  <section class="section_list active">
    <article class="wrap_list inner">
      <h2 class="title_common">
        IN LIST :)
      </h2>
      <p class="txt_common">
        해당요소가 엑티브 되면서 등장하는 리스트 이미지
      </p>
      <ul class="list_img">
        <li class="item_img item_img_first">
          <figure class="img_box">
            <img src="${list2Img}">
          </figure>
          <figure class="img_box last">
            <img src="${list3Img}">
          </figure>
        </li>
        <li class="item_img item_img_last">
          <figure class="img_box">
            <img src="${list1Img}">
          </figure>
        </li>
      </ul>
    </article>
  </section>
  <section class="section_parallax active">
    <h2 class="title_common">
      PARALLAX SCROLLING
    </h2>
    <p class="txt_common">
      여러 요소들의 시간차를 이용해 이동하는 패럴럭스 기법을 배워보세요 :)
    </p>
    <article class="list_banner inner">
      <figure class="img_box img1">
        <img src="${mson1Img}">
      </figure>
      <figure class="img_box img2">
        <img src="${mson2Img}">
      </figure>
      <figure class="img_box img3">
        <img src="${mson3Img}">
      </figure>
      <figure class="img_box img4">
        <img src="${mson4Img}">
      </figure>
      <figure class="img_box img5">
        <img src="${mson5Img}">
      </figure>
      <figure class="img_box img6">
        <img src="${mson6Img}">
      </figure>
      <figure class="img_box img7">
        <img src="${mson7Img}">
      </figure>
      <figure class="img_box img8">
        <img src="${mson8Img}">
      </figure>
      <div class="bg_line"></div>
    </article>
  </section>
  <footer class="footer">
    <div class="area_txt">
      <p>
        당신의 열정을 응원합니다. :)
      </p>
    </div>
  </footer>
</div>`

  window.addEventListener('load', () => {
    /*변수및 요소 선언*/
    const $header = $('.header')
    const $sectionMain = $('.section_main')
    const $sectionList = $('.section_list')
    const $sectionParallax = $('.section_parallax')
    const $parallaxItems = $('.section_parallax .img_box')
    const parallaxSpeed = 1000
    const parallaxStartValue = 1000 // 패럴렉스 시작 기준 값

    let scrollTop // 스크롤 현재 위치
    let sectionMainTop // 메인 섹션의 top
    let sectionMainBottom // 메인 섹션의 bottom
    let sectionStartParallaxTop // 패럴렉스 섹션이 시작할 element의 top
    let sectionParallaxScrollTop // 페럴렉스 섹션의 scrollTop
    let parallaxDistance // 패럴렉스 객체가 움직일 거리
    let isMovingSection = false // 섹션이 이동 중인지 체크하는 변수

    let animateId // 스크롤 animation을 구현하기 위한 interval ID를 저장하는 변수

    // 스크롤 animation을 구현하기 위한 interval
    const scrollAnimationTo = (moveY) => {
      isMovingSection = true
      const direction = moveY > window.scrollY ? 1 : -1
      const speed = 3
      let vy = 0
      let scrollY = 0
      clearInterval(animateId)
      animateId = setInterval(() => {
        vy += speed * direction
        if (direction > 0) {
          // 아래로 이동
          scrollY = Math.min(moveY, window.scrollY + vy)
        } else {
          // 위로 이동
          scrollY = Math.max(moveY, window.scrollY + vy)
        }

        window.scrollTo(0, scrollY)
        if ((direction > 0 && scrollY >= moveY) || (direction < 0 && scrollY <= moveY)) {
          // 클리어
          isMovingSection = false
          clearInterval(animateId)
        }
      }, 10)
    }
    const calActiveSection = () => {
      if (scrollTop > sectionMainTop && scrollTop < sectionMainBottom) {
        // 현재 스크롤이 list 섹션에 진입했다면
        if (isMovingSection === false) { // 이동 중이 아니라면,
          if ($header.classList.contains('active')) {
            // 헤더에 active 클래스가 있을 경우 위로 올라가는 상황 (active 클래스를 제거함으로써 css 효과 제거)
            $header.classList.remove('active')
            $sectionMain.classList.remove('active')
            $sectionList.classList.remove('active')
            scrollAnimationTo(sectionMainTop)
          } else {
            // 해더에 active 클래스가 없을 경우에는 아래로 내려오는 상황 (active 클래스를 추가함으로써 css 효과)
            $header.classList.add('active')
            $sectionMain.classList.add('active')
            $sectionList.classList.add('active')
            scrollAnimationTo(sectionMainBottom + 1)
          }
        }
      } else  {
        if (sectionParallaxScrollTop / parallaxSpeed * 100 > 60) {
          $sectionParallax.classList.add('active')
        } else {
          $sectionParallax.classList.remove('active')
        }

        $parallaxItems[0].style.transform =
          'translate(0px,' + parallaxDistance + 'px)'

        $parallaxItems[1].style.transform =
          'translate(0px,' + parallaxDistance * 2.1 + 'px)'

        $parallaxItems[2].style.transform =
          'translate(0px,' + parallaxDistance * 2.5 + 'px)'

        $parallaxItems[3].style.transform =
          'translate(0px,' + parallaxDistance * 3.5 + 'px)'

        $parallaxItems[4].style.transform =
          'translate(0px,' + parallaxDistance * 4.2 + 'px)'

        $parallaxItems[5].style.transform =
          'translate(0px,' + parallaxDistance * 4.8 + 'px)'

        $parallaxItems[6].style.transform =
          'translate(0px,' + parallaxDistance * 5.3 + 'px)'

        $parallaxItems[7].style.transform =
          'translate(0px,' + parallaxDistance * 2.7 + 'px)'

        document.querySelector('.section_parallax .bg_line').style.transform =
          'translate(0px,' + -parallaxDistance * 3 + 'px)'

      }

    }
    const handleScroll = () => {
      scrollTop = window.scrollY //스크롤 현재 위치를 구함
      sectionMainTop = $sectionMain.offsetTop // 메인 섹션의 top값을 구함.
      sectionMainBottom = sectionMainTop + $sectionMain.offsetHeight // 메인 섹션의 bottom값을 구함.
      sectionStartParallaxTop = $sectionList.offsetTop
      sectionParallaxScrollTop = scrollTop - sectionStartParallaxTop // 현재 scrollTop에서 페럴렉스를 시작할 section의 offsetTop 값을 빼서 패럴렉스가 동작할 영역의 scrollTop을 계산한다.
      parallaxDistance = Math.max(0, Math.min(parallaxStartValue, parallaxStartValue  - (parallaxStartValue * (sectionParallaxScrollTop / parallaxSpeed )))) // parallaxSpeed가 끝나는 시점을 결정한다.
      calActiveSection()
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    if (scrollTop >= sectionMainBottom) { // 초기 스크롤 위치에 따른 active 클래스 계산
      $header.classList.add('active')
      $sectionMain.classList.add('active')
      $sectionList.classList.add('active')
    }
  })
})()
