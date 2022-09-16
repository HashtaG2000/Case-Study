import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState=(props)=>{
  const host="http://localhost:5000"
    const notesInitial=[]

      const[notes,setNotes]=useState(notesInitial)
      // fetch notes
      const getNotes=async ()=>{
        const response = await fetch(`http://localhost:4000/users`, {
          method: 'GET', 
      
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json= await response.json();
        console.log(json)
        setNotes(json)
      }

      // add a note
      // const addNote = async (title, description, tag) => {
      //   // TODO: API Call
      //   // API Call 
      //   const response = await fetch(`${host}/api/notes/addnote`, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMjg5OWIwNjA0YWRiZjdlZDA2YTZhIn0sImlhdCI6MTY1OTAyMzkwMH0.RccLajjDXKQogcEJ_938YeMdhuJf_OJn_RAGdNN1Xcg"
      //     },
      //     body: JSON.stringify({title, description, tag})
      //   });
         
      //   console.log("Adding a new note")
      //   const note = {
      //     "_id": "61322f119553781a8ca8d0e08",
      //     "user": "6131dc5e3e4037cd4734a0664",
      //     "title": title,
      //     "description": description,
      //     "tag": tag,
      //     "date": "2021-09-03T14:20:09.668Z",
      //     "__v": 0
      //   };
      //   setNotes(notes.concat(note))
      // }


      // delete a note\
      const deletenote=async (id)=>{
        console.log(id)
        const response = await fetch(`http://localhost:4000/deleteusers/${id}`, {
          method: 'DELETE', 
      
          headers: {
            'Content-Type': 'application/json',
           
          },
        });
        const json= response.json();
        console.log(json)
        console.log("deleting note"+id)
       const  newNotes=notes.filter((note)=>{return note.ID!==id})
       console.log(newNotes)
       setNotes(newNotes)
      }

      // edit note
      const editnote=async (ID,Name,Email,Phone,Website)=>{
        
        //API CALL
        const response = await fetch(`http://localhost:4000/edit/${ID}`, {
          method: 'PUT', 
      
          headers: {
            'Content-Type': 'application/json',
    
          },
          body: JSON.stringify({Name,Email,Phone,Website})
        });
        const json= await response.json();
        let newNotes=JSON.parse(JSON.stringify(notes))
        //logic
        for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element.ID===ID){
          newNotes[index].Name=Name;
          newNotes[index].Email=Email;
          newNotes[index].Phone=Phone;
          newNotes[index].Website=Website;
          break;
        }
         
        }
        console.log(newNotes)
        setNotes(newNotes)
      }
    return(
        <NoteContext.Provider value ={{notes,setNotes,deletenote,editnote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;