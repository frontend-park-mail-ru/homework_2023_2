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

    const symbolPoses =  [...text.matchAll(/[&"<>']/g)];
    let resArr = [];
    let prevCut = 0;
    for(let i = 0; i < symbolPoses.length; i++){
        if(symbolPoses[i] == "<" && symbolPoses[i+1] == ">"){
            let posibleTag = text.slice(symbolPoses[i].index + 1, symbolPoses[i+1].index);
            if( posibleTag.startsWith("/"))
                posibleTag = posibleTag.slice(1);
            if(tags.includes(posibleTag)){
                i++;
                continue;
            }
        }
        resArr.push(text.slice(prevCut, symbolPoses[i].index) + map[symbolPoses[i]]);
        prevCut = symbolPoses[i].index + 1;
    }
    resArr.push(text.slice(prevCut));
    return resArr.join("");
}
