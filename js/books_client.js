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
        //test
    })
}

testList();