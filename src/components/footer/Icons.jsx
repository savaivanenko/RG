import svgFB from '../../images/social-icons-svg/fb.svg';

const Icons = () => {
  return (
    <div class="1overlay">
      <ul class="overlay__list">
        <li class="overlay__item">
          <a href="#">
            <svg class="team__svg">
              <use href={svgFB}></use>
            </svg>
          </a>
        </li>
        <li class="overlay__item">
          <a href="#">
            <svg class="team__svg">
              <use href="./images/social-icons-svg/sprite3.svg#icon-twitter"></use>
            </svg>
          </a>
        </li>
        <li class="overlay__item">
          <a href="#">
            <svg class="team__svg">
              <use href="./images/social-icons-svg/sprite3.svg#icon-pinterest"></use>
            </svg>
          </a>
        </li>
        <li class="overlay__item">
          <a href="#">
            <svg class="team__svg">
              <use href="./images/social-icons-svg/sprite3.svg#icon-instagram"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Icons;
