enum Category {
  Friction = "Friction",
  NonFriction = "Non Friction",
  Science = "Science",
  History = "History",
}

interface Book {
  id: number;
  title: string;
  author: string;
  isAvaliable: boolean;
}

class Lib {
  books: Book[] = [];

  addBook(book: Book): void {
    if (this.books.some((b) => b.id === book.id)) {
      console.log(`Book With this id : ${book.id} already exsists `);
      return;
    }

    this.books.push(book);
    console.log("Book added successfully");
  }

  //   issueBook(bookId: number): void {
  //     const book: Book | undefined = this.books.find((b) => b.id === bookId);

  //     if (book) {
  //       book.isAvaliable = false;
  //       console.log("Book Issued successfully");
  //       return;
  //     } else {
  //       console.log("No Book Found ");
  //       return;
  //     }
  //   }

  //   returnBook(bookId: number): void {
  //     const book: Book | undefined = this.books.find((b) => b.id === bookId);

  //     if (!book) {
  //       console.log(`Book with this id ${bookId} doesn't Exist`);
  //       return;
  //     }
  //     book.isAvaliable = true;
  //     console.log("Book returned Successfully");
  //   }

  searchByTitle(title: string): Book[] | void {
    let foundBook: Book[] | null = [];

    this.books.forEach((book) => {
      if (book.title === title) {
        foundBook.push(book);
      }
    });

    if (foundBook) {
      return foundBook;
    } else {
      throw new Error("Book Not Found");
    }
  }

  listBook(): Book[] {
    return this.books;
  }
}

const lib = new Lib();

lib.addBook({
  id: 1,
  title: "New Book",
  author: "Aabid",
  isAvaliable: true,
});
lib.addBook({
  id: 2,
  title: "New Book 1",
  author: "Aabid",
  isAvaliable: true,
});
lib.addBook({
  id: 3,
  title: "New Book",
  author: "Anis",
  isAvaliable: true,
});
lib.addBook({
  id: 4,
  title: "New Book 4",
  author: "Aabid",
  isAvaliable: true,
});

// console.log(lib.listBook());
console.log(lib.searchByTitle("New Book"));
