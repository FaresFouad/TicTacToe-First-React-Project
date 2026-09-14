import type { PlayerMove }from "./Board";


interface SquareProps {
  value: PlayerMove | " ";
  turn: PlayerMove;
  row: number;
  col: number;
  handleClick: (turn: PlayerMove, row: number, col: number) => void;
}



function Square({ value, turn , row, col, handleClick }: SquareProps) {
  return (
    <button className="square" onClick={() => handleClick(turn, row, col)}>
      {value === "X" ? "❌" : ""}
      {value === "O" ? "⭕" : ""}
    </button>
  );
}

export default Square;