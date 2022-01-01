(function () {
  const p = document.querySelectorAll('p');
  const newBookButton = document.querySelector('#new_book');
  const content = document.querySelector('#content');


  content.textContent = 'Is this working?';

  for (let i = 0; i < p.length; i++) {
    p[i].style.color = "red";
  }

  let myLibrary = [];

  function Book(title, author, pages, read_status) {
    // The constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
  }

  function addBookToLibrary() {
    // For new book button
    newBookButton.addEventListener('click', function() {

      content.textContent = initialBook['title'];

      // if(new book form is closed) { open the form} 
      const newBookForm = document.createElement('div');
      newBookForm.id = 'new_book_form';
      document.getElementsByTagName('body')[0].appendChild(newBookForm);
      newBookForm.innerHTML = ``;

      // else { close the form}
    });
  }

  function addToLibraryTestingGround() {
    const newBookForm = document.createElement('div');
      newBookForm.id = 'new_book_form';
      document.getElementsByTagName('body')[0].appendChild(newBookForm);
      newBookForm.innerHTML = `<input placeholder="Title">` + `<br>` + `<input placeholder="Author">` + `<br>` + `<input placeholder="Number of pages">` + `Radio buttons go here`;
  }

  function displayLibrary() {
    let divMaker;
    let parentDiv;

    parentDiv = document.createElement('div');
    parentDiv.id = 'card_parent';
    document.getElementById('content').appendChild(parentDiv);

    const test = document.getElementById('#card_parent');

    for (i = 0; i < myLibrary.length; i++) {
      divMaker = document.createElement('div');
      divMaker.className = 'info-card';
      divMaker.id = `card${i+1}`;
      // `Title: ${myLibrary[i]['title']}` + `Author: ${myLibrary[i]['author']}` + `Pages: ${myLibrary[i]['pages']}` + `Read Status: ${myLibrary[i]['read_status']}` 
      divMaker.innerHTML = `Title: ${myLibrary[i]['title']}` + '<br><hr>' + `Author: ${myLibrary[i]['author']}` + '<br><hr>' + `Pages: ${myLibrary[i]['pages']}`+ '<br><hr>' + `Read Status: ${myLibrary[i]['read_status']}` ;
      document.getElementById('card_parent').appendChild(divMaker);
    }
      parentDiv.children[1].style.backgroundColor = 'red';
  }



  let initialBook = new Book("The Hobbit", "J. R. R. Tolkien", 304, "Completed");
  let newBook2 = new Book("Angels and Demons", "Dan Brown", 616, "Not completed");
  let newBook3 = new Book("The Miserable Mill", "Lemony Snicket", 195, "Completed");

  myLibrary.push(initialBook);
  myLibrary.push(newBook2);
  myLibrary.push(newBook3);




  addBookToLibrary();
  addToLibraryTestingGround();
  displayLibrary();
})();