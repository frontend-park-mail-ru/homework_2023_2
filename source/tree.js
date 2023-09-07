
//Стрелочные функции - более современный стиль создания функций. Поэтому стоит использовать их
//Контекст выполнения в данном случае не обязывает меня пользоваться тем или иным объявлением. this нигде не применяется
/**
 * Функция проверяет, является ли число невалидным.
 * @param {number} value - длина строки, либо высота дерева.
 * @returns {boolean} - true, если высота некорректна, иначе false.
 */
const invalidNumberValue = value => !value || !isFinite(value) || isNaN(value);



/**
 * Функция добавляет символы в начало строки до заданной длины, по сути это фукция, аналогичная методу padStart у string
 * @param {string} line - исходная строка.
 * @param {number} finalLength - требуемая длина строки.
 * @param {string} [symbolToAdd=' '] - символ для добавления в начало строки. По дефолту - ' '
 * @returns {string} - строка с добавленными символами в начале.
 */
const myPadStart = (line, finalLength, symbolToAdd=' ') =>
{
    if(invalidNumberValue(finalLength) || typeof line !== 'string')
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
const myPadEnd = (line, finalLength, symbolToAdd=' ') =>
{
    if(invalidNumberValue(finalLength)||typeof line !== 'string')
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
const myRepeat = (line, repeats) =>
{

    if(invalidNumberValue(repeats)||typeof line!=='string')
        return line;

    let repeatedString = '';
    for(let i = 0;i<repeats;++i)
    {
        repeatedString+=line;
    }

    return repeatedString;
}

/**
 * Функция, которая создает дерево заданной высоты и возвращает строку с этим деревом
 * @param {number|string} height - высота дерева.
 * @returns {string|null} - строка, представляющая дерево, или null, если высота некорректна.
 */
const tree = height =>{

    if (invalidNumberValue(height)||height<3) return null;

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
