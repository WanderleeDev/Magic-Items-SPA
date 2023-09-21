/**
 * Objeto que proporciona una función para agregar elementos al DOM.
 * @type {Object}
 */
export const addComponents = {
  /**
   * Agrega un elemento HTML o un string HTML en una posición específica en relación a un elemento de referencia.
   *
   * @param {string} ref - Selector o ID de referencia a un elemento.
   * @param {HTMLElement | string} content - Elemento HTML o string HTML a insertar
   * @param {string} position - [position='beforebegin'] - Posición para insertar el contenido ('beforebegin', 'afterbegin', 'beforeend', 'afterend')- Valor predeterminado: 'beforebegin.
   * @throws {Error} Si elemento donde se va montar el componte no existe en base a la ref(referencia)
   * @throws {Error} Si el contenido no es un elemento HTML o un string HTML valido, o si la posición no es válida.
   */
  addElement (ref, content, position = 'beforebegin') {
    /**
     * Elemento de referencia en el DOM
     * @type {HTMLElement}
     */
    const target = document.querySelector(ref)

    //  mensajes de error
    const errMessage = 'El contenido a insertar debe ser un elemento HTML o un string HTML válido. La posición debe ser una de las siguientes: \'beforebegin\', \'afterbegin\', \'beforeend\', \'afterend\'.'
    const errReference = `el elemento ${ref} no es encontrado en el DOM`

    //  Verifica si el elemento existe en el DOM
    if (!target) throw new Error(errReference)

    //  Evalúa content para HTMLElement o string HTML y guarda su valor
    const isHTMLElement = content instanceof HTMLElement
    const isStringHTML = typeof content === 'string' && content.startsWith('<') && content.endsWith('>')

    //  Ternario para comprobar se content es un HTMLElement o un string HTML
    isHTMLElement
    //  inserta el elemento HTML
      ? target.insertAdjacentElement(position, content)
      : isStringHTML
        //  Insertar el string HTML
        ? target.insertAdjacentHTML(position, content)
        //  lanza el error si content no es valida a las anteriores
        : (() => { throw new Error(errMessage) })()
  }
}
