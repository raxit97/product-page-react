import { PAGE_SIZE } from "../constants/common";

export const getCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  return data;
};

export const getProducts = async (searchText = "", page = 1) => {
  let url = `https://dummyjson.com/products`;
  if (searchText) {
    url += `/search?q=${searchText}&`;
  } else {
    url += "?";
  }
  url += `limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getProductsByCategory = async (category, page = 1) => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}?limit=${PAGE_SIZE}&skip=${
      (page - 1) * PAGE_SIZE
    }`,
  );
  const data = await response.json();
  return data;
};
