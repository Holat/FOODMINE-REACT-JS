import StarRating from "../StarRating/StarRating";
import classes from "./thumbnails.module.css";
import { Link } from "react-router-dom";

import Price from "../Price/Price";

// eslint-disable-next-line react/prop-types
const Thumbnails = ({ foods }) => {
  if (!foods) return null;

  return (
    <ul className={classes.list}>
      {
        // eslint-disable-next-line react/prop-types
        foods.map((food) => (
          <li key={food.id}>
            <Link to={`/food/${food.id}`}>
              <img
                className={classes.image}
                src={`${food.imageUrl}`}
                alt={food.name}
              />

              <div className={classes.content}>
                <div className={classes.name}>{food.name}</div>
                <span
                  className={`${classes.favorite} ${
                    food.favorite ? "" : classes.not
                  }`}
                >
                  ❤
                </span>
                <div className={classes.stars}>
                  <StarRating stars={food.stars} />
                </div>
                <div className={classes.product_item_footer}>
                  <div className={classes.origins}>
                    {food.origins.map((origin) => (
                      <span key={origin}>{origin}</span>
                    ))}
                  </div>
                  <div className={classes.cook_time}>
                    <span>🕒</span>
                    {food.cookTime}
                  </div>
                </div>
                <div className={classes.price}>
                  <Price price={food.price} />
                </div>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

export default Thumbnails;
