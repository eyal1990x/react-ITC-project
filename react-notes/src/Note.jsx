import {localForage} from 'localforage'
import { createPortal } from "react-dom"
import { useEffect } from 'react'

export const Note=({notes,deleteNote})=>{

const renderNote = () =>{
    
    return notes.map(note =>{
        return <div className="note" key={note.id} date={note.date} onClick={modal}>
            <h3>{note.title}</h3>
            <h4>{note.text}</h4>
            <p>{note.date}</p>
            <button onClick={()=> {deleteNote(note.id)}}> delete</button>
        </div>
    })
 }

 const modal =(e) =>{
    console.log(e.target)
    
    return createPortal(
        <div className="modal">
            {e.target}
        </div>,
        document.getElementById('modal') 
    )
}

 return(
    <div className="noteBox" >
    {renderNote()}
    
    </div>
 )
}