"use strict";

// lecture: Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const finland = describeCountry("Finland", 6, "Helsinki");
const czechRepublic = describeCountry("Czech Republic", 10.6, "Prague");
console.log(finland);
console.log(czechRepublic);
