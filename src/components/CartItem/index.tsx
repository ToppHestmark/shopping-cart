import React from "react";
import { Button } from "@material-ui/core";

import { CartItemType } from "../../App";

import { Wrapper } from "./CartItem.styles";

type CartItemProps = {
  item: CartItemType;
  addToCart: (selectedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => {
  return (
    <Wrapper>
      <div className="container">
        <h3> {item.title} </h3>
        <div className="information">
          <div>
            <p>Price: </p>
            <p> $ {item.price},- </p>
          </div>
          <div>
            <p>Total:</p>
            <p> $ {(item.amount * item.price).toFixed(2)},- </p>
          </div>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p className="amount"> {item.amount} </p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
