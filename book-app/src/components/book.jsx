import React, { Component } from 'react';

class Book extends Component {
  state = {
    count: 0,
  };
  eventIncrement = (event) => {
    //console.log(event);
    this.setState({ count: this.state.count + 1 });
  }
  eventZero = (event) => {
    //console.log(event);
    this.setState({ count: 0 });
  }
  render() {
    return (
      <li className="book">
        <span className="book-name">자바프로그래밍</span>
        <span className="book-count">{this.state.count}</span>
        <button className="book-button book-increase" onClick={this.eventIncrement}>
          <i class="fas fa-plus-circle"></i>
        </button>
        <button className="book-button book-zero" onClick={this.eventZero}>
          <i class="fab fa-creative-commons-zero"></i>
        </button>
      </li>
    );
  }
}

export default Book;