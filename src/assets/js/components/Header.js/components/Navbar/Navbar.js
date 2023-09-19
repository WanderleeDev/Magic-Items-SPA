import './navbar.scss'

const Navbar =
`<nav class="headerPage-navbar">
    <div class="headerPage-containerLogo">
      <img class="headerPage-logo" src="#" alt="title page">
    </div>
    <button id="btnMenu" aria-label="desplegar o ocultar menu mobile" class="headerPage-btnMenu">
      <svg class="headerPage-btnSvg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
      </svg>
    </button> 
    <div class="headerPage-searchBar">
      <label for="iconSearch" class="headerPage-labelSearch">
        <svg class="headerPage-searchIcon"  viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path></svg>
      </label>
      <input id="iconSearch" class="headerPage-searchInput" type="search">
    </div
    <div class="headerPage-containerIcons">
      <a class="headerPage-shoppingCarLink" href="#" aria-label="ver carrito de compras">
        <svg class="headerPage-shoppingCarIcon" viewBox="0 0 24 24"><path d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45012 21.6603 6.00241C21.6603 6.09973 21.6461 6.19653 21.6182 6.28975L19.2182 14.2898C19.0913 14.7127 18.7019 15.0024 18.2603 15.0024H6.00436V17.0024H17.0044V19.0024H5.00436C4.45207 19.0024 4.00436 18.5547 4.00436 18.0024V6.41662ZM6.00436 7.00241V13.0024H17.5163L19.3163 7.00241H6.00436ZM5.50436 23.0024C4.67593 23.0024 4.00436 22.3308 4.00436 21.5024C4.00436 20.674 4.67593 20.0024 5.50436 20.0024C6.33279 20.0024 7.00436 20.674 7.00436 21.5024C7.00436 22.3308 6.33279 23.0024 5.50436 23.0024ZM17.5044 23.0024C16.6759 23.0024 16.0044 22.3308 16.0044 21.5024C16.0044 20.674 16.6759 20.0024 17.5044 20.0024C18.3328 20.0024 19.0044 20.674 19.0044 21.5024C19.0044 22.3308 18.3328 23.0024 17.5044 23.0024Z"></path></svg>
      </a>
      <a class="headerPage-loginLink"  href="./assets/partials/form/form.html" aria-label="Ingresar o crear cuenta">
        <svg class="headerPage-loginIcon" viewBox="0 0 24 24"><path d="M3 4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509ZM6.35687 18H17.8475C16.5825 16.1865 14.4809 15 12.1022 15C9.72344 15 7.62182 16.1865 6.35687 18ZM12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13Z"></path></svg>
      </a>
    </div>
    <ul id="menu" class="headerPage-menu">
      <li class="headerPage-li"><a class="headerPage-link" href="/index.html">Home</a></li>
      <li class="headerPage-li"><a class="headerPage-link" href="#app">Products</a></li>
      <li class="headerPage-li"><a class="headerPage-link" href="#newsletter">Contact</a></li>
      <li class="headerPage-li"><a class="headerPage-link" href="#about">About</a></li>
    </ul>
  </nav>
`

export default Navbar
