import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchRequest } from "../../request/search";
import Input from "../input";
import "./searchBar.css";
const types = [
  "people",
  "films",
  "planets",
  "species",
  "vehicles",
  "starships",
];

const Search = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      (async () => {
        const requestTypePromise = types.map(async (type) => {
          const requestData = await SearchRequest({
            type,
            name: search,
          });
          const itemResult = requestData.results.map((item) => {
            return { ...item, type };
          });
          return itemResult;
        });
        const requestType = await Promise.all(requestTypePromise);
        setResult(requestType.flat());
      })();
    }
  }, [search]);
  //   return Object.keys(userInfo).map((key) => {
  return (
    <div>
      <div className="input">
        <Input value={search} onChange={handleChange} />
        <div className="menu">
          {result?.map((item, index) => {
            const splitUri = item.url.split("/");
            const id = splitUri[splitUri.length - 2];
            return (
              <div className="option">
                <Link to={{ pathname: `/details/${item.type}/${id}` }}>
                  {item.name}
                </Link>
                <span className="tipo">{item.type}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  //   });
};
export default Search;
