import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "../styles/Wishlist.css";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <section className="empty-wishlist">

        <div className="wishlist-empty-icon">
          ♡
        </div>

        <h1>Your Wishlist is Empty</h1>

        <p>
          Save your favorite Marshmellow dresses here.
        </p>

        <Link
          to="/"
          className="wishlist-shop-btn"
        >
          EXPLORE DRESSES
        </Link>

      </section>
    );
  }

  return (
    <section className="wishlist-page">

      <div className="wishlist-header">

        <p>MARSHMELLOW</p>

        <h1>My Wishlist ♡</h1>

        <span>
          Your favorite dresses in one place.
        </span>

      </div>

      <div className="wishlist-grid">

        {wishlist.map((product) => (
          <div
            className="wishlist-card"
            key={product.id}
          >

            <div className="wishlist-image">

              <img
                src={product.image}
                alt={product.name}
              />

              <button
                type="button"
                className="wishlist-remove"
                onClick={() =>
                  removeFromWishlist(product.id)
                }
              >
                ♥
              </button>

            </div>

            <div className="wishlist-info">

              <div className="wishlist-rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>

              <h2>
                {product.name}
              </h2>

              <p>
                Rs. {product.price.toLocaleString()}
              </p>

              <button
                type="button"
                className="wishlist-cart-btn"
                onClick={() =>
                  addToCart(product)
                }
              >
                ADD TO CART
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Wishlist;