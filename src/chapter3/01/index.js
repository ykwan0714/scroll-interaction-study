// <a href='https://www.freepik.com/vectors/underwater'>Underwater vector created by freepik - www.freepik.com</a>
import '/assets/css/common.css'
import './index.css'
import diverBodyImg from '/assets/images/diver-body.png'
import diverLegImg from '/assets/images/diver-leg.png'
;(() => {
  const app = document.getElementById('App')
  app.innerHTML = `<div class="wrap">
  <div class="motion_diver">
    <figure class="figure_body">
      <img src="${diverBodyImg}" />
    </figure>
    <figure class="figure_leg">
      <img src="${diverLegImg}" />
    </figure>
  </div>
</div>`

  window.addEventListener('load', () => {})
})()
