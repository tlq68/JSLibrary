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

  function newBookButtonToggle() {
    // For new book button
    let formActive = false;

    newBookButton.addEventListener('click', function() {

      //content.textContent = initialBook['title'];


       if(formActive === false) {  
      const newBookForm = document.createElement('div');
      newBookForm.id = 'new_book_form';
      document.getElementsByTagName('body')[0].appendChild(newBookForm);
      newBookForm.innerHTML = `<form>
      <input type="text" id="title" name="title" placeholder="Title" required>
      <input type="text" id="author" name="author" placeholder="Author" required>
      <input type="text" id="page_numbers" name="page_numbers" placeholder="Number of pages" required>
      <label><input type="radio" id="not_completed" name="completion_status" value="Not Completed" checked>Not Completed</label>
      <label><input type="radio" id="completed" name="completion_status" value="Completed">Completed</label>
      <input type="button" id="submit" value="Submit">
    </form>`;
      formActive = true;

      
      testing();
    }
       else { 
        //content.textContent = 'The button was triggered'
         document.getElementById('new_book_form').remove();
          formActive = false;
          
        }
    });
  }

  function testing() {

    // The next goal is to get this same functionality, but without having to nest functions within functions.
    const testButton = document.getElementById('submit');
    const testTarget = document.getElementById('test-button');
    testButton.addEventListener("click", function () {
      testTarget.textContent = document.getElementById('author').value;
    });
  }
  function addBooksToLibrary() {
    
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


  

  newBookButtonToggle();
  displayLibrary();
  //testing();
  document.getElementById('test-button').style.color = "red"
})();