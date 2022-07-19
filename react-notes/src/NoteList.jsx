import { useState,useEffect} from "react"
import {Button} from './Button'
import { Note } from "./Note"
import localForage from 'localforage'
// import { TextArea } from "./TextArea"
export const NoteList = ({noteText,setText,noteTitle,setTitle}) => {
    const [notes,setNote] = useState([])
    const displayDate =() =>{
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const date = new Date();
    let monthNew = month[date.getMonth()]
        
    let day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    let displayDate = ''
        let amPm = ''
        if( hour > 12){
            amPm = 'PM'
        }
        else{
            amPm = 'AM'
        }
        return displayDate = `${monthNew} ${day}th ${hour}:${minutes} ${amPm}`
       
    }
        
    
    const addNote = () =>{
       
    const newNotes = ([...notes,
        
        {
            id: Date.now(),
            date: displayDate(),
            title: `${noteTitle}`,
            text: `${noteText}`
            
        }] 
    )
     
    setNote(newNotes)
    
    }
    
    
    const deleteNote = (id) =>{
        const confirm = window.confirm("Are you sure you want to delete your note?");
        
        if (confirm==true) {
            const newNotes= notes.filter((note)=>note.id !==id);
            setNote(newNotes)
        }  
     }
    //  const TextArea =()=>{

    //     const [noteText, setText] = useState('')
    
    //     const handelChange =(event)=>{
    //         setText(event.target.value )
    //     }
    //     return(
    //       <div className="textBox">
    //              <textarea
    //            placeholder="Type note"
    //            value={noteText}
    //            onChange={handelChange}
    //            >
    //           </textarea>
    //       </div>
    //   )
    //     }
    
    localForage.setItem('notes', notes)
    useEffect(()=>{
        localForage.getItem('notes').then((res)=>{if(res)
            {setNote(res)} })
        },[])

    return(
        <div> 
         <Button addNote={addNote} setText={setText} setTitle={setTitle} noteText={noteText} />
         <Note notes={notes} deleteNote={deleteNote}/>
        </div>
    )

}