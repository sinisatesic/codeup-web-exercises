

// console.log('test');
// import { BOOK_API_KEY } from "./content";
// require('dotenv').config();
// const BOOK_API_KEY = require("./content");

// const test_list = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
// const test_list = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`
const test_list = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${BOOK_API_KEY}`

// const row = document.getElementById('row');
// const containerFluid = document.getElementsByClassName('container-fluid');
const mainContainer = document.getElementById('customContainerMain');

// console.log(test_list)

const testList = async (e) => {

    const testResponse = await fetch(test_list);
    const jsonTest = await testResponse.json();

    console.log(jsonTest);
    console.log(jsonTest.results)

/* <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                </div> */


    jsonTest.results.forEach(book => {
        // console.log(book)

        let cardTest = document.getElementById('test-card').innerHTML;
        let testLink = document.getElementById('test-link').innerHTML;
        let testPar = document.getElementById('test-par');
        let res = book.author;
        document.getElementById('test-par').innerHTML = res;

        cardTest.append(
            book.author
        )


        console.log(book.author)
        //
        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img');
        img.classList.add('card-img-top');

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let text = document.createElement('text');
        text.innerHTML = `"${book.title}" - ${book.author}
        <br>
        ${book.description}
        <br>
        test`

        // var div = document.getElementById('divID');

        // div.innerHTML += 'Extra stuff';


        text.classList.add('test');

        cardBody.appendChild(text);
        card.appendChild(cardBody);
        card.appendChild(img);
        mainContainer.appendChild(card);

        
    })
}

testList();


