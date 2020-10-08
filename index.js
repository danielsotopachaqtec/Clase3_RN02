// Clase 3 - Arrays

let oceans = ['Pacific', 'Atlantic', 'Indian', 'Arctic', 'Antarctic'];
console.log('Oceans', oceans[2]);
let sharks = new Array('Hammerhead', 'Great White', 'Tiger');
console.log('Sharks', sharks[1]);
let mixedData = ['String', null, 7, ['another', 'array']];
console.log('mixedData', mixedData.length);
console.log('indexOf', mixedData.indexOf('Dog'));
const lastIndex = mixedData.length - 1;
console.log('lastIndex', mixedData[lastIndex]);
console.log('undefined', mixedData[8]);
let nestedArray = [
	['Salmon', 'Halibut'],
	['Coral', 'Reef'],
];
console.log('Nested Array', nestedArray[1][0]);
sharks[5] = 'whale';
console.log('shark modified', sharks);
console.log('undefined sharks', sharks[4]);
sharks.push('lobster');
console.log('lobster Shark list', sharks);
sharks.unshift('dragonfish');
console.log('dragonfish Shark list', sharks);
sharks.splice(2, 1);
console.log('splice', sharks);
sharks.pop();
console.log('pop', sharks);
sharks.shift();
console.log('shark shift', sharks);
sharks.splice(3, 1, 'sea lion');
console.log('shark splice', sharks);
let shellfish = ['oyster', 'shrimp', 'clam', 'mussel'];
// loop - for

for (let i = 0; i < shellfish.length; i++) {
	console.log(i, shellfish[i]);
}
let mammals = ['dolphin', 'whale', 'manatee'];
// loop - for of
for (let mammal of mammals) {
	console.log(mammal);
}

let fish = ['piranha', 'barracuda', 'koi', 'eel'];
console.log('isArray', Array.isArray(fish));
fish.reverse();
console.log('reverse', fish);
// fish.fill('shark');
console.log('fill', fish);
sharks.fill('shark', 1, 3);
console.log('fill position', sharks);
// sort
fish.sort();
console.log('sort', fish);
let numbers = [2, 90, 5, 77, 200, 1, 88];
numbers.sort();
console.log('sort numbers', numbers);
const sortNumerically = (a, b) => {
	return a - b;
};

numbers.sort(sortNumerically);
console.log(numbers.sort(sortNumerically));
// concat()
let bike = ['susuki', 'yamaha'];
let cars = ['Ford', 'Chevrolet', 'Toyota'];
let vehicle = bike.concat(cars);
console.log('Concat', vehicle);
// join()
let fishes = ['piranha', 'barracuda', 'koi', 'eel', 'barracuda'];
let fishString = fishes.join('/ ');
console.log('join', fishString);
let fishWithShortNames = fishes.slice(2);
console.log('Slice variable', fishWithShortNames);
console.log('lastIndexOf', fishes.lastIndexOf('barracuda'));
