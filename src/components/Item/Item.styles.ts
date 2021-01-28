import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 10px;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
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
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }

  h3,
  p {
    color: rgba(0, 0, 0, 0.75);
  }
`;
