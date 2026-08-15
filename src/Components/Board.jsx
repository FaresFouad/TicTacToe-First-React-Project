import Square from './Square';
import { useState } from 'react';
import CheckWin from '../Func/logic';
import { Link } from 'react-router-dom';
function Board() {

    const [Turn, setTurn] = useState('X');
    const [Message, setMessage] = useState("Player X's Turn");
    const [BoardState, setBoardState] = useState([
        [{move: " ", isPressed: false}, {move: " ", isPressed: false}, {move: " ", isPressed: false}],
        [{move: " ", isPressed: false}, {move: " ", isPressed: false}, {move: " ", isPressed: false}],
        [{move: " ", isPressed: false}, {move: " ", isPressed: false}, {move: " ", isPressed: false}]
    ]);
    const [Winner, setWinner] = useState(' ');

    function handleClick(Turn, Row, Col) {
        if (BoardState[Row][Col].isPressed === false && Winner === ' ') {
            const newBoardState = [...BoardState];
            newBoardState[Row] = [...newBoardState[Row]];
            newBoardState[Row][Col] = {move: Turn, isPressed: true};
            setBoardState(newBoardState);
            const winner = CheckWin(newBoardState.map(row => row.map(square => square.move)));
            if (winner === 'X') {
                setMessage("Player X Wins!");
                setWinner('X');
            } else if (winner === 'O') {
                setMessage("Player O Wins!");
                setWinner('O');
            } else if (winner === 'D') {
                setMessage("It's a Draw!");
                setWinner('D');
            } else {
                if (Turn === 'X') {
                    setTurn('O');
                    setMessage("Player O's Turn");
                } else {
                    setTurn('X');
                    setMessage("Player X's Turn");
                }
            }
        }
        else if (Winner !== ' ') {
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
        setTurn('X');
        setMessage("Player X's Turn");
        setWinner(' ');
    }
    return(
   
    <>  
    <h1 className="message">{Message}</h1>
   <div className="board">   

        <Square Value={BoardState[0][0].move} Turn={Turn} Row={0} Col={0} IsPressed={BoardState[0][0].isPressed} handleClick={handleClick} />
        <Square Value={BoardState[0][1].move} Turn={Turn} Row={0} Col={1} IsPressed={BoardState[0][1].isPressed} handleClick={handleClick} />
        <Square Value={BoardState[0][2].move} Turn={Turn} Row={0} Col={2} IsPressed={BoardState[0][2].isPressed} handleClick={handleClick} />
        <Square Value={BoardState[1][0].move} Turn={Turn} Row={1} Col={0} IsPressed={BoardState[1][0].isPressed} handleClick={handleClick} />
        <Square Value={BoardState[1][1].move} Turn={Turn} Row={1} Col={1} IsPressed={BoardState[1][1].isPressed} handleClick={handleClick} />
        <Square Value={BoardState[1][2].move} Turn={Turn} Row={1} Col={2} IsPressed={BoardState[1][2].isPressed} handleClick={handleClick} />
        <Square Value={BoardState[2][0].move} Turn={Turn} Row={2} Col={0} IsPressed={BoardState[2][0].isPressed} handleClick={handleClick} />
        <Square Value={BoardState[2][1].move} Turn={Turn} Row={2} Col={1} IsPressed={BoardState[2][1].isPressed} handleClick={handleClick} />
        <Square Value={BoardState[2][2].move} Turn={Turn} Row={2} Col={2} IsPressed={BoardState[2][2].isPressed} handleClick={handleClick} />
        

   </div>
   
   <button className="reset-button" onClick={ResetGame}>Reset Game</button>
   <Link to="/">
     <button className="back-button">Back to Home</button>
   </Link>
   </> );
    
    
    
}

export default Board;