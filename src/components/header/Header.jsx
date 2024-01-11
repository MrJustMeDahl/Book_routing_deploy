import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
      <header className="header">
        <div className="logo">Your Logo</div>
        <nav className="nav-menu">
          <NavLink to="/" exact="true" className={({isActive}) => (isActive ? "active" : 'none')}>
            All books
          </NavLink>
          <NavLink to="/addBook" className={({isActive}) => (isActive ? "active" : 'none')}>
            Add book
          </NavLink>
          <NavLink to="/findBook" className={({isActive}) => (isActive ? "active" : 'none')}>
            Find book
          </NavLink>
        </nav>
      </header>
    );
  };

  export default Header;