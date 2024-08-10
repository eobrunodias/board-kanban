import { BoardColumn } from "../../components/BoardColumn";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { BoardContainer, Container } from "./styles";

export function Home() {
  return (
    <Container>
      <DefaultLayout />
      <BoardContainer>
        <BoardColumn icon="#" title="titulo" count={0} />
        <BoardColumn icon="#" title="titulo" count={3} />
        <BoardColumn icon="#" title="titulo" count={5} />
      </BoardContainer>
    </Container>
  );
}
