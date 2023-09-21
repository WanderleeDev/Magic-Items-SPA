import './footer.scss'
import NewsLetter from './components/NewsLetter/NewsLetter'
import SocialMedia from '../../shared/SocialMedia'
import CustomerInfoCenter from './components/CustomerInfoCenter/CustomerInfoCenter'

const Footer =
`
<footer class="footer">
  ${NewsLetter}
  ${SocialMedia}
  ${CustomerInfoCenter()}
  <p class="footer-copyright">Copyright</p>
</footer>
`
export default Footer.trim()
