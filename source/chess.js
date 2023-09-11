/**
 * генерирует шахматную доску заданного размера.
 * @param {number} N - размер доски
 */
const chess = (N) => {
  if (!isFinite(N) || N <= 1 || N % 1 !== 0) {
    throw new TypeError('Число должно быть положительным целым');
  }  

  let chessboard = '';

  Array.from({ length: N }).forEach((_, i) => {
    Array.from({ length: N }).forEach((_, j) => {
      chessboard += (i + j) % 2 === 0 ? '*' : ' ';
    });
    chessboard += '\n';
  });
  return chessboard;
  
};