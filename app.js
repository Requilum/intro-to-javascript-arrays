/*--------------- Array Fundamentals ------------------*/
// You Do
const movies = { barbie, interstellar, getOut };

console.log("");

/*--------------- Reading ------------------*/
// We will use the movies array for the following:

//element accessing:
console.log(movies[0]); // value passed is the index in the array

//length:
console.log(movies.length); // returns the number of elements in the array

//last element:
console.log(movies[movies.length - 1]); // returns the last element in the array

// You Do
const colors = ["red", "green", "blue"];
let color = colors[1]; // green

console.log("");

/*--------------- Manipulation ------------------*/
// recall that movies is ['Barbie', 'Interstellar', 'Get Out']

// let's update the 2nd movie (index of 1)
movies[1] = "Arrival";
// movies is now ['Barbie', 'Arrival', 'Get Out']
console.log(movies[1]); // Arrival

// Push
movies.push("Parasite", "Dune");
// movies is ['Barbie', 'Arrival', 'Get Out', 'Parasite', 'Dune']

// Pop
const removedMovie = movies.pop();
// movies is ['Barbie', 'Arrival', 'Get Out']
// removedMovie is 'Parasite'

// You Do
movies.push("coco");
console.log(movies[movies.length - 1]); // coco

console.log("");
/*--------------- Iteration ------------------*/
// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']

for (let idx = 0; idx < movies.length; idx++) {
  console.log(movies[idx]);
}

for (let idx = 0; idx < movies.length; idx++) {
  console.log(`${idx + 1}. ${movies[idx]}`);
}

for (let movie of movies) {
  console.log(movie);
}

console.log("");
/*--------------- forEach() ------------------*/
