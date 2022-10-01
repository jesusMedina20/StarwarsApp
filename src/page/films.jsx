import { Outlet, Link } from "react-router-dom";
import CarruselRender from "../component/carrusel/carruselRender";
import ItemView from "../component/ItemView/itemView";
import Customhook from "../hooks/itemList";
import { starWarsFilmsRequest } from "../request/starwars";

const FilmsPage = () => {
  const { items } = Customhook({ request: starWarsFilmsRequest });
  const itemsWithImage = items.map((item, index) => {
    return {
      ...item,
      image: `https://picsum.photos/id/${index + "0"}/700`,
    };
  });

  return (
    <>
      <CarruselRender imagenes={itemsWithImage} />
      <div className="films-grid">
        {itemsWithImage?.map((item, index) => {
          return <ItemView data={item} key={"people" + index} type="people" />;
        })}
      </div>
      <h1>films</h1>
      <Outlet />
    </>
  );
};

export default FilmsPage;
