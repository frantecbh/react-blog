import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';




import './styles.css'

export function NewPost() {

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [userId, setUserId] = useState(1)

  const createPost = async(e) =>{
   e.preventDefault()

   if(!title){
    return alert("Informe o titulo")
   }

   if(!body){
    return alert("Digite o conteúdo")
   }
   setUserId(userId +1)

    const post = {title, body, userId}

    await api.post("/posts", {
      body:  post,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    setTitle("")
    setBody("")

    navigate("/")
    
  }

  return ( 

    <div className='new-post'>
      <h2>Inserir novo post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
            <label htmlFor="title">Titulo:</label>
            <input type="text" 
            placeholder='Digite o titulo'
            name='title' 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="body">Conteúdo:</label>
           <textarea name="body" 
           id="body" 
           value={body}
           placeholder='Digite o conteúdo'
           onChange={(e)=> setBody(e.target.value)}
           ></textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn' />
      </form>
    </div>
  );
}

