import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { isLoggedIn, user, logout } = useAuth();
  function getLinkClass({ isActive }) {
    if (isActive) {
      return "active-link";
    }

    return "";
  }

  return (
    <header className="site-header">
      <div className="header-content">
        <NavLink to="/" className="logo">The Weekly Blogger</NavLink>

        <nav className="navbar">
          <NavLink to="/" end className={getLinkClass}>
            Home
          </NavLink>

          <NavLink to="/blog" className={getLinkClass}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>

          {isLoggedIn ? (
            <div className="nav-user">
              <span>Hi, {user.username}</span>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <NavLink to="/login" className="nav-login">
              Login
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
