import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeQuantity,
  clearAll,
  removeFromCart,
} from "../../redux/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cartItem.css";

export default function CartItem() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  if (cart.length === 0) return <p>No item added yet.</p>;

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <section className="cartItem">
      <Link to={"/"}>&larr; Back</Link>
      <ul className="cartItem__list">
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="item img" />
            <div className="cartItem__details">
              <p>{item.title}</p>
              <p>$ {item.price}</p>
              <div className="cartItem__btns">
                <button
                  onClick={() =>
                    dispatch(changeQuantity({ id: item.id, change: -1 }))
                  }
                  disabled={item.quantity === 0}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(changeQuantity({ id: item.id, change: 1 }))
                  }>
                  +
                </button>
                <span>{item.quantity * item.price}</span>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/*Cart Item  sub total*/}

      <div className="subTotal">
        <h4>Total Price: USD {totalPrice.toFixed(2)}</h4>
        <button onClick={() => dispatch(clearAll())}> Clear All</button>
      </div>
    </section>
  );
}
