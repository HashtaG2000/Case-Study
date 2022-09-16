import React, { useContext, useEffect, useRef ,useState} from 'react'

import Noteitem from './Noteitem';
import AddNote from './AddNote';
import noteContext from "../context/notes/noteContext"
function Notes() {
  const context = useContext(noteContext)
  const { notes, getNotes,addNote,editnote} = context;
  const [note, setNote] = useState({eName: "", eEmail: "", ePhone: "",eWebsite:""})
  useEffect(() => {
    getNotes()
  }, [])
  const ref = useRef(null)
  const refClose = useRef(null)
  const updateNote = (currentNote) => {
    ref.current.click();
    console.log(currentNote)
    setNote({ID:currentNote.ID,eName :currentNote.Name,eEmail:currentNote.Email,ePhone:currentNote.Phone,eWebsite:currentNote.Website})

  }
  const handleClick = (e)=>{
    editnote(note.ID,note.eName,note.eEmail,note.ePhone,note.eWebsite)
    refClose.current.click()
    e.preventDefault();
}
const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}
  
  return (
    <>
      {/* <AddNote /> */}
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref} >
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edited note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Name</label>
                  <input type="text" className="form-control" id="eName" name="eName" value={note.eName} aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Email</label>
                  <input type="text" className="form-control" id="eEmail" name="eEmail" value={note.eEmail} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="ePhone" name="ePhone" value={note.ePhone} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Website</label>
                  <input type="text" className="form-control" id="eWebsite" name="eWebsite" value={note.eWebsite} onChange={onChange} />
                </div>
                {/* <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>     */}
                {/* <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag}onChange={onChange} />
                </div> */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={handleClick} className="btn btn-primary">updateNote</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
       
        {notes.map((note) => {
          return <Noteitem key={note.id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
