const sumAll = function(...values) {
    if (values.find((value) => value < 0)){
        return "ERROR";
    }
    else if (values.find((value) => Number.isInteger(value) == false)){
        return "ERROR";
    }
    
    let counter = 0;
    for (let i = Math.min.apply(null, values); i <= Math.max.apply(null, values); i++){
        counter += i;
    }
    return counter;
};

// Do not edit below this line
module.exports = sumAll;
