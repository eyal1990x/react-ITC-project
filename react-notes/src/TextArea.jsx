import { useState } from "react"

export const TextArea =()=>{

        const [noteText, setText] = useState('')

        const handelChange =(event)=>{
            setText(event.target.value )
        }
        // const handleAdd =()=>{
        //     if(noteText.trim().length>0){
        //         handelAddNote(noteText)
        //         setText('')
        //     }
            
        // }


    
    return(
        <div className="textBox">
               <textarea
             placeholder="Type note"
             value={noteText}
             onChange={handelChange}
             >
            </textarea>
        </div>
    )
}
