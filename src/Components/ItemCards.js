import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Items } from "./Data";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";

let cartData = [];
function ItemCards({ imgSrc, name, ratings, price, itemId }) {
  const [isFavourite, setFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const [isCart, setCart] = useState(null);
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isFavurite ${isFavourite ? "active" : ""}`}
        onClick={() => setFavourite(!isFavourite)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName"> {name} </h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                key={i}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h4 className="price">
              {" "}
              <span>$</span> {price}
            </h4>
          </div>
          <i
            className="addToCart"
            onClick={() => setCart(Items.find((n) => n.id === itemId))}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCards;
