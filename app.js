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
const newMovies = ["Barbie", "Arrival", "Get Out", "Coco"];

movies.forEach((newMovies) => {
  console.log(newMovies);
});

// Barbie
// Arrival
// Get Out
// Coco

//In addition to the current element, forEach() also provides the index of the current element to the callback function:
movies.forEach((newMovies, index) => {
  if (index === 2) console.log("This is the third movie:");
  console.log(newMovies);
});

//   Which will result in the following output:

// Barbie
// Arrival
// This is the third movie:
// Get Out
// Coco

console.log("");
/*--------------- join() ------------------*/
// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']
let movieString = newMovies.join();
// movieString is 'Barbie,Arrival,Get Out,Coco'

movieString = newMovies.join(" -- ");
// movieString is 'Barbie -- Arrival -- Get Out -- Coco'

/*--------------- You Do----------------*/
const books = ["The shining", "Pride and Prejudice"];
console.log(books[2 - 1]); // Pride and Prejudice
// Function used in this mannaer to simplify it with common sense. Since the array starts with an index of 0, we subtract 1 from the index to get the correct value.

movies[2 - 1] = "Dune";
console.log(movies[1]); // Dune

for (let idx = 0; idx < books.length; idx++) {
  console.log(books[idx]);
}
