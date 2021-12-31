(function () {
  const p = document.querySelectorAll('p');
  const newBookButton = document.querySelector('#new_book');
  const content = document.querySelector('#content-text');


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
    });
  }

  function displayLibrary() {
    let divMaker;
    let parentDiv;

    parentDiv = document.createElement('div');
    parentDiv.id = 'card_parent';
    // parentDiv.textContent = 'This is the parent';
    document.getElementsByTagName('body')[0].appendChild(parentDiv);

    const test = document.getElementById('#card_parent');

    for (i = 0; i < myLibrary.length; i++) {
      divMaker = document.createElement('div');
      divMaker.className = 'info-card';
      divMaker.id = `card${i+1}`;
      divMaker.textContent = myLibrary[i]['title'];
      document.getElementById('card_parent').appendChild(divMaker);
    }
      parentDiv.children[1].style.backgroundColor = 'red';
  }



  let initialBook = new Book("The Hobbit", "J. R. R. Tolkien", 304, "Completed");
  let newBook2 = new Book("Test", "Mrs. Test", 100, "Not completed");
  let newBook3 = new Book("Test2", "Mr. Test", 200, "Completed");

  myLibrary.push(initialBook);
  myLibrary.push(newBook2);
  myLibrary.push(newBook3);




  addBookToLibrary();
  displayLibrary();
})();