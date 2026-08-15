function CheckWin(array: string[][]): string{
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (array[i][0] !== ' ' && array[i][0] === array[i][1] && array[i][1] === array[i][2]) {
            return array[i][0];
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (array[0][i] !== ' ' && array[0][i] === array[1][i] && array[1][i] === array[2][i]) {
            return array[0][i];
        }
    }
    // Check diagonals
    if (array[0][0] !== ' ' && array[0][0] === array[1][1] && array[1][1] === array[2][2]) {
        return array[0][0];
    }
    if (array[0][2] !== ' ' && array[0][2] === array[1][1] && array[1][1] === array[2][0]) {
        return array[0][2];
    }
    if (array.flat().every(cell => cell !== ' ')) {
        return 'D'; // Draw
    }
    return 'U'; // Undecided
}

export default CheckWin;