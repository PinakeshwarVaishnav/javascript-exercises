const palindromes = function (array) {
    array = array.toLowerCase().replace(/[^a-z0-9]/g, "");
    const len = array.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
            if (array[i] !== array[len - 1 - i]) {
                return false;
            }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
