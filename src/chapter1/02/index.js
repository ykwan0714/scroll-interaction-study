import '/assets/css/common.css'
import './index.css'
import { $ } from '/assets/js/common.js'
import img1 from '/assets/images/1.jpg'
import img2 from '/assets/images/2.jpg'
import img3 from '/assets/images/3.jpg'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <section class="sec01">
    <h2 class="com_tit">INFINITE SCROLL</h2>
    <article class="sc_infinity">
      <ul class="list">
        <li>
          <figure>
            <img src="${img1}">
          </figure>
        </li>
        <li>
          <figure>
            <img src="${img2}">
          </figure>
        </li>
        <li>
          <figure>
            <img src="${img3}">
          </figure>
        </li>
        <li>
          <figure>
            <img src="${img1}">
          </figure>
        </li>
        <li>
          <figure>
            <img src="${img2}">
          </figure>
        </li>
        <li>
          <figure>
            <img src="${img3}">
          </figure>
        </li>
      </ul>
    </article>
    <div class="footer">
      <p>FOOTER</p>
    </div>
  </section>
  </div>`

  window.addEventListener('load', () => {})
})()
