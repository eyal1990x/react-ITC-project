import React from "react";
import { Note } from "./Note";


export const Button = ({addNote,setText,setTitle,noteText}) => {

    const resetText = ()=>{
        if(noteText.length>0){
            addNote()
            setText('')
            setTitle('') 
        }
        
    }
    return(
        <div className="mainButtonBox">
           <button onClick={resetText}>
           
            Add Note
           </button>
        </div>

    )
   
}