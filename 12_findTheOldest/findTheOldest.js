const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();

    return array.reduce((oldestPerson, currentPerson) => {
        const oldestAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;
        const currentAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;

        return currentAge > oldestAge ? currentPerson : oldestPerson;
    });
};

module.exports = findTheOldest;
