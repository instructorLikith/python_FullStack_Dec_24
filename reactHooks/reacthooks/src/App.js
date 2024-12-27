import React,{useState, useEffect}  from "react";
import  {data}   from './data';

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

function App(){

  // declaring a variable and using useState
  const [count, setCount] = useState(0);


// useEffect takes a function as input
  useEffect(() => {
    console.log('use Effect called')
    if(count > 5){
      setCount(0);
    }
  },[count])

  useEffect(() => {
    console.log('hello')
  },[])

  function increaseValue(){
    setCount(count + 1);
  }

  return (
    <>
      <h1>click counter</h1>
      <h2>{count}</h2>
      <button type="button" onClick={increaseValue}>increase value</button>
    </>
  );
}


export default App; 



