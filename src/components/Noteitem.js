import React, { useContext } from 'react'
import { useState } from 'react'
import noteContext from '../context/notes/noteContext'

function Noteitem(props) {
    const context = useContext(noteContext)
    const { deletenote } = context
    const { note, updateNote } = props
    const [like, setLike] = useState("regular")
    const handleClick = () => {
        if (like === "regular") {
            setLike("solid")
        }
        else {
            setLike("regular")
        }

    }
    console.log(setLike)
    return (
        // <div className='col-md-3'>
        //     <div className="card my-3" >
        //         <img src="..." className="card-img-top" alt="..." />
        //         <div className="card-body">
        //             <div className="d-flex align-items-centre">
        //                 <h5 className="card-title">{note.Name}</h5>
        //                 <p className="card-text">{note.Email}</p>
        //                 <p className="card-text">{note.Phone}</p>
        //                 <p className="card-text">{note.Website}</p>

        //                 <i class="fa-solid fa-trash-can mx-2" onClick={()=>{deletenote(note._id)}}></i>
        //                 <i class="fa-solid fa-pen-to-square"onClick={()=>{updateNote(note)}}></i>
        //             </div>                    
        //         </div>
        //     </div>
        // </div>
        <div class="col-md-3">
            <div class="card" style={{ width: `18rem` }}>
                <img src={`https://avatars.dicebear.com/v2/avataaars/{${note.Name}}.svg?options[mood][]=happy`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{`${note.Name}`}</h5>
                    <p class="card-text"><i class="fa-regular fa-envelope"></i>{`${note.Email}`}</p>
                    <p class="card-text"><i class="fa-sharp fa-solid fa-phone"></i>{`${note.Phone}`}</p>
                    <p class="card-text"> <i class="fa-sharp fa-solid fa-globe"></i>{`${note.Website}`}</p>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <i class={`fa-${like} fa-heart`} onClick={handleClick} />
                            </div>
                            <div class="col-sm-4">
                                <i class="fa-sharp fa-solid fa-pen-to-square" onClick={() => { updateNote(note) }}></i>
                            </div>
                            <div class="col-sm-4">
                                <i class="fa-solid fa-trash-can mx-2" onClick={() => { deletenote(note.ID) }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Noteitem
