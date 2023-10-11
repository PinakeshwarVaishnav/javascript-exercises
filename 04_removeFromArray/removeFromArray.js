function removeFromArray(array, ...valuesToRemove) {
    // Use the filter method to create a new array without the values to be removed
    const newArray = array.filter(item => !valuesToRemove.includes(item));
    return newArray;
  }
  

// Do not edit below this line
module.exports = removeFromArray;
