(function () {
  // Initial variables
  let myLibrary = [];
  let bookIndex = 0;
  let formActive = false;

  // Container Selectors
  const p = document.querySelectorAll('p');
  const content = document.querySelector('#content');

  // Button Selectors
  const newBookButton = document.querySelector('#new_book');
  const leftArrow = document.getElementById("left_arrow");
  const rightArrow = document.getElementById('right_arrow');

  // Event Listeners
  newBookButton.addEventListener('click', function() {
  if (formActive === false) {  
    const newBookForm = document.createElement('div');

    newBookForm.id = 'new_book_form';
    document.getElementsByTagName('body')[0].appendChild(newBookForm);
    newBookForm.innerHTML = `<form>
    <input type="text" id="title" name="title" placeholder="Title" required>
    <input type="text" id="author" name="author" placeholder="Author" required>
    <input type="number" id="page_numbers" name="page_numbers" min="1" max="111111111111111111" placeholder="Number of pages" required>
    <label><input type="radio" id="not_completed" name="completion_status" value="Not Completed" checked>Not Completed</label>
    <label><input type="radio" id="completed" name="completion_status" value="Completed">Completed</label>
    <input type="button" id="submit" value="Submit">
    </form>`;

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener("click", () => {
      addBooksToLibrary();
    });
    formActive = true;

  } else { 
      document.getElementById('new_book_form').remove();
      formActive = false;
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == 'Enter') {
      addBooksToLibrary();
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.key == 'ArrowLeft') {
      subtractBookIndex();
    } else if (event.key == 'ArrowRight') {
      addBookIndex();
    }
  })

  leftArrow.addEventListener("click", function () {
  subtractBookIndex();
  });

  rightArrow.addEventListener("click", function () {
     addBookIndex();
  });

  function Book(title, author, pages, read_status) {
    // The constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
  }

  function addBooksToLibrary() {
    const targetTitle = document.getElementById('title');
    const targetAuthor = document.getElementById('author');
    const targetPages = document.getElementById('page_numbers');

    if (targetTitle && targetTitle.value && targetAuthor.value && targetPages.value) {
      removeSelfBySelector('#card_parent');

      let read_status_value;
      let targetNotCompleted = document.getElementById('not_completed'); 
      let targetCompleted = document.getElementById('completed');

      if (targetNotCompleted.checked) {
        read_status_value = targetNotCompleted.value;
      } else {
        read_status_value = targetCompleted.value;
      }
        let newBook = new Book(targetTitle.value, targetAuthor.value, targetPages.value, read_status_value)
        myLibrary.push(newBook);
        resetValue(targetTitle);
        resetValue(targetAuthor);
        resetValue(targetPages);
         
        bookIndexSize();
        displayLibrary(bookIndex);
    }
  }

  function bookIndexSize() {
    if (myLibrary.length <= 3) {
      bookIndex = 0;
    } else {
    bookIndex = myLibrary.length - 3;
    }
  }

  function displayLibrary(book_index = 0) {
    createChild();

    for (i = 0; i < myLibrary.length; i++) {
    let cardPosition = bookIndex + i;

      if (i >= 3 || cardPosition + 1 > myLibrary.length) {
        break;
      }
      
      let divMaker = document.createElement('div');
      divMaker.className = 'info-card';
      divMaker.id = `card${cardPosition + 1}`;

      titleIndex = cardPosition + 1;

      divMaker.innerHTML = `<span class="float-end">${titleIndex}</span>Title: ${myLibrary[cardPosition]['title']}` + '<br><hr>' + `Author: ${myLibrary[cardPosition]['author']}` + '<br><hr>' + `Pages: ${myLibrary[cardPosition]['pages']}`+ '<br><hr>' + `Read Status:  <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked${cardPosition}" checked/>
      <label id="card-label${cardPosition + 1}"class="form-check-label" for="flexSwitchCheckChecked">Completed</label>
      </div>` + ` <button id="card-btn-${cardPosition + 1}" class="delete-button">delete</button>`;

      // This needs to be moved
      if (myLibrary[cardPosition]['read_status'] === 'Not Completed') {
        divMaker.classList.add("red-card");
      }

      document.getElementById('card_parent').appendChild(divMaker);

      //checkboxToggle();
    }

      deleteButtons = document.getElementsByClassName('delete-button');
      for (let x = 0; x < deleteButtons.length; x++) {
        deleteButtons[x].addEventListener("click", function() {
        removeSelfByIndex(x + bookIndex);
        console.log(myLibrary)

        bookIndex = 0;
        displayLibrary(bookIndex)
      })
    }
  }

  function createChild() {
    let parentDiv = document.createElement('div');
    parentDiv.id = 'card_parent';
    content.appendChild(parentDiv);
  }

  function subtractBookIndex() {
    document.getElementById('card_parent').remove();
      if (bookIndex > 0) {
            bookIndex--;
    }
          displayLibrary(bookIndex);
  }

  function addBookIndex() {
    document.getElementById('card_parent').remove();
    if (bookIndex < myLibrary.length - 3) {
      bookIndex++;
    }
    displayLibrary(bookIndex);
  }

  function initializeLibrary() {
    let initialBook = new Book("The Hobbit", "J. R. R. Tolkien", 304, "Completed");
    let newBook2 = new Book("Angels and Demons", "Dan Brown", 616, "Not Completed");
    let newBook3 = new Book("The Miserable Mill", "Lemony Snicket", 195, "Completed");
    let newBook4 = new Book("Dazed and Confused", "Some Guy", 523, "Not Completed");
    let newBook5 = new Book("Strange Books", "Anon", 95, "Not Completed");


    myLibrary.push(initialBook);
    myLibrary.push(newBook2);
    myLibrary.push(newBook3);
    myLibrary.push(newBook4);
    myLibrary.push(newBook5);
  }
  
  function removeSelfByIndex(index) {
    document.getElementById('card_parent').remove();
    myLibrary.splice(index, 1);
  }

  function removeSelfBySelector(selector) {
    document.querySelector(selector).remove();
  }

  function resetValue(target) {
    target.value = '';
  }

  function checkboxToggle() {
    checkboxes = document.querySelectorAll(".form-check-input");
      check = document.getElementById('flexSwitchCheckChecked0');

      //if read status is not completed, button should not be checked and text content should be not completed


      for (let i = 0; i < checkboxes.length; i++ ) {
        let cardPosition = bookIndex + i;
        if (myLibrary[i]['read_status'] === 'Not Completed') {
          document.getElementById(`card-label${cardPosition + 1}`).textContent = "Not Completed";
          document.getElementById(`flexSwitchCheckChecked${cardPosition}`).checked = false;
        } 

        
        checkboxes[i].addEventListener("click", () => {
    
          if (checkboxes[i].checked) {
            document.getElementById(`card-label${cardPosition + 1}`).textContent = "Completed";
          } else {
            document.getElementById(`card-label${cardPosition + 1}`).textContent = "Not Completed";
          }
          const card = document.getElementById(`card${cardPosition + 1}`)
          
          card.classList.toggle('red-card');

         console.log(card.id)
        })
      }
  }


  initializeLibrary();
  addBooksToLibrary();
  displayLibrary();
  checkboxToggle();

})();