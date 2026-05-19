 // Part 1

// Create an array with 5 fruits
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log("Original fruits array:", fruits);

// Remove the first element using shift
const removedFirst = fruits.shift();

console.log("After shift:", fruits);
console.log("Removed first element:", removedFirst);

// Add "Apricot" to the beginning using unshift
fruits.unshift("Apricot");

console.log("After unshift:", fruits);

// Remove the last element using pop
const removedLast = fruits.pop();

console.log("After pop:", fruits);
console.log("Removed last element:", removedLast);

// Add an element to the end using push
fruits.push("Kiwi");

console.log("After push:", fruits);

// Use splice to remove "Cherry" and "Date"
// and replace them with "Fig" and "Grape"
const cherryIndex = fruits.indexOf("Cherry");

fruits.splice(cherryIndex, 2, "Fig", "Grape");

console.log("After splice:", fruits);



// Part 2

// Array of book objects
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851
  }
];

// Using forEach to log book titles
books.forEach(book => {
  console.log("Title:", book.title);
});

// Using map to create an array of authors
const authors = books.map(book => book.author);

console.log("Authors:", authors);

// Using filter to find books published before 1950
const oldBooks = books.filter(book => book.year < 1950);

console.log("Books published before 1950:", oldBooks);

// Using find to locate the book titled "1984"
const foundBook = books.find(book => book.title === "1984");

console.log("Found book:", foundBook);