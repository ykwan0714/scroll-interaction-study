import '/assets/css/common.css'
import './index.css'
import fishImg from '/assets/images/fish.png'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <div class="area_motion">
    <div class="bg one active"></div>
    <div class="bg two"></div>
    <div class="bg three"></div>
    <div class="bg four"></div>
    <figure class="motion_moon active">
      <img src="${fishImg}" >
    </figure>
  </div>
</div>`

  window.addEventListener('load', () => {})
})()
