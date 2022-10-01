import { Link, Outlet } from "react-router-dom";
import Customhook from "../hooks/itemList";
import { starWarsPlanetsRequest } from "../request/starwars";
const PlanetsPage = () => {
  const { items } = Customhook({ request: starWarsPlanetsRequest });
  return (
    <>
      {items?.map((item, index) => {
        const splitUri = item.url.split("/");
        const id = splitUri[splitUri.length - 2];
        return (
          <div key={"planets" + index}>
            <Link to={{ pathname: `/details/planets/${id}` }}>{item.name}</Link>
          </div>
        );
      })}
      <h1>planets</h1>;
      <Outlet />
    </>
  );
};

export default PlanetsPage;
