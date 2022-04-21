// const returnFirstTwoDrivers = function(drivers) {
//     return function drivers() {
//         console.log('Antonia', 'Nuru')
//     }
// }
// function returnLastTwoDrivers(drivers) {
//     return () => console.log('Amari', 'Mo')
// }

const returnFirstTwoDrivers = (x) => x.slice(0,2);
const returnLastTwoDrivers = (x) => x.slice(x.length - 2);

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function createFareMultipler(fare) {
    return function() {
        return fare * 5
    }
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (fareMultiplier) {
    return function(fare){
        return fareMultiplier * fare;
    }
}

const fareDoubler = function(fare) {
    return fare * 2
}

const fareTripler = function(fare) {
    return fare * 3
}

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => { 
    return returnFirstTwoDrivers(arrayOfDrivers);
}