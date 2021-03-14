import Logo from './Logo';

const Nav = () =>{
return(
        <nav className="nav">
          {/* <a href="#" className="logo">MoGo</a> */}
          <Logo/>
          <ul className="menu">
            <li className="menu__item"><a href="#">Йог Радха Гири</a></li>
            <li className="menu__item"><a href="#">Наша миссия</a></li>
            <li className="menu__item"><a href="#">Махашиваратри</a></li>
            <li className="menu__item"><a href="#">События</a></li>
            <li className="menu__item"><a href="#">Ягья</a></li>
            <li className="menu__item"><a href="#">contact</a></li>
            {/* <li className="menu__item">
              <ul className="menu-btn">
                <li className="menu-btn__list">
                  <button type="submit" className="menu-btn__button" href="#">
                    <svg className="menu-btn__svg">
                      <use href="./images/menu-icon-svg/sprite.svg#icon-cart"></use>
                    </svg>
                  </button>
                </li>
                <li className="menu-btn__list">
                  <button type="submit" className="menu-btn__button" href="#">
                    <svg className="menu-btn__svg">
                      <use href="./images/menu-icon-svg/sprite.svg#icon-glass"></use>
                    </svg>
                  </button>
                </li>
              </ul>
            </li> */}
          </ul> 
        </nav>
)
}

export default Nav