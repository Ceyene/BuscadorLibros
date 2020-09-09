let btn = document.getElementById("btn");
let output = document.getElementById("output");
let input = document.getElementById("input");

    btn.addEventListener("click", function getBooks() {
        output.innerHTML = "";
        fetch("http://openlibrary.org/search.json?q="+ input.value)
        .then(a => a.json())
        .then(response => {
            for(var i = 0; i < 10; i++) {
                output.innerHTML += "<h2>"+ response.docs[i].title + "</h2>" + response.docs[i].author_name[0] + "<br><img src='http://covers.openlibrary.org/b/isbn/" + response.docs[i].isbn[0] + "-M.jpg'><br>"; 
            }
        });
    });
