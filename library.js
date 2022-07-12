
let myLibrary = []
const tbod = document.querySelector('.tablebody')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    //this.info = function() {return `${title} by ${author}, ${pages} pages, ${read}`}
} //this refers to THIS object that will be created. 

//test books
const dune = new Book('Dune', 'Frank Herbert', 500, '2-3 times');
const got = new Book('Game of Thrones', 'GRR Martin', 1000, 'read it en espanol');
const cien = new Book('Cien Anos de Soledad', 'Gabriel Garcia Marquez', 400, 'I have attempted it');
addBookToLibrary(dune);
addBookToLibrary(got);
addBookToLibrary(cien);


function addBookToLibrary(book) {
    myLibrary.push(book);
}

//now write a function that loops through the array and displays each book on the page. You could display them 
//in some sort of table, or each on their own 'card'. It might help for now to manually add a few books to your 
//array so you can see the display
//for..in doesn't work here, because it's meant to enumerate object properties, not objects themselves?
function iterate() {
    for(let book of myLibrary) {
        //make a new tr, with th for each data point
        const bookRow = document.createElement('tr');
        tbod.append(bookRow);
        const bookTitles = document.createElement('td');
        bookTitles.classList.add('booktitle');
        bookTitles.innerHTML = book.title;
        bookRow.append(bookTitles);
        const bookAuthors = document.createElement('td');
        bookAuthors.classList.add('bookauthor');
        bookAuthors.innerHTML = book.author;
        bookRow.append(bookAuthors);
        const bookPages = document.createElement('td');
        bookPages.innerHTML = book.pages;
        bookRow.append(bookPages);
        const bookRead = document.createElement('td');
        bookRead.innerHTML = book.read;
        bookRow.append(bookRead);
    }
}

iterate();
