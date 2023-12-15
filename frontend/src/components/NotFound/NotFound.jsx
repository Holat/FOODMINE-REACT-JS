import { Link } from "react-router-dom";
import classes from "./notFound.module.css";

const NotFound = ({ message, linkRoute, linkText }) => {
  return (
    <div className={classes.container}>
      {message}
      <Link to={linkRoute}>{linkText}</Link>
    </div>
  );
};

NotFound.defaultProps = {
  message: "Nothing Found!",
  linkRoute: "/",
  linkText: "Go to Home Page",
};

export default NotFound;
