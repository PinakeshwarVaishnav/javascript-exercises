const sumAll = function(firstInteger, secInteger) {
    if (firstInteger < 0 || secInteger < 0) {
        return "ERROR";
    }
    let sum = 0;
    if (typeof firstInteger === "number" && typeof secInteger === "number") {
        if (firstInteger < secInteger) {
            for (let i = firstInteger; i <= secInteger; i++) {
                sum += i;
            }
        }
        else if (firstInteger > secInteger) {
            for (let i = secInteger; i <= firstInteger; i++) {
                sum += i;
            }
        }
    }
    else {
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
