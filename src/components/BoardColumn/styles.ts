import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme["gray-300"]};

  height: 37.5rem;

  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 10px;
  width: 100%;

  .boards {
    padding: 1.5rem;
    overflow-y: scroll;
  }

  .title {
    background-color: ${({ theme }) => theme["green-500"]};
    width: 100%;
    padding: 2rem;
    border-radius: 10px 10px 0 0;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
