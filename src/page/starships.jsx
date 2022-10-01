import { Link, Outlet } from "react-router-dom";
import Customhook from "../hooks/itemList";
import { starWarsStarshipsRequest } from "../request/starwars";
const StarshipsPage = () => {
  const { items } = Customhook({ request: starWarsStarshipsRequest });

  return (
    <>
      {items?.map((item, index) => {
        const splitUri = item.url.split("/");
        const id = splitUri[splitUri.length - 2];
        return (
          <div key={"starships" + index}>
            <Link to={{ pathname: `/details/starships/${id}` }}>
              {item.name}
            </Link>
          </div>
        );
      })}
      <h1>starships</h1>;
      <Outlet />
    </>
  );
};

export default StarshipsPage;
