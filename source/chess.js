'use strict';

const chess = function (number) {
    if (number <= 1 || number % 1 != 0) return null
    let result = ""
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    result += "*"
                } else {
                    result += " "
                }
            } else {
                if (j % 2 == 1) {
                    result += "*"
                } else {
                    result += " "
                }
            }
        }
        result += "\n"
    }
    return result
}