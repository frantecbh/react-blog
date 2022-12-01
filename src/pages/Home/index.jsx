import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

import './styles.css'

export function Home() {

  const [posts, setPosts] = useState([])

  const getPosts = async() =>{
   
    

    try {
      const response = await api.get('posts')

      const data = response.data

      setPosts(data) 
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{

    getPosts()

  },[])

  return (
    <div className='home'>
  
    <h1>Últimos Posts</h1>
    { posts.length === 0 ? <p>Loading ...</p> : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">
            Ler mais!
            </Link>
          </div>
        ))
    )}
    </div>
  );
}

