// /** @param {Event} event */
// function handleSubmit(event) {
//   /** @type {HTMLFormElement} */
//   const form = event.currentTarget;
//   const url = new URL(form.action);
//   const formData = new FormData(form);
//   const searchParams = new URLSearchParams(formData);

//   /** @type {Parameters<fetch>[1]} */
//   const fetchOptions = {
//     method: form.method,
//   };

//   if (form.method.toLowerCase() === 'post') {
//     if (form.enctype === 'multipart/form-data') {
//       fetchOptions.body = formData;
//     } else {
//       fetchOptions.body = searchParams;
//     }
//   } else {
//     url.search = searchParams;
//   }

//   fetch(url, fetchOptions);

//   event.preventDefault();
// }

// const inpFile = document.getElementById("inpFile");
// const previewContainer = document.getElementById("imagePreview");
// const previewImage = previewContainer.querySelector(".image-preview__image");
// const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");

// inpFile.addEventListener("change", function() {
//   const file = this.files[0];

//   console.log(file)

//   if (file) {
//     const reader = new FileReader();

//     previewDefaultText.style.display = "none";
//     previewImage.style.display = "block";

//     reader.addEventListener("load", function() {
//       console.log(this);
//       previewImage.setAttribute("src", this.result);
//     });

//     reader.readAsDataURL(file);
//   } else {
//     previewDefaultText.style.display = null;
//     previewImage.style.display = null;
//     previewImage.setAttribute("src", "");
//   } 
// });




// const csvSelect = document.querySelector("input")
// const textElement = document.getElementById("text");
// const tableA = document.getElementById("tableA");
// const tableB = document.getElementById("tableB");
// const refreshButton = document.getElementById("refreshButton");

// refreshButton.addEventListener('click', () => {
//   location.reload();
// })

// csvSelect.addEventListener("change", () => {
//   const fileReader = new FileReader();

//   fileReader.onloadend = e => {
//     let rowSplit = fileReader.result.split("\n").map((e) => {
//       return e.split(",");
//     });

    //below is original forEach for all of the rows in this whole thing:
    // rowSplit.forEach((e) => {
    //   let tdElement = e.map((e) => {
    //     return `<td>${e}</td>`;
    //   });

    //   const tableRow = document.createElement("tr");
    //   tableRow.innerHTML = tdElement; // right here: index 0 will only give first (date) column

    //   tableA.append(tableRow);
    //   // for(let i = 0; i < 7; i++){
    //   //   tableA.append((tableRow)[i])
    //   // }
    // });

    // below is for currently, only 6 row output:



    const csvSelect = document.querySelector("input")
    const textElement = document.getElementById("text");
    const tableA = document.getElementById("tableA");
    const tableB = document.getElementById("tableB");
    const refreshButton = document.getElementById("refreshButton");
    
    refreshButton.addEventListener('click', () => {
      location.reload();
    })
    
    csvSelect.addEventListener("change", () => {
      const fileReader = new FileReader();
    
      fileReader.onloadend = e => {
        let rowSplit = fileReader.result.split("\n").map((e) => {
          return e.split(",");
        });
    
        //below is original forEach for all of the rows in this whole thing:
        // rowSplit.forEach((e) => {
        //   let tdElement = e.map((e) => {
        //     return `<td>${e}</td>`;
        //   });
    
        //   const tableRow = document.createElement("tr");
        //   tableRow.innerHTML = tdElement; // right here: index 0 will only give first (date) column
    
        //   tableA.append(tableRow);
        //   // for(let i = 0; i < 7; i++){
        //   //   tableA.append((tableRow)[i])
        //   // }
        // });
    
        // below is for currently, only 6 row output:
        for(let i = 0 ; i < 6; i++){
          let tdElement = rowSplit[i].map((e) => {
            return `<td>${e}</td>`
          })
          const tableRow = document.createElement("tr");
          for(let j = 0; j < 6; j++){
            tableRow.innerHTML += tdElement[j]; // right here: index 0 will only give first (date) column
          }
          
    
          tableA.append(tableRow);
        }
    
      }
      fileReader.readAsText(csvSelect.files[0]);
    });
    
    
    
    



