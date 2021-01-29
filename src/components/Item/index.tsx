import { CartItemType } from "../../App";

import {
  Container,
  Image,
  TextWrapper,
  Title,
  Description,
  PriceTag,
  AddButton,
} from "./Item.styles";

type CartItemProps = {
  item: CartItemType;
  handleAddToCart: (selectedItem: CartItemType) => void;
};

const Item: React.FC<CartItemProps> = ({ item, handleAddToCart }) => {
  const truncateDescription = (str: string, totalLetters: number) => {
    return str?.length > totalLetters
      ? str.substr(0, totalLetters - 1) + "..."
      : str;
  };

  return (
    <Container>
      <Image src={item.image} alt={item.title} />
      <TextWrapper>
        <Title> {item.title} </Title>
        <Description>
          {" "}
          {truncateDescription(item.description, 120)}{" "}
        </Description>
        <PriceTag>$ {item.price.toFixed(2)},- </PriceTag>
      </TextWrapper>
      <AddButton onClick={() => handleAddToCart(item)}>Add to cart</AddButton>
    </Container>
  );
};

export default Item;
