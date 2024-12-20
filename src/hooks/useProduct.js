import { useEffect, useState } from "react";
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "../services/product";
import { PAGE_SIZE } from "../constants/common";

export const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const init = async () => {
      const data = await getCategories();
      const productsData = await getProducts("", 1);
      const totalPages = Math.ceil(productsData.total / PAGE_SIZE);
      setCategories(data);
      setProducts(productsData.products);
      setTotalPages(totalPages);
      console.log(totalPages);
    };
    init();
  }, []);

  const fetchProducts = async (category, searchText, page = 1) => {
    if (category) {
      const productsData = await getProductsByCategory(category, page);
      const totalPages = Math.ceil(productsData.total / PAGE_SIZE);
      setProducts(productsData.products);
      setTotalPages(totalPages);
    } else {
      const productsData = await getProducts(searchText ?? "", page);
      const totalPages = Math.ceil(productsData.total / PAGE_SIZE);
      setProducts(productsData.products);
      setTotalPages(totalPages);
    }
  };

  return {
    products,
    categories,
    totalPages,
    fetchProducts,
  };
};
