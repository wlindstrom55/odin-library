
let myLibrary = []
const tbod = document.querySelector('.tablebody')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    //this.info = function() {return `${title} by ${author}, ${pages} pages, ${read}`}
}

//test books
const dune = new Book('Dune', 'Frank Herbert', 500, 'Yes');
const got = new Book('Game of Thrones', 'GRR Martin', 1000, 'Yes');
const cien = new Book('Cien Anos de Soledad', 'Gabriel Garcia Marquez', 400, 'Yes');
const star = new Book('Starship Troopers', 'Robert A. Heinlein', 263, 'Yes');
const it = new Book('IT', 'Stephen King', 1078, 'Yes');
addBookToLibrary(it);
addBookToLibrary(dune);
addBookToLibrary(got);
addBookToLibrary(cien);
addBookToLibrary(star);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeRow(rowNum) {
    document.getElementById('table').deleteRow(rowNum);
}

function toggleReadStatus(rowNum) {
   let a =  document.getElementById(`read${rowNum}`);
   if(a.innerHTML === 'Yes') {
   a.innerHTML = 'No';
   } else if(a.innerHTML == 'No') {
    a.innerHTML = 'Yes';
   }
}

//now write a function that loops through the array and displays each book on the page. You could display them 
//in some sort of table, or each on their own 'card'.
//for..in doesn't work here, because it's meant to enumerate object properties, not objects themselves.
    //we use for..of instead!
function iterate() {
    let count = 1;
    for(let book of myLibrary) {
        //make a new tr, with td for each data point, remove button at end of row.
        const bookRow = document.createElement('tr');
        tbod.append(bookRow); //add row to table body
        const bookTitles = document.createElement('td');
            bookTitles.classList.add('booktitle');
            bookTitles.innerHTML = book.title;
            bookRow.append(bookTitles); //add cell to row
        const bookAuthors = document.createElement('td');
            bookAuthors.classList.add('bookauthor');
            bookAuthors.innerHTML = book.author;
            bookRow.append(bookAuthors);
        const bookPages = document.createElement('td');
            bookPages.innerHTML = book.pages;
            bookRow.append(bookPages);
        const bookRead = document.createElement('td');
            bookRead.setAttribute('id', `read${count}`);
            //bookRead.classList.add(`bookread${count}`);
            bookRead.innerHTML = book.read;
            bookRow.append(bookRead);
        //maybe a button here to toggle the status of 'have i read it'
        const readButton = document.createElement('button');
            readButton.innerHTML = 'Toggle Read Status';
            readButton.addEventListener('click', () => {
                // let a = document.getElementsByClassName(`.readbutton${bookRow.rowIndex}`);
                // a.innerHTML = 'No';
                toggleReadStatus(bookRow.rowIndex);
            }) 
            bookRow.append(readButton);
        const remButton = document.createElement('button');
            remButton.innerHTML = 'Remove';
            remButton.addEventListener('click', () => {
                removeRow(bookRow.rowIndex); //must be the bookrow rowindex, not the button rowindex.
            })  //otherwise it will just delete rows starting at the top. Why?
            bookRow.append(remButton);
        count++;
    }
}

iterate();
