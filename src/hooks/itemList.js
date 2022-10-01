// el request = un parametro

import { useEffect, useState } from "react";

const Customhook = ({ request }) => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    (async () => {
      if (request) {
        const data = await request();
        setItem(data.results);
      }
    })();
  }, []);

  return { items };
};
export default Customhook;
