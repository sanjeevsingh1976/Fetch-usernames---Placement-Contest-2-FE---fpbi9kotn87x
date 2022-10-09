import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
const [name,setname] =useState("")

const changeInput = (e) => {
  setname(e.target.value);
}
useEffect(()=>{
  axios.get(`https://content.newtonschool.co/v1/pr/main/users${name}`).then(res =>{
    console.log(res)
  }).catch(err =>{
    console.log(err)
  })
})
  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" value={name} onChange={changeInput}/>
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
