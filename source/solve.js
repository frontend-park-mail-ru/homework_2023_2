'use strict'

const solve = function (equation, x_value) {
    
    let solution;
    let char;
    // console.log(equation);

    for (let i = 0; i < equation.length; i++) {
        char = equation[i];
        // console.log(char);
        if (char == "x"){
            // console.log(i);
            equation = equation.replace(equation[i], String(x_value));;
        }
    }

    try {
        solution =  eval(equation);
        console.log(solution);
        return solution

    } catch {
        console.log("Неверно введено уравнение");
    }
};