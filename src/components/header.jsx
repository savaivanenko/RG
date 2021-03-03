import Nav from './Nav'
const  Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <Nav/>
        
        <h1 className="header__head"><span className="italic-header">himalayan siddha</span> Yoga and Meditation</h1>
        {/* <a className="header__linklearn" href="#">Learn more</a> */}
      </div>
    </header>
  )  
}

export default Header