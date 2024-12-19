const findTheOldest = function (people) {
  let person1 = people[people.length - 1];
  let person2;
  for (let i = 0; i < people.length; i++) {
    person2 = people[i];
    if (
      typeof person2.yearOfDeath == "undefined" &&
      person2.yearOfBirth < person1.yearOfBirth
    ) {
      return person2;
    }
    if (
      person1.yearOfDeath - person1.yearOfBirth <
      person2.yearOfDeath - person2.yearOfBirth
    ) {
      person1 = person2;
    }
  }
  return person1;
};

// Do not edit below this line
module.exports = findTheOldest;
