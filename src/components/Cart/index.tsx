import React from "react";
import CartItem from "../CartItem";

import { Wrapper } from "./Cart.styles";

import { CartItemType } from "../../App";

type CartItemsProps = {
  cartItems: CartItemType[];
  addToCart: (selectedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<CartItemsProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>No items selected.</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart;
