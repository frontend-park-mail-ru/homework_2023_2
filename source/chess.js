'use strict'

const ODD_FIELD = '*';
const EVEN_FIELD = ' ';
const MAX_STRING_LENGTH = 2 ** 28 - 16; // Для Chrome x32, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

/**
 * Функция для получения шахматной доски размером NxN
 * @param size сторона доски N
 * @returns {string|null} возвращает доску в виде строки, либо null в случае неверно переданного параметра
 */
const chess = size => {
    if (isNaN(size)) {
        throw new TypeError("Ожидалось число");
    }
    if (size % 1) {
        throw new TypeError("Ожидалось целое число");
    }
    if (size < 2) {
        throw new RangeError("Не бывает доски с таким размером");
    }
    if (size > Math.sqrt(MAX_STRING_LENGTH) - 1) {
        throw new RangeError("Размер доски превышает максимально возможный размер строки");
    }
    let oddLine = (ODD_FIELD + EVEN_FIELD).repeat(size / 2);
    oddLine += size % 2 === 0 ? "\n" : ODD_FIELD + '\n';
    let evenLine = (EVEN_FIELD + ODD_FIELD).repeat(size / 2);
    evenLine += size % 2 === 0 ? "\n" : EVEN_FIELD + '\n';
    let desk = (oddLine + evenLine).repeat(size / 2);
    if (size % 2 === 1) {
        desk += oddLine;
    }
    return desk;
}
