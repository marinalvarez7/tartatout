export default class extends React.Component {
  render() {
    return (
      <>
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <img src={logoTartatout} alt="Logo" />
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active"><Link to="/">Home</Link></a>
                  <a className="navbar-item"><Link to="/ingredients">Mes ingrédients</Link></a>
                  <a className="navbar-item"><Link to="/recipes">Mes recettes</Link></a>
                  <a className="navbar-item"><Link to="/signup">Sign up</Link></a>
                  <a className="navbar-item"><Link to="/login">Log in</Link></a>
                </div>
              </div>
          </nav>
        </div>
      </>
      );
  }
}