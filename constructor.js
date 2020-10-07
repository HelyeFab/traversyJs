

function Book(title, author, page, hasread) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.numberPage = page;
    this.read = hasread;

    this.getFull = function () {
        if (this.read==true) {
         return   `${this.bookTitle} by ${this.bookAuthor} has ${this.numberPage} and you have read it`
        } else {
          return  `${this.bookTitle} by ${this.bookAuthor} has ${this.numberPage} and you haven't read it`
        }
    }
}
let myBook = new Book("The Shining", "Stephen King", 550, false);
console.log(myBook.getFull());

