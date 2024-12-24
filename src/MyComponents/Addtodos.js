import React,{useState} from 'react'

export default function Addtodos(props) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();  //prevents loading of page
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }else{
        props.addTodo(title,desc);}
        setTitle("");  // after addinf todo the title and description will be blank
        setDesc("");
    }
    return (
        <div className='container'>
            <form onSubmit={submit}>
                
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Add title:</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description:</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
