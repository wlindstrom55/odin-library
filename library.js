
let myLibrary = [];
const tbod = document.querySelector('.tablebody');
const table = document.getElementById('table');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(book) {
    if(book.read == 'In progress') {
        book.read = 'Yes';
    } else if(book.read == 'Yes') {
        book.read = 'No';
    } else if(book.read == 'No') {
        book.read = 'In Progress';
    } else {
        book.read = 'Yes';
    }
    iterate();
}

// function addBookToLibrary(book) {
//     myLibrary.push(book);
// }

function removeBook(index) { //really should be set up to remove object from array..
    //document.getElementById('table').deleteRow(rowNum);
    //would need to remove the object, then refresh the iterator
    myLibrary.splice(index, 1);
    iterate();
    //reset(changedLib);
    //iterate();
}

function toggleReadStatus(rowNum) { 
    //really should be set up to toggle the book's read status on Book prototype instance
    //so that it's the same function across all Books.
    //as it is now this code really only reads and then changes the DOM
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
    //should construct a new object based on inputs, put that object into the array, and then iterate.
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    
    // const row = document.createElement('tr');
    // var td1 = document.createElement('td');
    // var td2 = document.createElement('td');
    // var td3 = document.createElement('td');
    // var td4 = document.createElement('td');
    // td4.setAttribute('id', `read${count}`);
    // td4.classList.add('bookread'); //for css styling
//old. directly assigned the value of the new cells by what the inner content of the inputs were
    // td1.innerHTML = document.getElementById('title').value;
    // td2.innerHTML = document.getElementById('author').value;
    // td3.innerHTML = document.getElementById('pages').value;
    // td4.innerHTML = document.getElementById('read').value;
    
    // const readButton2 = document.createElement('button');
    //         readButton2.classList.add('readbutton');
    //         readButton2.innerHTML = 'Toggle Read Status';
    //         readButton2.addEventListener('click', () => {
    //             toggleReadStatus(row.rowIndex);
    //         })
    // const remButton = document.createElement('button');
    //         remButton.innerHTML = 'Remove';
    //         remButton.classList.add('rembutton');
    //         remButton.addEventListener('click', () => {
    //             removeRow(row.rowIndex);
    //         }) 
    // row.append(td1);
    // row.append(td2);
    // row.append(td3);
    // row.append(td4);
    // row.append(readButton2);
    // row.append(remButton);
    // tbod.append(row);
    iterate();
    // count++;
}

function iterate() {
    let count = 1; //counter for purposes of ID names
    //This stuff at the beginning is to clear the table before printing the objects to the DOM
    let toDelete = document.querySelector('.tablebody');
    toDelete.remove();
    //tbod.remove(); - would delete existing tbod from the DOM... can't have here tho, since the proceeding line 
    //has the same var name, it will throw error. Must select the DOM element w/ id like w/ toDelete
    let tbod = document.createElement('tbody'); //then create new DOM element tbod for use below
    tbod.classList.add('tablebody'); //then assign the new tbod the right class
    table.append(tbod); //last, append it to the table.
    //the below for..of loop iterates through Books in myLibrary & creates the DOM elements for them
    //for..in doesn't work here, because it's meant to enumerate object properties, not objects themselves.
    for(let book of myLibrary) {
        const bookRow = document.createElement('tr');
            bookRow.setAttribute('id', `bookrow${count}`);
            tbod.append(bookRow);
        const bookTitles = document.createElement('td');
            bookTitles.setAttribute('id', `booktitles${count}`);
            bookTitles.classList.add('booktitle');
            bookTitles.innerHTML = book.title;
            bookRow.append(bookTitles);
        const bookAuthors = document.createElement('td');
            bookAuthors.setAttribute('id', `bookauthors${count}`);
            bookAuthors.classList.add('bookauthor');
            bookAuthors.innerHTML = book.author;
            bookRow.append(bookAuthors);
        const bookPages = document.createElement('td');
            bookPages.setAttribute('id', `bookpages${count}`);
            bookPages.innerHTML = book.pages;
            bookRow.append(bookPages);
        const bookRead = document.createElement('td');
            bookRead.setAttribute('id', `bookread${count}`);
            bookRead.classList.add('bookread');
            bookRead.innerHTML = book.read;
            bookRow.append(bookRead);
        const readButton = document.createElement('button');
            readButton.classList.add('readbutton');
            readButton.innerHTML = 'Toggle Read Status';
            readButton.addEventListener('click', () => {
                Book.prototype.toggleRead(myLibrary[bookRow.rowIndex - 1]);
                //should access array for object based on its row number.
                //the - 1 is necessary to account for the zero-indexed array
            }) 
            bookRow.append(readButton);
        const remButton = document.createElement('button');
            remButton.innerHTML = 'Remove';
            remButton.classList.add('rembutton');
            remButton.addEventListener('click', () => {
                removeBook(bookRow.rowIndex -1);
            })
            bookRow.append(remButton);
        count++;
    }
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
myLibrary.push(dune);
myLibrary.push(got1);
myLibrary.push(got2);
myLibrary.push(cien);
myLibrary.push(star);
myLibrary.push(it);
myLibrary.push(sl);
myLibrary.push(water);
myLibrary.push(hob);

iterate();

