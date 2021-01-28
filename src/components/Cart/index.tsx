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
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h3>Subtotal: $ {calculateTotal(cartItems).toFixed(2)}</h3>
    </Wrapper>
  );
};

export default Cart;
