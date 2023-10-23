import { useState } from "react";

export const Coin = ({ name, icon, price, symbol }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const styleImg = {
    transition: "0.3s ease",
    transform: isHover ? "rotate(360deg)" : "rotate(0)",
  };

  const styleName = {
    color: isHover ? "#ffc400" : "white",
  };

  return (
    <div
      className="coin"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 style={styleName}>Name: {name}</h1>
      <img style={styleImg} src={icon} alt="icon" />
      <h3>Price: {price}</h3>
      <h3>Symbol: {symbol}</h3>
    </div>
  );
};
