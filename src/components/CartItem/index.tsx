import React from "react";
import { CartItemType } from "../../App";

import {
  Container,
  Wrapper,
  InfoBox,
  InfoContentWrapper,
  QuantityButton,
  Image,
  Quantity,
  Title,
  PriceTag,
  Price,
} from "./CartItem.styles";

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
    <Container>
      <Wrapper>
        <Title> {item.title} </Title>
        <InfoBox>
          <InfoContentWrapper>
            <PriceTag>Price: </PriceTag>
            <Price> $ {item.price.toFixed(2)},- </Price>
          </InfoContentWrapper>
          <InfoContentWrapper>
            <PriceTag>Total:</PriceTag>
            <Price> $ {(item.amount * item.price).toFixed(2)},- </Price>
          </InfoContentWrapper>
        </InfoBox>
        <InfoBox>
          <QuantityButton
            disableElevation
            onClick={() => removeFromCart(item.id)}
          >
            -
          </QuantityButton>
          <Quantity>x {item.amount} </Quantity>
          <QuantityButton disableElevation onClick={() => addToCart(item)}>
            +
          </QuantityButton>
        </InfoBox>
      </Wrapper>
      <Image src={item.image} alt={item.title} />
    </Container>
  );
};

export default CartItem;
