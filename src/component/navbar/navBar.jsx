import "./navBar.css";
import { Link } from "react-router-dom";
import Search from "./searchBarLogic";

const links = [
  { name: "People", link: "/people" },
  { name: "films", link: "/films" },
  { name: "planets", link: "/planets" },
  { name: "species", link: "/species" },
  { name: "vehicles", link: "/vehicles" },
  { name: "starships", link: "/starships" },
];
const NavBar = () => {
  return (
    <header>
      <div id="navbar">
        {links?.map((link) => {
          return (
            <span className="types" key={link.link}>
              <Link to={link.link}>{link.name}</Link>
            </span>
          );
        })}
        <Search />
      </div>
    </header>
  );
};

export default NavBar;
