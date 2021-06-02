// import React from 'react';
import React, { Component } from 'react';
import './app.css';
//import Book from './components/book';
import Books from './components/books';

function App() {
  return <Books />
  // class App extends Component {
  //   eventIncrement = book => {
  //     console.log(`eventIncrement ${book.name}`)
  //     book.count++;
  //     this.setState(this.state);
  //   }
  //   eventDecrement = book => {
  //     console.log(`eventDecrement ${book.name}`)
  //     book.count--;
  //     this.setState(this.state);
  //   }
  //   eventDelete = book => {
  //     console.log(`eventDelete ${book.name}`)
  //     book.count = 0;
  //     this.setState(this.state);
  //   }
  //   //const title = '스프링';
  //   //const msg = '여기에 자바스크립트를 작성할수 잇어용';
  //   //return < Book />
  //   render() {
  //     return (
  //       <Books
  //         onIncrement={this.eventIncrement}
  //         onDecrement={this.eventDecrement}
  //         onDelete={this.eventDelete}
  //       />
  //     );
  //   }
  // return (
  //   <Books>
  //     <h1> Hello React!!! {title}</h1>
  //     <h1>쉽게 배우는 JSP</h1>
  //     {
  //       <img src='avatar.png' width='170px' height='200px' />
  //     }
  //     {
  //       <table border='1' borderColor='green'>
  //         <tr><th>글번호</th><th>{title}</th></tr>
  //         <tr><td>1</td><td>{msg}</td></tr>
  //       </table>
  //     }
  //     {
  //       ['🐱‍🐉', '🤢']
  //     }
  //     {
  //       ['🐱‍🐉', '🤢'].map(item => (
  //         <h1>item</h1>
  //       ))
  //     }
  //     {
  //       ['🐱‍🐉', '🤢'].map(item => (
  //         <h1>{item}</h1>
  //       ))
  //     }

  //   </Books>
  // );

}

export default App;
