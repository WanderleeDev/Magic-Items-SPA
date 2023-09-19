import './header.scss'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'

const Header = `
<header class="headerPage">
  ${Navbar}
  ${Banner}
</header>`

export default Header.trim()
