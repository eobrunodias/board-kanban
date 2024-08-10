import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme["gray-400"]};
  border: 2px solid black;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 0.5rem;

  .header {
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.5rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme["gray-600"]};
    color: ${({ theme }) => theme.white};
    border-radius: 10px;
    border: 2px solid black;
  }
`;
