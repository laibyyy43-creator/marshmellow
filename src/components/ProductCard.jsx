import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const favorite = isInWishlist(product.id);

  const handleWishlist = () => {
    if (favorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <span className="product-badge">
          NEW
        </span>

        <button
          type="button"
          className="wishlist-button"
          onClick={handleWishlist}
          aria-label="Wishlist"
        >
          {favorite ? "♥" : "♡"}
        </button>

      </div>

      <div className="product-info">

        <div className="product-rating">
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
        </div>

        <h3>{product.name}</h3>

        <p className="product-price">
          Rs. {product.price.toLocaleString()}
        </p>

        <button
          type="button"
          className="add-cart-button"
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </button>

      </div>

    </div>
  );
}

export default ProductCard;