'use strict';
/* Функция фильтрации элементов массива использюущая функцию-компаратор передаваемый как параметр func*/
const filter = (func, str) => 
{
    let uniquestr = [];
    for (let i = 0; i < str.length; i++) 
        if(func(str[i], i))
            uniquestr.push(str[i]);
    return uniquestr.join("");
}

/* функция letters в зависимости от переданных параметров удаляет неуникальные элементы из строки:
* случай true: функция будет искать повторяющиеся символы в строках и удалять их, оставляя на месте только первую встречающуюся букву.
* случай false: функция будет оставлять только последнюю встречающуюся букву.
* случай когда второго параметра нет: функция будет удалять из строки символы, которые встречаются в ней больше одного раза.
*/ 
const letters = (input, flag) =>
{
    /* Проверка на верность переданных параметров */
    try {
        input.split('');
        if(typeof flag !== 'boolean' && typeof flag !== 'undefined')
            throw new Error();
    } catch (error) {
        return "Wrong input type, must be (string, boolean)";
    }
    const str = input.split('');
    /* Вызов функции фильтрации в зависимости от переданных параметров */
    if(flag)
        return filter((item, index) => str.indexOf(item) === index, str);
    else if(flag === false)
        return filter((item, index) => str.lastIndexOf(item) === index, str);
    else
        return filter((item) => str.lastIndexOf(item) === str.indexOf(item), str);
}
