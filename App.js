import Home from './src/pages/Home'
import { addComponents } from './src/assets/js/utils/addComponent'

/**
 * Función que contiene el componente padre de la aplicación y la inserta al elemento raíz de la aplicación
 * @param {string} root - Recibe el nombre identificador del elemento raíz en el DOM para pasarlo como parámetro al método addElement que buscará en base al parámetro y lo insertara con el contenido
 */
const App = (root) => {
  addComponents.addElement(root, Home())
}

export default App
