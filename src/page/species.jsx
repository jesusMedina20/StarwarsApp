import { Link, Outlet } from "react-router-dom";
import Customhook from "../hooks/itemList";
import { starWarsSpeciesRequest } from "../request/starwars";
const SpeciesPage = () => {
  const { items } = Customhook({ request: starWarsSpeciesRequest });

  return (
    <>
      {items?.map((item, index) => {
        const splitUri = item.url.split("/");
        const id = splitUri[splitUri.length - 2];
        return (
          <div key={"species" + index}>
            <Link to={{ pathname: `/details/species/${id}` }}>{item.name}</Link>
          </div>
        );
      })}
      <h1>species</h1>;
      <Outlet />
    </>
  );
};

export default SpeciesPage;
