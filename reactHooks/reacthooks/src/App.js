import React, { useState, useEffect } from "react";
import { data } from "./data";

// Props , State & Routing imp in react
// State -useState
// to handle state change in application we use useState -> hook
// useState Hook
// function App() {
//   //let title = "React Demo";

//   // useState -> returns an array with 2 values, 1 - undefined 2 - function
//   // console.log(useState("hello"));
//   // const value = useState(1)[0];
//   // console.log(value);

//   const [text, setText] = useState('React Demo');
//   const [teams, setTeam] = useState(data);
//   //console.log(data);

//   function handleClick() {
//     if(text === 'React Demo' ){
//       setText('React State Demo')
//     }
//     else{
//       setText('React Demo')
//     }

//     setTeam([]);
//   }

//   return (
//     <>
//       {teams.map((member) => {
//         return (
//           <div key = {member.id}>
//             <h3>{member.name}</h3>
//           </div>
//         )
//       })}

//       <h2>{text}</h2>
//       <button type="button" onClick={handleClick} >Change Title</button>
//     </>
//   );
// }

//useEffect hook
// conditional rendering
// function App(){

//   // declaring a variable and using useState
//   const [count, setCount] = useState(0);

// // useEffect takes a function as input
//   useEffect(() => {
//     console.log('use Effect called')
//     if(count > 5){
//       setCount(0);
//     }
//   },[count])

//   useEffect(() => {
//     console.log('hello')
//   },[])

//   function increaseValue(){
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h1>click counter</h1>
//       <h2>{count}</h2>
//       <button type="button" onClick={increaseValue}>increase value</button>
//     </>
//   );
// }

// https://api.github.com/users
// function App() {
//   const url = "https://api.github.com/users";
//   const [gusers, setGusers] = useState([]);

//   async function getData() {
//     const response = await fetch(url);
//     const users = await response.json();
//     setGusers(users);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//     {gusers.map((user)=> {
//       return <li>{user.login}</li>
//     })}
//     </>
//   );
// }

//multiple returns
// function App() {
//   //conditional rendering
//   const [loading, setLoading] = useState(false);

//   if (loading) {
//     return "data loading ....";
//   }

//   return (
//     <>
//       <h1>Multiple Return</h1>
//     </>
//   );
// }

// short circuit evaluation
// function App(){
//   //short-circuit evaluation
//   const [text, setText] = useState('abc');
//   const firstValue = text || "hello world";
//   const secondValue = text && "hello world";
//   return(
//     <>
//       <h1>1st : {firstValue}</h1>
//       <h1>{secondValue}</h1>
//     </>
//   )
// }

// ternary operator
// function App() {
//   // ternary operator
//   // statement ? true : false

//   const [text, setText] = useState("abc");
//   function handleClick() {
//     setText(!text);
//   }

//   return (
//     <>
//       {text ? <h1>Good</h1> : <h1>Bad</h1>}
//       <button onClick={handleClick}>click me</button>
//     </>
//   );
// }

//forms
// function App() {

//   function handleSubmit(e){
//     e.preventDefault();
//     console.log("hello world")
//   }

//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');

//   function handleNameChange(e){
//     setName(e.target.value)
//   }

//   function handleAgeChange(e){
//     setAge(e.target.value)
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input type="text" id="name" name="name" value={name} onChange={handleNameChange}/>

//         <label htmlFor="age">Age</label>
//         <input type="number" id="age" name="age" value={age} onChange={handleAgeChange}/>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

import Home from "./Home";
import About from "./About"
import Contact from "./Contact"
import Error from "./Error"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// react router
//npm install react-router-dom
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
