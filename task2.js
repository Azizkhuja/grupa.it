const title = document.querySelector("#title");
const author = document.querySelector("#author");
const rating = document.querySelector("#rating");
const category = document.querySelector("#category");
let bookList = document.querySelector("#book-list");

document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
});
document.querySelector("#submit-btn").addEventListener("click", function () {
  if (
    title.value === "" ||
    author.value === "" ||
    rating.value === "" ||
    category.value === ""
  ) {
    alert("Please fill the form");
  } else {
    //  Creating tr th and appending to list
    const bookListRow = document.createElement("tr");
    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    bookListRow.appendChild(newTitle);
    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    bookListRow.appendChild(newAuthor);
    const newRating = document.createElement("th");
    newRating.innerHTML = rating.value;
    bookListRow.appendChild(newRating);
    const newCategory = document.createElement("th");
    newCategory.innerHTML = category.value;
    bookListRow.appendChild(newCategory);
    const deleteBtn = document.createElement("th");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "X";
    bookListRow.appendChild(deleteBtn);
    bookList.appendChild(bookListRow);

    let objStorage = {
      title: newTitle,
      author: newAuthor,
      rating: newRating,
      category: newCategory,
    };

    let converToStringfy = JSON.stringify(objStorage);

    localStorage.setItem("myObj", converToStringfy);

    let decenter = JSON.parse(localStorage.getItem("myObj"));

    console.log(decenter);

    // let storageTitle = title.value;
    // let storageAuthor = author.value;
    // let storageRating = rating.value;
    // let storageCategory = category.value;
    // localStorage.setItem(JSON.stringify(title), JSON.stringify(storageTitle));
    // localStorage.setItem("author", JSON.stringify(storageAuthor));
    // localStorage.setItem("rating", JSON.stringify(storageRating));
    // localStorage.setItem("category", JSON.stringify(storageCategory));

    // Clear
    title.value = "";
    author.value = "";
    rating.value = "";
    category.value = "";
  }
});

// Remove each books by clicking X button
bookList.addEventListener("click", (e) => {
  e.target.parentElement.remove();
});

// //Storage

// document.querySelector("#submit-btn").addEventListener("click", function () {
//   let key = title.value;
//   let value = author.value;

//   if (key && value) {
//     localStorage.setItem(key, value);
//     location.reload();
//   }

//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);

//     bookList.innerHTML += `${key}: ${value}`;
//   }
// });

// let storageRating = rating.value;
// let storageCategory = category.value;
