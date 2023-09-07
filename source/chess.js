'use strict'

/**
 * Функция для получения шахматной доски размером NxN
 * @param size сторона доски N
 * @returns {string|null} возвращает доску в виде строки, либо null в случае неверно переданного параметра
 */
let chess = size => {
    if (isNaN(size)) {
        console.log("Ожидалось число")
        return null
    }
    if (size % 1 != 0) {
        console.log("Ожидалось целое число")
        return null
    }
    if (size < 2) {
        console.log("Не бывает доски с таким размером")
        return null
    }
    let desk = ""
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            desk = (i+j) % 2 == 0 ? desk + '*' : desk + ' '
        }
        desk = desk + '\n'
    }
    return desk
}