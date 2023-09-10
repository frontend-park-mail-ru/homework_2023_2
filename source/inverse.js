const inverse = function(arr, num = 0) {
    return num >= 0 ? [...arr.slice(0, num), ...arr.slice(num).reverse()] : 
                      [...arr.slice(0, num).reverse(), ...arr.slice(num)];
}