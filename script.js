var results = document.getElementById("results");
var bookSearch = document.getElementById("book-search");
var btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener("click", () => {
    fetch("http://openlibrary.org/search.json?q=" + bookSearch.value)
.then(book => book.json())
.then(response => {
    console.log(response);
    for(var i = 0; i < 10; i++){
        //crea portada del nuevo libro
     var newBookImg = document.createElement("img");
       newBookImg.className = "book-cover";
       newBookImg.src = `http://covers.openlibrary.org/b/isbn/${response.docs[i].isbn[0]}-M.jpg`;

       //crea el título del nuevo libro
       var newBookTitle = document.createElement("h2");
        newBookTitle.className = "book-title";
        newBookTitle.textContent = response.docs[i].title;

        //crea el autor del nuevo libro
       var newBookAuthor = document.createElement("h3");
        newBookAuthor.className = "book-author";
        newBookAuthor.textContent = response.docs[i].author_name[0];

        //crea el contenedor del libro
        var newBook = document.createElement("div");
        newBook.className = "book";

        //arma el libro en general
        newBook.appendChild(newBookImg);
        newBook.appendChild(newBookTitle);
        newBook.appendChild(newBookAuthor);

        //agrega el nuevo libro a los resultados
        results.appendChild(newBook); 

    }
})
})
