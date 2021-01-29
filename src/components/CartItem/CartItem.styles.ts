import styled from "styled-components/macro";
import { Button } from "@material-ui/core";
import { inherits } from "util";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  flex: 1;
`;

export const InfoContentWrapper = styled.div``;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuantityButton = styled(Button).attrs(() => ({
  size: "small",
  variant: "contained",
}))`
  border-radius: 50%;
  font-size: 2rem;
  font-weight: 300;
  background: transparent;
`;

export const Image = styled.img`
  max-width: 90px;
  object-fit: contain;
  margin: 40px 0 0 40px;
`;

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const Title = styled.h3`
  font-size: 1rem;
  opacity: 0.85;
`;

export const PriceTag = styled.p`
  font-size: 0.7rem;
  opacity: 0.85;
`;
export const Price = styled.p`
  font-size: 1.1rem;
  opacity: 0.85;
`;
