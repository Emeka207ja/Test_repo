import React, {useState,useEffect} from 'react'
import './Nav.css'
import axios from 'axios'

function Home() {
    const [posts,setPost]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div>
            <h2 className='text-center text-primary'>Welcome Home</h2>
            <ul className='list-group'>
                {
                   posts.map(post=>(
                       <li key ={post.id} className='list-group-item' >{post.title}</li>
                   ))
                }
            </ul>
        </div>
    )
}

export default Home
