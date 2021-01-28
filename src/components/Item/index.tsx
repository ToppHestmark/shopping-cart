import { Button } from "@material-ui/core";
import { CartItemType } from "../../App";
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (selectedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const truncateDescription = (str: string, totalLetters: number) => {
    return str?.length > totalLetters
      ? str.substr(0, totalLetters - 1) + "..."
      : str;
  };

  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3> {item.title} </h3>
        <p> {truncateDescription(item.description, 80)} </p>
        <h3>$ {item.price.toFixed(2)} </h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Item;
