import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Dress not found 😔</h2>
        <p>Sorry, this dress is currently unavailable.</p>
      </div>
    );
  }

  return (
    <section className="product-details">
      <div className="product-image-box">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h1>{product.name}</h1>

        <div className="product-rating">
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
        </div>

        <h2>Rs. {product.price.toLocaleString()}</h2>

        <p className="product-description">
          Beautiful and comfortable dress specially designed
          for little girls. Perfect for parties, birthdays and
          special occasions.
        </p>

        <div className="size-section">
          <h3>Select Size</h3>

          <div className="sizes">
            <button>2-3Y</button>
            <button>4-5Y</button>
            <button>6-7Y</button>
            <button>8-9Y</button>
          </div>
        </div>

        <button
          className="add-cart-btn"
          onClick={() => addToCart(product)}
        >
          🛒 Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;