
let myLibrary = [];
let count = 1; //counter for purposes of ID names
const tbod = document.querySelector('.tablebody')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//sample books
const dune = new Book('Dune', 'Frank Herbert', 412, 'Yes');
const got1 = new Book('A Song of Ice and Fire', 'George R.R. Martin', 694, 'Yes');
const got2 = new Book('Clash of Kings', 'George R.R. Martin', 761, 'Yes');
const cien = new Book('Cien A&ntilde;os de Soledad', 'Gabriel Garc&iacute;a M&aacute;rquez', 417, 'Yes');
//ene = &ntilde; a w/ accent = &aacute;
const star = new Book('Starship Troopers', 'Robert A. Heinlein', 263, 'Yes');
const it = new Book('IT', 'Stephen King', 1138, 'Yes');
const sl = new Book('Slaughterhouse-Five', 'Kurt Vonnegut', 240, 'Yes');
const water = new Book('Watership Down', 'Richard Adams', 413, 'Yes');
const hob = new Book('The Hobbit', 'J.R.R. Tolkien', 310, 'Yes');

addBookToLibrary(dune);
addBookToLibrary(got1);
addBookToLibrary(got2);
addBookToLibrary(cien);
addBookToLibrary(star);
addBookToLibrary(it);
addBookToLibrary(sl);
addBookToLibrary(water);
addBookToLibrary(hob);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeRow(rowNum) { //really should be set up to remove object from array..
    document.getElementById('table').deleteRow(rowNum);
}

function toggleReadStatus(rowNum) { //really should be set up to toggle the book's read status on Book prototype instance
   let a =  document.getElementById(`read${rowNum}`);
   if(a.innerHTML === 'In progress') {
   a.innerHTML = 'Yes';
   } else if(a.innerHTML == 'Yes') {
    a.innerHTML = 'No';
   } else if(a.innerHTML == 'No') {
    a.innerHTML = 'In progress';
   } else {
    a.innerHTML = 'No';
   }
}

function addRow() { //should change this to interact with array..make an object?...then add to array..
    const row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    td1.innerHTML = document.getElementById('title').value;
    td2.innerHTML = document.getElementById('author').value;
    td3.innerHTML = document.getElementById('pages').value;
    td4.innerHTML = document.getElementById('read').value;
    td4.setAttribute('id', `read${count}`);
    td4.classList.add('bookread');
    const readButton2 = document.createElement('button');
            readButton2.classList.add('readbutton');
            readButton2.innerHTML = 'Toggle Read Status';
            readButton2.addEventListener('click', () => {
                toggleReadStatus(row.rowIndex);
            })
    const remButton = document.createElement('button');
            remButton.innerHTML = 'Remove';
            remButton.classList.add('rembutton');
            remButton.addEventListener('click', () => {
                removeRow(row.rowIndex);
            }) 
    row.append(td1);
    row.append(td2);
    row.append(td3);
    row.append(td4);
    row.append(readButton2);
    row.append(remButton);
    tbod.append(row);
    count++;
}

function iterate() {
    //for..in doesn't work here, because it's meant to enumerate object properties, not objects themselves.
    //we use for..of instead!
    for(let book of myLibrary) {
        //make a new tr, with td for each data point
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
            bookRead.classList.add('bookread');
            bookRead.innerHTML = book.read;
            bookRow.append(bookRead);
        const readButton = document.createElement('button');
            readButton.classList.add('readbutton');
            readButton.innerHTML = 'Toggle Read Status';
            readButton.addEventListener('click', () => {
                toggleReadStatus(bookRow.rowIndex);
            }) 
            bookRow.append(readButton);
        const remButton = document.createElement('button');
            remButton.innerHTML = 'Remove';
            remButton.classList.add('rembutton');
            remButton.addEventListener('click', () => {
                removeRow(bookRow.rowIndex);
            })
            bookRow.append(remButton);
        count++;
    }
}

iterate();
