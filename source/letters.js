'use strict';
/* Функция фильтрации элементов массива использюущая функцию-компаратор передаваемый как параметр func*/
let filter = (func, str) => 
{
    let uniquestr = [];
    for (let i = 0; i < str.length; i++) 
    {
        if(func(str[i], i))
        {
            uniquestr.push(str[i]);
        }
    }
    return uniquestr.join("");
}

/* функция letters в зависимости от переданных параметров удаляет неуникальные элементы из строки:
* случай true: функция будет искать повторяющиеся символы в строках и удалять их, оставляя на месте только первую встречающуюся букву.
* случай false: функция будет оставлять только последнюю встречающуюся букву.
* случай когда второго параметра нет: функция будет удалять из строки символы, которые встречаются в ней больше одного раза.
*/ 
let letters = (input, flag) =>
{
    const str = input.split('');
    if(flag)
    {
        return filter((item, index) =>
        {
            return str.indexOf(item) === index; 
        }, str);
    }
    else if(flag === false)
    {
        return filter((item, index) =>
        {
            return str.lastIndexOf(item) === index; 
        }, str);
    }
    else
    {
        return filter((item) =>
        {
            return str.lastIndexOf(item) === str.indexOf(item); 
        }, str);
    }
}
