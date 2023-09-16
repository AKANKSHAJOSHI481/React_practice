import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  // const [text, setText] = useState("");
  // const [name, setName] = useState("akanksha");
  //whenever there is a change in component, the UI gets re-rendered, and whenever it gets re-rendered USE effect hook runs
  // variation 1
  // useEffect(() => {
  //   console.log("UI rendering done");
  // });

  // variation 2
  // runs only once at first render
  // useEffect(() => {
  //   console.log("UI rendering done");
  // }, []);

  // variation 3 -> on first render + whenever dependency changes
  // useEffect(() => {
  //   console.log("changes observed");
  // }, [name])
  
  // variation 4 -> to handle unmounting of a component 
   
  // useEffect(() => {
  //   console.log("listener Added");
  //   return()=>{
  //     console.log("listener Removed");
  //   }
  // });
  // function changeHandler(event) {
  //   console.log(text);
  //   setText(event.target.value);
  // }
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight : window.innerHeight
  });
  const setDimension = ()=>{
    getDimension({
      dynamicWidth : window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(()=>{
    window.addEventListener('resize', setDimension);
    return(()=>{
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize]);
  return (
    <div className="App">
      <ul>
        <li>Width : <strong>{screenSize.dynamicWidth}</strong></li>
        <li>Height : <strong>{screenSize.dynamicHeight}</strong></li>
      </ul>
    </div>
  );
}

export default App;
