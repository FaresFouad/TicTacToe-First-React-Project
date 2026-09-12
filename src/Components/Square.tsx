interface SquareProps {
  value: string;
  turn: string;
  row: number;
  col: number;
  handleClick: (turn: string, row: number, col: number) => void;
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