import React from "react";
import ReactDom from "react-dom/client";

import './index.css'

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

//------------------------------------- Props ---------------------------------

const books = [
  {
    title : "Kannada",
    author: "Raj"
  },
  {
    title : "MicroDegree",
    author: "Likith"
  }
]


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


//Child Component
function Book(props){
 // console.log(props)
 function clickHandler(title){
  console.log(title);
  var text = "Thanks For Purchasing " + title + " book";
  alert(text);
 }
  return (
    <>
      <h1>{props.item.title}</h1>
      <p>{props.item.author}</p>
      <button type="button" onClick={() => clickHandler(props.item.title)}>Purchase</button>
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);