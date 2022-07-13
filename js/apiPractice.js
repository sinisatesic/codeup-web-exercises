const firstAPI = `https://openlibrary.org/api/books`

const getData = async ( ) => {
    const response = await fetch(firstAPI);
    const jsonResponse = await response.json();

    console.log(jsonResponse);
}
getData();