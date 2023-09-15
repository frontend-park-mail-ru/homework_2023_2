/** 
 * Функция, которая рисует ASCII-ёлочку высотой N символов из звёздочек
 *
 * @param {number} height - Высота ёлочки
 * @returns {string} - Строка с ёлочкой
 */
const tree = function (height) {
    const heightNum = Number(height);
    const maxWidth = 2 * heightNum - 3;
    let temp = 1;
    if (maxWidth > 1) {
        let sumString = "";
        while(temp <= maxWidth) {
            sumString += `${" ".repeat((maxWidth - temp) / 2)}${ "*".repeat(temp)}${" ".repeat((maxWidth - temp) / 2)}\n`;
            temp += 2;
        }
      
        sumString += `${" ".repeat((maxWidth - 1) / 2)}|${" ".repeat((maxWidth - 1) / 2)}\n`;
          
        return sumString;
    };
    
    return null;
};
