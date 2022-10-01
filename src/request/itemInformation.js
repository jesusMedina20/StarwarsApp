import { BaseUrlStarwars } from "./constants";

export const detailsRequest = async ({ id, type }) => {
  try {
    const request = await fetch(`${BaseUrlStarwars}/${type}/${id}`);
    const response = await request.json();
    // console.log(type);
    return response;
  } catch (error) {
    return { message: error.message };
  }
};
