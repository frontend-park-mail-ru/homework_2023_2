const get = (obj, path) => {
    if (path == '')
        return undefined;

    if (path == '.')
        return obj;
    
    let pieces = path.split('.').slice(1);
    let new_obj = obj;

    pieces.map((value) => {
        if (new_obj == undefined)
            return undefined
        new_obj = new_obj[value];
    })
    return new_obj;
}