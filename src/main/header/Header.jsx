import "./header.scss";
import search from "./images/search.png";
import calendar from "./images/calendar.png";
import bell from "./images/bell.png";
import profile from "./images/Profile.png";
import arrow from "./images/Arrow - Down.png";

const Header = () => {
  return (
    <ol>
      <li>Dashboard</li>
      <li>
        <img src={search} alt="search-icon" />
        <input type="text" placeholder="Search..." />
      </li>
      <li>
        <img src={calendar} alt="calendar-icon" />
        January 27, 2024
      </li>
      <li>
        <img src={bell} alt="bell-icon" />
      </li>
      <li>
        <img src={profile} alt="profile-icon" height="30px" />
        <span>
          <p>Justin Bergson</p>
          Justin@gmail.com
        </span>
        <img src={arrow} alt="arrow-ixon" />
      </li>
    </ol>
  );
};

export default Header;
