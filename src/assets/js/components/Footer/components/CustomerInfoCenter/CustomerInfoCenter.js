import './CustomerInfoCenter.scss'
/**
 * Componte que muestra listas con información del negocio y enlaces de atención al cliente
 * @function
 * @returns {string} Cadena de HTML que representa el componente
 */

const CustomerInfoCenter = () => {
  /**
   *@type {Object[]} FooterData - Datos del pie de página
   */

  const FooterData = [
    {
      subTitle: 'Atención al cliente',
      contentList: [
        'Preguntas frecuentes',
        'Cambios y devoluciones',
        'Ver coberturas',
        'Post Venta'
      ]
    },
    {
      subTitle: 'Sobre nosotros',
      contentList: [
        '¿Quienes somos?',
        'Nuestras sedes',
        'Blog',
        'Actualizaciones'
      ]
    },
    {
      subTitle: 'Tratamientos de datos',
      contentList: [
        'Privacidad',
        'Accesibilidad',
        'Términos y condiciones'
      ]
    }
  ]

  /** @type {string} tempContainer - Template string generada usando iterando FooterData */
  const tempContainer = `
  <ul id="about" class="dataCenter">
    ${
      FooterData.map((list, index) => {
        const { subTitle, contentList } = list
        return (`
        <li class="dataCenter-listItem">
          <label for="accordion-${index}" class="dataCenter-accordionHead">
            <h3 class="dataCenter-accordionTitle">${subTitle}</h3>
          </label>
          <input class="dataCenter-accordionHeadToggle" type="checkbox" id="accordion-${index}">
          <ul class="dataCenter-accordionBody">
            ${
              contentList.map(data => {
                return (
                  `<li class="dataCenter-accordionItem">
                    <a href="./assets/partials/404/404.html" target="_blank" aria-label="Ir a ${data}">${data}</a>
                  </li>`)
              }).join('')
            }
          </ul>
        </li>
        `)
      }).join('')
    }
  </ul>
  `
  return tempContainer.trim()
}

export default CustomerInfoCenter
