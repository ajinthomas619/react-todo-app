import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setToDos] =useState([]);
  const [toDo,setToDo] =  useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event)=>setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {  toDos.map((value)=>{
          return(
            <div className="todo">
            <div className="left">
              <input onChange={(event)=>{
                console.log(event.target.checked);
                console.log(value);
                setToDos(toDos.filter(obj2=>{
                  if(obj2.id === value.id){
                    obj2.status = event.target.checked
                  }
                  return obj2
                }))
              }} value={value.status} type="checkbox" name="" id="" />
              <p>{value.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>

          )
        })
    
        }
        {toDos.map((value)=>{
          if(value.status){
            return (<h1>{value.text}</h1>)
          }

          return null
        })}

      </div>
    </div>
  );
}

export default App;