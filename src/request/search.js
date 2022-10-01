import { BaseUrlStarwars } from "./constants";

export const SearchRequest = async ({ type, name }) => {
  try {
    const request = await fetch(`${BaseUrlStarwars}/${type}/?search=${name}`);
    const response = await request.json();
    // console.log(type);
    return response;
  } catch (error) {
    return { message: error.message };
  }
};
