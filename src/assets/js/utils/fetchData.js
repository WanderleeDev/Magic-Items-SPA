/**
 * Clase para gestionar las solicitudes de datos
 * @class
 */

class FetchManager {
  /**
   * Constructor de la clase
   * @constructor
   * @param {string} url - Url usada para la solicitud
   */
  constructor (url) {
    this.url = url
  }

  /**
   * Método para obtener la data de la URL
   * @async
   * @function
   * @throws {Error} Se produce si hay un error al obtener los datos
   * @returns {Promise} Retorna una promesa con los datos obtenidos
   */

  async getData () {
    try {
      const fetchData = await fetch(this.url)
      if (!fetchData.ok) {
        throw new Error(`Error al obtener los datos. Código de estado: ${fetchData.status}`)
      }

      const responseData = await fetchData.json()
      return responseData
    } catch (error) {
      console.error(`Error al obtener los datos: ${error.message}`)
    }
  }
}

export default FetchManager
