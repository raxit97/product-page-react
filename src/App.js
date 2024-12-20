import { Header } from "./components/layout/Header";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "./components/layout/Footer";
import { Banner } from "./components/Banner";
import { useState } from "react";
import { useProduct } from "./hooks/useProduct";
import { CategoryDropdown } from "./components/CategoryDropdown";
import { Pagination } from "./components/common/Pagination";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const {
    products,
    categories,
    totalPages,
    fetchProducts,
  } = useProduct();

  const handleCategoryChange = (category) => {
    setSearchText("");
    setCurrentPage(1);
    setSelectedCategory(category.name);
    fetchProducts(category.slug);
  };

  const clearCategory = (e) => {
    e.stopPropagation();
    setCurrentPage(1);
    setSelectedCategory("");
    fetchProducts();
  };

  const updateSearchText = (value) => {
    setCurrentPage(1);
    setSelectedCategory("");
    setSearchText(value);
    fetchProducts(null, value);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    fetchProducts(selectedCategory, searchText, page);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col w-full max-w-7xl mx-auto">
        <Header
          searchText={searchText}
          setSearchText={setSearchText}
          updateSearchText={updateSearchText}
        />
        <Banner />
        <CategoryDropdown
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          clearCategory={clearCategory}
          categories={categories}
        />
        <main className="flex-grow">
          <div className="mx-auto max-w-7xl py-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Featured Products
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </main>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-4 mb-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
