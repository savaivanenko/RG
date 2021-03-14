import Icons from './Icons';

const Footer = () => {
  return (
    <footer>
      <div class="wrap foot">
        <p>
          © Radha Giri <a href="#">Laaqiq</a>
        </p>
        <Icons />
        {/* <form class="form" action="#">
          <input
            class="form__input"
            type="email"
            name="e-mail"
            placeholder="Your email..."
            required
          />
          <button class="form__btn">subscribe</button>
        </form> */}
      </div>
    </footer>
  );
};

export default Footer;
