/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
import Books from './content.js';

const form = document.querySelector('#postBook');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const displayArea = document.querySelector('#showBooks');
const list = document.querySelector('#booksshow');
const addNew = document.querySelector('#new');
const contact = document.querySelector('#contact');
// what happens when a person presses submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Check if title and author field is empty or not
  if (title.value === '') {
    alert('Please enter a book title');
  } else if (author.value === '') {
    alert('Please enter a book author');
  } else {
    displayArea.innerHTML = '';
    const book = new Books();
    book.storeData();
  }
});

const bigBook = new Books();
const deleteItem = (id) => {
  bigBook.removeBook(id);
};

if ('cl' === 'clz') {
  deleteItem(1);
}

list.addEventListener('click', () => {
  bigBook.showList();
});
addNew.addEventListener('click', () => {
  bigBook.showNew();
});
contact.addEventListener('click', () => {
  bigBook.showContact();
});

window.addEventListener('load', bigBook.displayBooks());