import React from "react";
import ReactDom from "react-dom/client";

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
function SayHello() {
  return (
    <>
      <HelloWorld />
      <Message />
    </>
  );
}

function HelloWorld() {
  return <h1>Hello World!!</h1>;
}

function Message(){
  return <p>This is React Demo</p>
}

//render has two params(arguments)
// a) what do you want to render
// b) where do you want to render
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<SayHello />);
