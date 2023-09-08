/**
 * генерирует шахматную доску заданного размера.
 * @param {number} N - размер доски
 */
const chess = (N) => {
  if (N <= 1 || N % 1 !== 0) return null;

  let chessboard = '';

  for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        chessboard += (i + j) % 2 === 0 ? '*' : ' ';
      }
      chessboard += '\n';
  }
  return chessboard;
};
