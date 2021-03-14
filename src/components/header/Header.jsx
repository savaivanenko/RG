import Nav from './Nav';
// import fotoRG2 from '../../images/RG1.png';
const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <Nav />
        {/* <img className="foto" src={fotoRG2} alt="foto" /> */}
        <h1 className="header__head">
          <span className="italic-header">himalayan siddha</span> Yoga and
          Meditation
        </h1>
        {/* <a className="header__linklearn" href="#">Learn more</a> */}
      </div>
    </header>
  );
};

export default Header;
