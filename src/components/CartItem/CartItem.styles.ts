import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 20px;

  .container {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  button {
    border-radius: 50%;
    font-size: 2rem;
    font-weight: 300;
  }

  img {
    max-width: 150px;
    object-fit: contain;
    margin: 40px 0 0 40px;
  }
  .amount {
    font-weight: bold;
    font-size: 1.6rem;
  }

  h3,
  p {
    font-size: 1rem;
    opacity: 0.85;
  }
`;
