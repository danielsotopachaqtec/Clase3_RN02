let fish = ['piranha', 'barracuda', 'cod', 'koi', 'eel'];
// Print
fish.forEach((individualFish) => {
	console.log(individualFish);
});
for (let i = 0; i < fish.length; i++) {
	console.log(fish[i]);
}

// map
let printFish = fish.map((item) => {
	return item;
});

console.log('printFish', printFish);
let pluralFish = fish.map((individualFish) => {
	return `${individualFish}s`;
});
console.log('fish', fish);
console.log('pluralFish', pluralFish);
// filter();
let seaCreatures = [
	'shark',
	'whale',
	'squid',
	'starfish',
	'octopus',
	'cuttlefish',
	'flounder',
];
let filterList = seaCreatures.filter((creature) => {
	return creature[0] === 's';
});
console.log('seaCreatures', seaCreatures);
console.log('filterList', filterList);
// reduce()
let numbers = [42, 10, , 20, 30];
let sum = numbers.reduce((a, b) => {
	return a + b;
});

console.log('sum reduce', sum);
// find()
const isCephalopd = (cephalopod) => {
	return ['cuttlefish', 'octopus'].includes(cephalopod);
};

console.log('find', seaCreatures.find(isCephalopd));
console.log('find', seaCreatures.findIndex(isCephalopd));
const isThereAnEel = (eel) => {
	return ['eel'].includes(eel);
};

console.log('findIndexOf -1', seaCreatures.findIndex(isThereAnEel));
// some()

var operatives = [
	{ id: 1, name: 'Daniel Soto', student: true },
	{ id: 2, name: 'Pepito de los palotes', student: true },
];
var listHasStudent = operatives.some((operative) => {
	return operative.student;
});
// every()
var listHasAllStudent = operatives.every((operative) => {
	return operative.student;
});

console.log('listHasStudent some', listHasStudent);
console.log('listHasAllStudent every', listHasAllStudent);
