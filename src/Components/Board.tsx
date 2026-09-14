import Square from './Square';
import { useState } from 'react';
import CheckWin from '../Func/logic';
import { Link } from 'react-router-dom';
function Board() {


    type SquareData = {
        move: "X" | "O" | " ";
        isPressed: boolean;
    };

    type PlayerMove = "X" | "O";

    const [turn, setTurn] = useState<PlayerMove>("X");
    const [message, setMessage] = useState<string>("Player X's Turn");
    const [boardState, setBoardState] = useState<SquareData[][]>([
        [{move: " ", isPressed: false}, {move: " ", isPressed: false}, {move: " ", isPressed: false}],
        [{move: " ", isPressed: false}, {move: " ", isPressed: false}, {move: " ", isPressed: false}],
        [{move: " ", isPressed: false}, {move: " ", isPressed: false}, {move: " ", isPressed: false}]
    ]);
    const [winner, setWinner] = useState<"X" | "O" | "D" | " ">(" ");

    function handleClick(turn: PlayerMove, row: number, col: number) {
        if (boardState[row][col].isPressed === false && winner === " ") {
            const newBoardState = [...boardState];
            newBoardState[row] = [...newBoardState[row]];
            newBoardState[row][col] = {move: turn, isPressed: true};
            setBoardState(newBoardState);
            const winner = CheckWin(newBoardState.map(row => row.map(square => square.move)));
            if (winner === "X") {
                setMessage("Player X Wins!");
                setWinner("X");
            } else if (winner === "O") {
                setMessage("Player O Wins!");
                setWinner("O");
            } else if (winner === "D") {
                setMessage("It's a Draw!");
                setWinner("D");
            } else {
                if (turn === "X") {
                    setTurn("O");
                    setMessage("Player O's Turn");
                } else {
                    setTurn("X");
                    setMessage("Player X's Turn");
                }
            }
        }
        else if (winner !== " ") {
            setMessage(`Game Over! Please Click Reset to start a new game.`);
        }
        else{
            setMessage('This square is already pressed. Please select another square.');
        }
    }

    function ResetGame() {
        setBoardState([
            [{move: " ", isPressed: false}, {move: " ", isPressed: false}, {move: " ", isPressed: false}],
            [{move: " ", isPressed: false}, {move: " ", isPressed: false}, {move: " ", isPressed: false}],
            [{move: " ", isPressed: false}, {move: " ", isPressed: false}, {move: " ", isPressed: false}]
        ]);
        setTurn("X");
        setMessage("Player X's Turn");
        setWinner(" ");
    }
    return(
   
    <>  
    <h1 className="message">{message}</h1>
   <div className="board">   

        <Square value={boardState[0][0].move} turn={turn} row={0} col={0} handleClick={handleClick} />
        <Square value={boardState[0][1].move} turn={turn} row={0} col={1} handleClick={handleClick} />
        <Square value={boardState[0][2].move} turn={turn} row={0} col={2} handleClick={handleClick} />
        <Square value={boardState[1][0].move} turn={turn} row={1} col={0} handleClick={handleClick} />
        <Square value={boardState[1][1].move} turn={turn} row={1} col={1} handleClick={handleClick} />
        <Square value={boardState[1][2].move} turn={turn} row={1} col={2} handleClick={handleClick} />
        <Square value={boardState[2][0].move} turn={turn} row={2} col={0} handleClick={handleClick} />
        <Square value={boardState[2][1].move} turn={turn} row={2} col={1} handleClick={handleClick} />
        <Square value={boardState[2][2].move} turn={turn} row={2} col={2} handleClick={handleClick} />
        

   </div>
   
   <button className="reset-button" onClick={ResetGame}>Reset Game</button>
   <Link to="/">
     <button className="back-button">Back to Home</button>
   </Link>
   </> );
    
    
   
}

export default Board;