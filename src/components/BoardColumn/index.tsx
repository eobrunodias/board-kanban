import { BoardItem } from "../BoardItem";
import { Container } from "./styles";

interface BoardColumnProps {
  icon: string;
  title: string;
  count: number;
}

export function BoardColumn({ icon, title, count }: BoardColumnProps) {
  return (
    <Container>
      <div className="title">
        <span>{icon}</span>
        <span>{title}</span>
        <span>{`(${count})`}</span>
      </div>
      <div className="boards">
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
      </div>
    </Container>
  );
}
