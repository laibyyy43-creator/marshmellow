import { Link } from "react-router-dom";
import "../styles/Order.css";

function Orders() {
  const orders = JSON.parse(
    localStorage.getItem("marshmellowOrders")
  ) || [];

  return (
    <section className="orders-page">
      <div className="orders-header">
        <p>MARSHMELLOW</p>
        <h1>My Orders 📦</h1>
        <span>Track your Marshmellow purchases</span>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <div className="no-orders-icon">📦</div>
          <h2>No Orders Yet</h2>
          <p>You haven't placed any orders yet.</p>
          <Link to="/" className="shop-now-btn">
            START SHOPPING
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-top">
                <div>
                  <h2>Order #{order.id}</h2>
                  <p>{order.date}</p>
                </div>

                <span className="order-status">Confirmed</span>
              </div>

              <div className="order-products">
                {order.items.map((item) => (
                  <div className="order-product" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div>
                      <h3>{item.name}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <strong>
                        Rs. { (item.price * item.quantity).toLocaleString() }
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-bottom">
                <span>Total</span>
                <strong>Rs. {order.total.toLocaleString()}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Orders;