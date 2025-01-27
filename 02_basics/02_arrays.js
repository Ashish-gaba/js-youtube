const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeros = marvel_heroes.concat(dc_heroes)
// console.log(allHeros); //concat returns new array

//spread operation -- this used more commonly than concat
const all_new_heros = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heros);


//Flatterning Array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//Array methods
console.log(Array.isArray("Ashish"))
console.log(Array.from("Ashish"))
console.log(Array.from({name: "Ashish"})); // Interesting for interviews - we need to define whether to make aray from keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



