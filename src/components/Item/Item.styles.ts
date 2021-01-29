import styled from "styled-components/macro";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 10px;
`;

export const AddButton = styled(Button)`
  border-radius: 0 0 20px 20px;
`;

export const Image = styled.img`
  max-width: 200px;
  display: flex;
  align-self: center;
  border-radius: 20px 20px 0 0;
  aspect-ratio: 9 / 12;
  object-fit: contain;

  &::before {
    background: red;
    opacity: 0.5;
  }
`;

export const TextWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: -10px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
`;
export const PriceTag = styled.p`
  font-weight: 200;
  color: rgba(0, 0, 0, 0.75);
  text-align: right;
`;
