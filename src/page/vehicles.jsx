import { Link, Outlet } from "react-router-dom";
import Customhook from "../hooks/itemList";
import { starWarsVehiclesRequest } from "../request/starwars";
const VehiclesPage = () => {
  const { items } = Customhook({ request: starWarsVehiclesRequest });

  return (
    <>
      {items?.map((item, index) => {
        const splitUri = item.url.split("/");
        const id = splitUri[splitUri.length - 2];
        return (
          <div key={"vehicles" + index}>
            <Link to={{ pathname: `/details/vehicles/${id}` }}>
              {item.name}
            </Link>
          </div>
        );
      })}
      <h1>vehicles</h1>;
      <Outlet />
    </>
  );
};

export default VehiclesPage;
