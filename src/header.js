import { activeClassToggle } from "./activeClassToggle";

export const showHeader = () => {
  const headerHTML = `
    <section class="top_txt">
      <div class="head container">
        <div class="head_txt">
          <p>Free shipping, 30-day return or refund guarantee</p>
        </div>
        <div class="sign_in_up">
          <a href="#">SIGN IN</a>
          <a href="#">SIGN UP</a>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="navbar-brand">
        <a href="index.html">
          <img
            src="./images/logo2.png"
            alt="ShopSphere eCommerce logo"
            width="80%"
            height="auto"
          />
        </a>
      </div>

      <nav class="navbar">
        <ul>
          <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="products.html" class="nav-link">Products</a>
          </li>
          <li class="nav-item">
            <a href="contact.html" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a
              href="addToCart.html"
              class="nav-link add-to-cart-button"
              id="cartValue"
            >
              <i class="fa-solid fa-cart-shopping"> 0 </i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
`;

  const headerElem = document.querySelector('.section-navbar');
  headerElem.insertAdjacentHTML('afterbegin', headerHTML);
  activeClassToggle();
};