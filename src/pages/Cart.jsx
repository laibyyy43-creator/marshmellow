import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <div className="empty-cart-icon">
          🛒
        </div>

        <h1>Your Cart is Empty</h1>

        <p>
          Looks like you haven't added any dresses yet.
        </p>

        <Link
          to="/"
          className="continue-shopping"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">

      <div className="cart-header">

        <div>
          <p className="cart-small-title">
            MARSHMELLOW
          </p>

          <h1>Shopping Cart 🛒</h1>
        </div>

        <button
          type="button"
          className="clear-cart"
          onClick={clearCart}
        >
          Clear Cart
        </button>

      </div>

      <div className="cart-content">

        {/* CART ITEMS */}

        <div className="cart-items">

          {cart.map((item) => (
            <div
              className="cart-item"
              key={`${item.id}-${item.selectedSize || "default"}`}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">

                <h2>{item.name}</h2>

                <p className="cart-category">
                  {item.category}
                </p>

                {item.selectedSize && (
                  <p className="cart-size">
                    Size:{" "}
                    <strong>
                      {item.selectedSize}
                    </strong>
                  </p>
                )}

                <p className="cart-price">
                  Rs. {item.price.toLocaleString()}
                </p>

                <div className="quantity-control">

                  <button
                    type="button"
                    onClick={() =>
                      decreaseQuantity(
                        item.id,
                        item.selectedSize
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      increaseQuantity(
                        item.id,
                        item.selectedSize
                      )
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  type="button"
                  className="remove-item"
                  onClick={() =>
                    removeFromCart(
                      item.id,
                      item.selectedSize
                    )
                  }
                >
                  Remove
                </button>

              </div>

              <div className="item-total">

                Rs.{" "}
                {(
                  item.price * item.quantity
                ).toLocaleString()}

              </div>

            </div>
          ))}

        </div>

        {/* ORDER SUMMARY */}

        <aside className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>

            <strong>
              {cart.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              )}
            </strong>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>

            <strong>
              Rs. {cartTotal.toLocaleString()}
            </strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>

            <strong>FREE</strong>
          </div>

          <div className="summary-line"></div>

          <div className="summary-total">
            <span>Total</span>

            <strong>
              Rs. {cartTotal.toLocaleString()}
            </strong>
          </div>

          <Link
            to="/checkout"
            className="checkout-btn"
          >
            Proceed to Checkout
          </Link>

          <Link
            to="/"
            className="continue-link"
          >
            ← Continue Shopping
          </Link>

        </aside>

      </div>

    </section>
  );
}

export default Cart;