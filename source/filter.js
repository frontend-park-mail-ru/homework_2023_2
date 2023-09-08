'use strict';

const filter = (text, tags) => {
    if (!Array.isArray(tags))
        throw new Error("expected Array");

    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
    let symbolPoses =  [...text.matchAll(/[&"<>']/g)];
    let resArr = Array();
    let prevCut = 0;
    for(let i = 0; i < symbolPoses.length; i++){
        if(symbolPoses[i] == "<" && (i + 1 != symbolPoses.length ? (symbolPoses[i+1] == ">") : false)){
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