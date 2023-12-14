/* eslint-disable react/prop-types */
import classes from "./starRating.module.css";

const StarRating = ({ stars, size }) => {
  const styles = {
    width: size + "px",
    height: size + "px",
    marginRight: size / 6 + "px",
  };

  function Star({ number }) {
    const halfNumber = number - 0.5;
    return stars >= number ? (
      <img src="/star-full.svg" alt={number} style={styles} />
    ) : stars >= halfNumber ? (
      <img src="/star-half.svg" alt={number} style={styles} />
    ) : (
      <img src="/star-empty.svg" alt={number} style={styles} />
    );
  }

  return (
    <div className={classes.rating}>
      {[1, 2, 3, 4, 5].map((number) => (
        <Star number={number} key={number} />
      ))}
    </div>
  );
};

StarRating.defaultProps = {
  size: 18,
};

export default StarRating;
