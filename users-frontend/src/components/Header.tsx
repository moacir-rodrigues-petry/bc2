import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          User Management
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className={`nav-link ${
                  location.pathname === "/users" ? "active" : ""
                }`}
              >
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
