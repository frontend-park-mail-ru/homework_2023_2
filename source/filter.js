'use strict';

const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

const filter = (text, tags = []) => {
    if(!(typeof text === "string")){
        throw new Error("expected String");
    }
    if (!Array.isArray(tags)){
        throw new Error("expected Array");
    }
    let resArr = text.split(/([&"<>'])/g);
    for(let i = 0; i < resArr.length; i++){
        if(map[resArr[i]] !== undefined){
            if( resArr[i] == "<" && resArr[i+2] == ">" &&
                tags.includes(resArr[i+1].startsWith("/") ? resArr[i+1].slice(1) : resArr[i+1])
            ) {
                i+= 2;
                continue;
            }
            resArr[i] = map[resArr[i]];
        }
    }
    return resArr.join("");
}
