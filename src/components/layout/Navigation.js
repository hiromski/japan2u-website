import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.banner}>
      <div className={classes.logo}>Welcome to Japan2U</div>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/"> Main Page</Link>
            </li>
            <li>
              <Link to= "/flash-card">Flash Card</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
