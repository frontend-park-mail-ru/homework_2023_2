'use strict';

const chess = (N) => {;
    let chessboard = '';

    if (N <= 1 || N % 1 !== 0) return null;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {

        if ((i + j) % 2 === 0) {
            chessboard += '*';
        }else{
            chessboard += ' ';
        }
      }
      chessboard += '\n'; 
    }
    return chessboard;
};