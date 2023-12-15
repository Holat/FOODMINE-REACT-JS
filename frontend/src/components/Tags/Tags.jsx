/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "./tags.module.css";

const Tags = ({ tags, forFoodPage }) => {
  return (
    <div
      className={classes.container}
      style={{ justifyContent: forFoodPage ? "start" : "center" }}
    >
      {tags.map((tag) => (
        <Link to={`/tag/${tag.name}`} key={tag.name}>
          {tag.name}
          {!forFoodPage && `(${tag.count})`}
        </Link>
      ))}
    </div>
  );
};

export default Tags;
