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

const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");

inpFile.addEventListener("change", function() {
  const file = this.files[0];

  console.log(file)

  if (file) {
    const reader = new FileReader();

    previewDefaultText.style.display = "none";
    previewImage.style.display = "block";

    reader.addEventListener("load", function() {
      console.log(this);
      previewImage.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);
  } else {
    previewDefaultText.style.display = null;
    previewImage.style.display = null;
    previewImage.setAttribute("src", "");
  } 
});