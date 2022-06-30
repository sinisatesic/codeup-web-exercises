// const test_list = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
// const test_list = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`
const test_list = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${BOOK_API_KEY}`

const row = document.getElementById('row');
const containerFluid = document.getElementsByClassName('container-fluid');
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
        console.log(book.author)
        //
        // console.log(test)
        let column = document.createElement('div');
        column.classList.add('col');

        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img');
        img.classList.add('card-img-top');

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let paragraph = document.createElement('p');
        paragraph.classList.add('card-text');

        paragraph.innerText = `${book.author}`

        cardBody.appendChild(paragraph);
        card.appendChild(img, cardBody)
        column.appendChild(card);
        // row.appendChild(column);
        // containerFluid.appendChild(row);
        // mainContainer.appendChild(containerFluid);
        
    })
}

testList();