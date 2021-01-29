import React from "react";
import CartItem from "../CartItem";

import { Wrapper, Header } from "./Cart.styles";

import { CartItemType } from "../../App";

type CartItemProps = {
  cartItems: CartItemType[];
  addToCart: (selectedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<CartItemProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  const subTotal = calculateTotal(cartItems).toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  return (
    <Wrapper>
      <Header>Your shopping cart:</Header>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h3>Subtotal: $ {subTotal}</h3>
    </Wrapper>
  );
};

export default Cart;
