const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// //// DESTRUCTURING
const book = getBook(2);
book;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];
// //// REST Operator
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, secondaryGenre, otherGenres);

// //// SPREAD operator
// const newGenres = [...genres, "epic fantasy"];
// console.log(newGenres);

// const updatedBook = {
//   ...book,
//   // adding a new property
//   moviePublicationDate: "2001-12-19",
//   // overwriting an existing property
//   pages: 1210,
// };
// updatedBook;

// //// TEMPLETE LITERALS
// const summary = `${title}, is a ${pages}-page long book, was written by ${author} and published in ${
//   publicationDate.split("-")[0]
// }. The book has ${hasMovieAdaptation ? "" : "not "}been adapted as a movie`;
// summary;

// //// TERNARY OPERATOR
// const bookPages = `${title} is ${
//   pages > 1000 ? "over a thousand" : "less than 1000"
// } pages long`;
// console.log(bookPages);

// //// ARROW FUNCTIONS
// // traditional function:
// // function getYear(str) {
// //   return str.split("-")[0];
// // }
// // arrow function:
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// const summary1 = `${title}, is a ${pages}-page long book, was written by ${author} and published in ${getYear(
//   publicationDate
// )}. The book has ${hasMovieAdaptation ? "" : "not "}been adapted as a movie`;
// summary1;

// //// SHORT-CIRCUITING
// //// && Operator --> when the first value is true, it will automatically return the second value --> when the first value is false, the expression stops and doesn't even look at the second value (whether it's true or not)
// console.log(true && "Some string");
// console.log(false && "Some string");
// console.log(hasMovieAdaptation && "This book has a movie");
// // falsy values are 0, '', null, undefined
// console.log("Jonas" && "some string");
// console.log(0 && "some value");

// //// || Operator --> short circuits when the first value is truthy
// console.log(true || "some string");
// console.log(false || "some string");

// console.log(book.translations.spanish);

// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
// spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// // Nullish --> short circuits when second value is undefined or null (NOT 0)
// const count = book.reviews.librarything.reviewsCount ?? "No data";
// count;

// //// OPTIONAL CHAINING
// function getTotalReviewCount(book) {
//   const goodread = book.reviews.goodreads?.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   librarything;

//   return goodread + librarything;
// }
// console.log(getTotalReviewCount(3));

// //// array MAP method --> returns a new array
// //// loops over each element in the array and returns a new array with the same length with some operation applied to each of the elements of the original array
// //// takes in a callback function
// const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((element) => element * 2);
// console.log(x);

// const books = getBooks();
// books;

// const titles = books.map((book) => book.title);
// titles;

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));
// essentialData;

// //// FILTER array method --> to filter out some elements of the array based on a condition
// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooksWithMovie;

// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((adventureBook) => adventureBook.title);
// adventureBooks;

// //// REDUCE array method --> reduce the entire array to a single value
// //// takes in a function(), starter value
// const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// pagesAllBooks;

// //// SORT array method --> used to sort an array
// //// mutates original array
// const y = [3, 7, 1, 9, 6];
// // .slice() method creates a copy of original array
// const sorted = y.slice().sort((a, b) => a - b);
// sorted;
// y;

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// sortedByPages;

//// IMMUTABLE ARRAY METHODS
// 1) Add book object to array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J.K. Rowling",
// };
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// // 2) Delete a book object from array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// // 3) Update book object in the array
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1210 } : book
// );
// booksAfterUpdate;

//// ASYNC: PROMISES
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("Jonas");

//// ASYC: ASYNC/AWAIT
// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);
// }
