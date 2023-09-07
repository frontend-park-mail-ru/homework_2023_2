'use strict';

const letters = (input, mode) => {
    // разбиваем строку на массив символов
    const array = input.split('');
    // создаем переменную, где будет храниться отфильтрованный массив символов
    const pureArray = array.filter((element, index) => {
        if (mode === true) { 
            /* проверяем равенство индекса первого вхождения элемента 
            в массиве текущему идексу элемента */
            return array.indexOf(element) === index;
        } else if (mode === false) {
            /* проверяем равенство индекса последнего вхождения элемента 
            в массиве текущему индексу элемента */
            return array.lastIndexOf(element) === index;
        } else {
            /* проверяем равенство индекса первого вхождения элемента 
            в массиве индексу последнего вхождения элемента */
            return array.lastIndexOf(element) === array.indexOf(element);
        }
    });
  
    // преобразуем массив символов обратно в строку и возвращаем его
    return pureArray.join('');
}
  