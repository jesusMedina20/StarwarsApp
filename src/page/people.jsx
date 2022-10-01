// import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import CarruselRender from "../component/carrusel/carruselRender";
import ItemView from "../component/ItemView/itemView";
import NavBar from "../component/navbar/navBar";
import Customhook from "../hooks/itemList";
import { starWarsPeopleRequest } from "../request/starwars";
import "./people.css";

const PeoplePage = () => {
  const { items } = Customhook({ request: starWarsPeopleRequest });
  const itemsWithImage = items.map((item, index) => {
    return {
      ...item,
      image: `https://picsum.photos/id/${index + "0"}/700`,
    };
  });

  return (
    <>
      <CarruselRender imagenes={itemsWithImage} />
      <div className="people-grid">
        {itemsWithImage?.map((item, index) => {
          return <ItemView data={item} key={"people" + index} type="people" />;
        })}
      </div>
      <h1>people</h1>
      <Outlet />
    </>
  );
};

export default PeoplePage;
