import styled from "styled-components";

export const Container = styled.header`
  height: 10rem;
  width: 100%;
  background-color: gray;
  color: white;
  font-family: sans-serif;

  display: flex;
  align-items: center;

  header {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin-bottom: 0.625rem;
  }
`;
