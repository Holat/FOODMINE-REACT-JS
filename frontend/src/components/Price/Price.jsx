/* eslint-disable react/prop-types */

const Price = ({ locale, price, currency }) => {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(price);

  return <span>{formatPrice()}</span>;
};

Price.defaultProps = {
  locale: "en-US",
  currency: "USD",
};

export default Price;
