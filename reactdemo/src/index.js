import React from "react";
import ReactDom from "react-dom/client";

import './index.css'
import {books} from './books'
import Book from './Book'

// use caps for naming cmpt - component
// function SayHello()
// {
//   return <h2> Welcome to React Demo!!!</h2>
// }

// function SayHello(){
//   return React.createElement('h2',{},'Welcome to React Demo!')
// }

// function SayHello(){
//   return (
//     <div>
//       <h1> Hello World</h1>
//     </div>
//   )
// }

// function SayHello(){
//   return React.createElement(
//     "div",
//     {},
//     React.createElement(
//       "h1",
//       {},
//       "Hello World!!"
//     )
//   );
// }

//JSX Rules - Javascript XML
// cmpt always returns single element
// wrapping elements like div/section/article or fragment
// use camelCase for html attributes
// close every element
// Formatting
// function SayHello() {
//   return (
//     <>
//       <HelloWorld />
//       <Message />
//     </>
//   );
// }

// function HelloWorld() {
//   return <h1 className='heading'>Hello World!!</h1>;
// }

// function Message(){
//   return <p style={{color : "red", fontSize : "40px"}}>This is React Demo</p>
// }

//render has two params(arguments)
// a) what do you want to render
// b) where do you want to render
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<SayHello />);
//---------------------------------------- Basic & CSS --------------------------

// // function declaration
// function SayHello(name){
//   console.log(`Hello, ${name}`)
// }

// SayHello('test');

// // function expression
// const hello = function(name) {
//   console.log(`Hello, ${name}`)
// }

// hello('test1');

// // arrow function
// const hello1 = (name) => {
//   console.log(`Hello, ${name}`)
// }

// hello1('test2')

//------------------------------------- Props ---------------------------------


//parent component
function BookList() {
  return (
    <>
      {books.map((bk) => {
        return (
          <Book item={bk} />
        )
      })}
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);