import styled from "styled-components/macro";
import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div`
  margin: 100px 40px;

  @media screen and (max-width: 768px) {
    margin: 100px 10px;
  }
`;

export const CustomButton = styled(IconButton)`
  position: fixed;
  z-index: 9;
  right: 20px;
  top: 20px;
`;
