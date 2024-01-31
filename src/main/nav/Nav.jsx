import "./nav.scss";
import logo from "./images/logo.png";
import category from "./images/category.png";
import trend from "./images/trend-up.png";
import user from "./images/profile-user.png";
import box from "./images/box.png";
import discount from "./images/discount-shape.png";
import info from "./images/info-circle.png";
import toggle from "./images/toggle.png";
import moon from "./images/moon.png";
import arrow from "./images/arrow-right.png";
import settings from "./images/setting.png";
import logout from "./images/logout.png";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt="icon" height="30px" />
        </li>
        <li>
          <img src={category} alt="icon" height="22px" />
        </li>
        <li>
          <img src={trend} alt="icon" height="22px" />
        </li>
        <li>
          <img src={user} alt="icon" height="20px" />
        </li>
        <li>
          <img src={box} alt="icon" height="22px" />
        </li>
        <li>
          <img src={discount} alt="icon" height="22px" />
        </li>
        <li>
          <img src={info} alt="icon" height="22px" />
        </li>
        <li>
          <img src={toggle} alt="icon" height="22px" />
        </li>
        <li>
          <img src={moon} alt="icon" height="22px" />
        </li>
        <li>
          <img src={arrow} alt="icon" height="22px" />
        </li>
        <li>
          <img src={settings} alt="icon" height="22px" />
        </li>
        <li>
          <img src={logout} alt="icon" height="22px" />
        </li>
      </ul>
    </nav>
    // </nav>
  );
};

export default Nav;
