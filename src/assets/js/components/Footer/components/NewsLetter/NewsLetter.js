import './newsletter.scss'

const Newsletter = `
<form id="newsletter"  class="newsletter" action="" method="get">
  <p class="newsletter-info">Suscríbete a nuestro boletín semanal para estar actualizados con nuestras ofertas y nuevos producto</p>
  <div class="newsletter-wrapper">
    <input class="newsletter-response" type="email" placeholder="Ingresa tu correo" name="email">
    <input class="newsletter-submitResponse" type="submit" value="Enviar">
  </div>
  <div class="newsletter-conditionsBlock">
    <input class="newsletter-conditionCheck" id="conditions" type="checkbox" name="textBoletin" value="true">
    <label class="newsletter-conditions" for="conditions">
      <a  id="conditions" class="newsletter-seeConditions" href="./assets/partials/404/404.html" target="_blank" aria-label="Ver términos y condiciones">Aceptar la política de tratamientos de datos</a>
    </label>
  </div>
</form>
`
export default Newsletter.trim()
