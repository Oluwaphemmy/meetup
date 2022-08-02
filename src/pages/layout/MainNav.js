import { Link } from "react-router-dom";

function MainNav() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/meet-up">Add new Meetups</Link>
          </li>
          <li>
            <Link to="/favourite">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
