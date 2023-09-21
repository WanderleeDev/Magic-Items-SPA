import Header from '@components/Header'
import Banner from '@components/Banner'
import Footer from '../assets/js/components/Footer/Footer'
const Home = () => {
  const tempContainer =
  `
    ${Header}
    ${Banner}
    ${Footer}
  `
  return tempContainer.trim()
}

export default Home
