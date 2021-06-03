import React, { Component } from 'react';
import Book from './book';

class Books extends Component {
  state = {
    books: [
      { id: 1, name: 'HTML', count: 0 },
      { id: 2, name: 'JAVA', count: 0 },
      { id: 3, name: 'SPRING', count: 0 },
    ],
  };
  eventIncrement = book => {
    console.log(`eventIncrement ${book.name}`)
    // book.count++;
    // this.setState(this.state);
    const books = [...this.state.books]
    const index = books.indexOf(book);
    books[index].count++;
    this.setState({ books });
  }
  eventDecrement = book => {
    console.log(`eventDecrement ${book.name}`)
    book.count--;
    this.setState(this.state);
    // const books = [...this.state.books]
    // const index = books.indexOf(book);
    // books[index].count--;
    // this.setState({ books });
  }
  eventDelete = book => {
    console.log(`eventDelete ${book.name}`)
    // book.count = 0;
    // this.setState(this.state);
    const books = [...this.state.books]
    const index = books.indexOf(book);
    books[index].count = 0;
    this.setState({ books });
  }
  render() {
    return (
      <ul>
        {
          this.state.books.map(book => (
            <Book
              key={book.id}
              book={book}
              onIncrement={this.eventIncrement}
              onDecrement={this.eventDecrement}
              onDelete={this.eventDelete}
            />
          ))
        }
      </ul>
    );
  }
}

export default Books;