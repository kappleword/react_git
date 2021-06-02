import React, { Component } from 'react';

class Book extends Component {
  state = {
    count: 0,
  };
  eventIncrement = (event) => {
    //console.log(event);
    this.setState({ count: this.state.count + 1 });
  }
  eventDecrement = (event) => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  }
  eventDelete = (event) => {
    //console.log(event);
    this.setState({ count: 0 });
  }
  render() {
    //console.log(this.props.book);
    const { name, count } = this.props.book;
    return (
      <li className="book">
        <span className="book-name">{name}</span>
        <span className="book-count">{count}</span>
        <button className="book-button book-increase" onClick={this.eventIncrement}>
          <i className="fas fa-plus-circle"></i>
        </button>
        <button className="book-button book-decrease" onClick={this.eventDecrement}>
          <i className="fas fa-minus-circle"></i>
        </button>
        <button className="book-button book-zero" onClick={this.eventDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Book;