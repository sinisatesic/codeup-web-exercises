

// console.log('test');
// import { BOOK_API_KEY } from "./content";
// require('dotenv').config();
// const BOOK_API_KEY = require("./content");
const BOOK_API_KEY = `UGVUgCb0zGwwH6xHCf8gCHqNsPNC5xAP`;
// const test_list = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
// const test_list = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`
const test_list = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${BOOK_API_KEY}`


// console.log(test_list)

const testList = async (e) => {

    const testResponse = await fetch(test_list);
    const jsonTest = await testResponse.json();

    console.log(jsonTest);
    console.log(jsonTest.results)

    jsonTest.results.forEach(book => {
        // console.log(book)
        console.log(book.author)
        //
        // console.log(test)
    })
}

testList();