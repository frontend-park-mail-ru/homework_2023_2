'use strict';
function letters(str, flag) 
{
    const str = str.split('');
    if(flag)
    {
        return str.filter((item, index) =>
        {
            return str.indexOf(item) === index; 
        }).join("");
    }
    else if(flag === false)
    {
        return str.filter((item, index) =>
        {
            return str.lastIndexOf(item) === index; 
        }).join("");
    }
    else
    {
        
        return str.filter((item) =>
        {
            return str.lastIndexOf(item) === str.indexOf(item); 
        }).join("");
    }
}