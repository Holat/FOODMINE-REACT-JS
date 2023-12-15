import { Link } from "react-router-dom";
import classes from "./header.module.css";
import { useCart } from "../../hooks/useCart";

export const Header = () => {
  const user = {
    name: "John",
  };

  const logout = () => {
    console.log("Logout");
  };

  const { cart } = useCart();

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Link to={"/"} className={classes.logo}>
          Holat
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/profile">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}

            <li>
              <Link to={"/cart"}>
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
