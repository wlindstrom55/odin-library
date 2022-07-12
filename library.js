
let myLibrary = []
const tbod = document.querySelector('.tablebody')
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {return `${title} by ${author}, ${pages} pages, ${read}`}
} //this refers to THIS object that will be created. 

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//now write a function that loops through the array and displays each book on the page. You could display them 
//in some sort of table, or each on their own 'card'. It might help for now to manually add a few boos to your 
//array so you can see the display
function iterate() {
    for(let book in myLibrary) {
        //make a new tr, with th for each data point
    }
}

const dune = new Book('Dune', 'Frank Herbert', 500, 'hell yeah I read it')
