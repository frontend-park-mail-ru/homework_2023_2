
/*По поводу strict mode. Я не до конца понимаю, зачем он даже в примере используется.
На случайное объявление глобальных переменных код проверил, а также здесь я не работаю с сущностями по типу NaN или 
arguments или eval.
С объектами я тут не работаю, поэтому удаление неудаляемого свойства или, например, добавление свойств с одинаковыми именами тут
невозможно, также я нигде не задал аргументы с одинаковым именем в функцию

Но тут потенциально можно использовать директиву 'use struct' т.к. это общепринятый стандарт

Суммарно:
Нельзя использовать переменные до их объявления.
Нельзя называть параметры функций, свойства объекта одинаково
Зарезервированными словами js тоже нельзя пользоваться
Также нельзя присваивать значение сущностям, предназначенным для чтения

*/



//Валидатор сделал через стрелочную функцию просто для удобства записи. Здесь не нужно писать алгоритм
//Контекст выполнения в данном случае не обязывает меня пользоваться тем или иным объявлением. this нигде не применяется
/**
 * Функция проверяет, является ли высота дерева невалидной.
 * @param {number} height - высота дерева.
 * @returns {boolean} - true, если высота некорректна, иначе false.
 */
const invalidHeight = height => !height || height<3 || !isFinite(height) || isNaN(height);



/**
 * Функция добавляет символы в начало строки до заданной длины, по сути это фукция, аналогичная методу padStart у string
 * @param {string} line - исходная строка.
 * @param {number} finalLength - требуемая длина строки.
 * @param {string} [symbolToAdd=' '] - символ для добавления в начало строки. По дефолту - ' '
 * @returns {string} - строка с добавленными символами в начале.
 */
const myPadStart = function(line, finalLength, symbolToAdd=' ')
{
    //Не вижу смысла в проверке т.к.  функция tree гарантирует правильный вызов

    if(line.length>=finalLength)
    return line;

    while(line.length<finalLength)
    {
        line=symbolToAdd+line;
    }

    return line;


}


/**
 * Функция добавляет символы в конец строки до заданной длины. Аналогичная padEnd у string
 * @param {string} line - исходная строка.
 * @param {number} finalLength - требуемая длина строки.
 * @param {string} [symbolToAdd=' '] - символ для добавления в конец строки. По дефолту - ' '
 * @returns {string} - строка с добавленными символами в конце.
 */
const myPadEnd = function(line, finalLength, symbolToAdd=' ')
{
    //Не вижу смысла в проверке т.к.  функция tree гарантирует правильный вызов

    if(line.length>=finalLength)
    return line;

    while(line.length<finalLength)
    {
        line+=symbolToAdd;
    }

    return line;


}


/**
 * Функция повторяет заданную строку указанное количество раз. Аналог repeat у string
 * @param {string} line - строка, которую нужно повторить.
 * @param {number} repeats - количество повторений строки.
 * @returns {string} - строка, состоящая из повторений заданной строки.
 */
const myRepeat = function(line, repeats)
{

    let repeatedString = '';
    for(let i = 0;i<repeats;++i)
    {
        repeatedString+=line;
    }

    return repeatedString;
}

/**
 * Функция, которая создает дерево заданной высоты и возвращает строку с этим деревом
 * @param {number} height - высота дерева.
 * @returns {string|null} - строка, представляющая дерево, или null, если высота некорректна.
 */
const tree = function(height){

    if (invalidHeight(height)) return null;

    height=Math.floor(height);

    let treeString = '';
    for (let i = 1; i < height; i++) {
        
        let treeLevel = '';
        treeLevel = myPadStart(treeLevel,height-i-1);
        treeLevel = myPadEnd(treeLevel,height-2+i,'*');
        treeLevel = myPadEnd(treeLevel,(height-1)*2-1);
        treeString += treeLevel + '\n';
    }
    treeString += myRepeat(' ', height-2) + '|' + myRepeat(' ',height-2) + '\n';
    return treeString;
    
}
