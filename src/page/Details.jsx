import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailsRequest } from "../request/itemInformation";
import "./details.css";
const Details = () => {
  const data = useParams();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    (async () => {
      const requestData = await detailsRequest({
        type: data.type,
        id: data.id,
      });
      setUserInfo(requestData);
      // console.log(requestData);
    })();
  }, []);
  // console.log(data);
  return Object.keys(userInfo).map((key) => {
    return (
      <div key={key.url} className="details">
        <span>
          {key}: {userInfo[key]}
        </span>
      </div>
    );
  });
};

export default Details;
