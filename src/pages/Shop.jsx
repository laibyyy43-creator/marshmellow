import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const categories = [
    "All",
    "Princess",
    "Party",
    "Casual",
    "Floral",
    "Summer",
  ];

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (sortOption === "low-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOption === "high-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <section className="shop-page">

      <div className="shop-header">
        <p>MARSHMELLOW COLLECTION</p>

        <h1>Shop Dresses 🎀</h1>

        <span>
          Find the perfect dress for every little celebration.
        </span>
      </div>

      <div className="shop-controls">

        <div className="search-box">

          <span>🔎</span>

          <input
            type="text"
            placeholder="Search for a dress..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        <select
          value={sortOption}
          onChange={(e) =>
            setSortOption(e.target.value)
          }
        >
          <option value="default">
            Sort By
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>
        </select>

      </div>

      <div className="category-filter">

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              selectedCategory === category
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>
        ))}

      </div>

      <div className="shop-result-text">
        Showing {filteredProducts.length} dresses
      </div>

      {filteredProducts.length > 0 ? (
        <div className="shop-products-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      ) : (
        <div className="no-results">

          <div className="no-results-icon">
            🔍
          </div>

          <h2>No Dresses Found</h2>

          <p>
            Try searching for another dress.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
          >
            SHOW ALL DRESSES
          </button>

        </div>
      )}

      <div className="shop-back-home">
        <Link to="/">
          ← Back to Home
        </Link>
      </div>

    </section>
  );
}

export default Shop;