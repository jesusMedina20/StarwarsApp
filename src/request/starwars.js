import { BaseUrlStarwars } from "./constants";

export const starWarsPeopleRequest = async () => {
  try {
    const request = await fetch(`${BaseUrlStarwars}/people`);
    const response = await request.json();
    return response;
  } catch (error) {
    return { message: error.message };
  }
};

export const starWarsFilmsRequest = async () => {
  try {
    const request = await fetch(`${BaseUrlStarwars}/films`);
    const response = await request.json();
    return response;
  } catch (error) {
    return { message: error.message };
  }
};

export const starWarsSpeciesRequest = async () => {
  try {
    const request = await fetch(`${BaseUrlStarwars}/species`);
    const response = await request.json();
    return response;
  } catch (error) {
    return { message: error.message };
  }
};

export const starWarsPlanetsRequest = async () => {
  try {
    const request = await fetch(`${BaseUrlStarwars}/planets`);
    const response = await request.json();
    return response;
  } catch (error) {
    return { message: error.message };
  }
};

export const starWarsVehiclesRequest = async () => {
  try {
    const request = await fetch(`${BaseUrlStarwars}/vehicles`);
    const response = await request.json();
    return response;
  } catch (error) {
    return { message: error.message };
  }
};

export const starWarsStarshipsRequest = async () => {
  try {
    const request = await fetch(`${BaseUrlStarwars}/starships`);
    const response = await request.json();
    return response;
  } catch (error) {
    return { message: error.message };
  }
};
