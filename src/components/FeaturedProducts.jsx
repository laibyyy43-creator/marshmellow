import ProductCard from "./ProductCard";
import products from "../data/products";

function FeaturedProducts() {
  return (
    <section className="featured-products">

      <div className="section-heading">
        <p>OUR COLLECTION</p>

        <h2>New Arrivals</h2>

        <span>
          Discover our newest dresses made with love for little girls.
        </span>
      </div>

      <div className="products-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

      <div className="view-all-container">
        <button className="view-all-button" type="button">
          VIEW ALL DRESSES
        </button>
      </div>

    </section>
  );
}

export default FeaturedProducts;