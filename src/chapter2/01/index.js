import '/assets/css/common.css'
import './index.css'
import { $ } from '/assets/js/common.js'
import jakeImg from '/assets/images/jake.png'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <section class="sec01">
    <h2 class="tit">TRANSFORM</h2>
    <article class="transfom_ex">
      <ul class="list">
        <li>
          <figure class="jake jake01">
            <img src="${jakeImg}" />
          </figure>
          <strong class="txt">ROTATE</strong>
        </li>
        <li>
          <figure class="jake jake02">
            <img src="${jakeImg}" />
          </figure>
          <strong class="txt">SCALE</strong>
        </li>
        <li>
          <figure class="jake jake03">
            <img src="${jakeImg}" />
          </figure>
          <strong class="txt">SKEW</strong>
        </li>
        <li>
          <figure class="jake jake04">
            <img src="${jakeImg}" />
          </figure>
          <strong class="txt">TRANSLATE</strong>
        </li>
      </ul>
      <button class="btn start">START</button>
      <button class="btn reset">RESET</button>
    </article>
  </section>
  <section class="sec02">
    <h2 class="tit">TRANSFORM & TRANSITION</h2>
    <article class="transfom_ex">
      <ul class="list">
        <li>
          <figure class="jake jake01">
            <img src="${jakeImg}" />
          </figure>
          <strong class="txt">ROTATE</strong>
        </li>
        <li>
          <figure class="jake jake02">
            <img src="${jakeImg}" />
          </figure>
          <strong class="txt">SCALE</strong>
        </li>
        <li>
          <figure class="jake jake03">
            <img src="${jakeImg}" />
          </figure>
          <strong class="txt">SKEW</strong>
        </li>
        <li>
          <figure class="jake jake04">
            <img src="${jakeImg}" />
          </figure>
          <strong class="txt">TRANSLATE</strong>
        </li>
      </ul>
      <button class="btn start">START</button>
      <button class="btn reset">RESET</button>
    </article>
  </section>
</div>`

  window.addEventListener('load', () => {
    const time = 500
    $('.sec01 .btn.start').addEventListener('click', () => {
      $('.sec01 .jake').forEach((el, idx) => {
        setTimeout(() => el.classList.add('active'), time * idx)
      })
    })
    $('.sec01 .btn.reset').addEventListener('click', () => {
      $('.sec01 .jake').forEach(el=> el.classList.remove('active'))
    })

    $('.sec02 .btn.start').addEventListener('click', () => {
      $('.sec02 .jake').forEach((el, idx) => {
        setTimeout(() => el.classList.add('active'), time * idx)
      })
    })
    $('.sec02 .btn.reset').addEventListener('click', () => {
      $('.sec02 .jake').forEach(el=> el.classList.remove('active'))
    })


  })
})()
