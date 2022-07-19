import React from "react";
import { NoteList } from "./NoteList";
import './App.css';
import { useState } from "react";



export const App =() =>{
  const [noteText, setText] = useState('')
  const [noteTitle, setTitle] = useState('')
  const TextArea =()=>{
    const handelChange =(event)=>{
        setText(event.target.value )
    }
    return(
      <div className="textBox">
             <textarea className="textarea"
           placeholder="Type note"
           value={noteText}
           onChange={handelChange}
           >
          </textarea>
      </div>
  )
}
  const title =()=>{
  const handelTitle =(event)=>{
    setTitle(event.target.value )
  }
return(
  <div className="title">
         <textarea
       placeholder="Type title"
       value={noteTitle}
       onChange={handelTitle}
       >
      </textarea>
  </div>
)
 }
  return(
    <div>
      {title()}
      {TextArea() }
      <NoteList text={TextArea} noteText={noteText} setText={setText} noteTitle={noteTitle} setTitle={setTitle}/>
    </div>
  )
  }