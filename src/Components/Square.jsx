function Square({ Value, Turn, Row, Col, IsPressed, handleClick }) {
  return (
    <button className="square" onClick={() => handleClick(Turn, Row, Col, IsPressed)}>
      {Value === "X" ? "❌" : ""}
      {Value === "O" ? "⭕" : ""}
    </button>
  );
}

export default Square;