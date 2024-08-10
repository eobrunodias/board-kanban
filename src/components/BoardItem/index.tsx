import { Container } from "./styles";

export function BoardItem() {
  return (
    <Container>
      <div className="header">
        <span>Titulo item</span>
      </div>

      <div>- - -</div>
      <div>- - -</div>
      <div>- - -</div>
    </Container>
  );
}
