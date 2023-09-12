"use strict";
/**
 * Функция фильтрации
 * @param {function} func - Функция сравнения
 * @param {string} str - Фильтруемая строка
 * @returns {string} Строка состоящая из уникальных символов
 */
const filter = (func, str) => {
    let uniquestr = [];
    for (let i = 0; i < str.length; i++)
        if (func(str[i], i)) uniquestr.push(str[i]);
    return uniquestr.join("");
};

/**
 * Функция удаляющая неуникальные символы
 * @param {string} input - Подаваемая на вход строка
 * @param {boolean} flag - Флаг, влияющий на режим фильтрации
 * @returns {string} Строка состоящая из уникальных символов
 */
const letters = (input, flag) => {
    if (
        (typeof flag !== "boolean" && typeof flag !== "undefined") ||
        typeof input !== "string"
    ) {
        throw new Error('Wrong input type, must be (string, boolean)');
    }

    const str = input.split("");

    if (flag) {
        return filter((item, index) => str.indexOf(item) === index, str);
    } else if (flag === false) {
        return filter((item, index) => str.lastIndexOf(item) === index, str);
    } else {
        return filter((item) => str.lastIndexOf(item) === str.indexOf(item), str);
    }
};
