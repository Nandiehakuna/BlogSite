import React, { useState } from 'react'
import avatar1 from '../Assets/avatar1.jpg'
import avatar2 from '../Assets/avatar12.jpg'

import { Link } from 'react-router-dom'

const Author = () => {
  const AUTHORS=[
    { id:1, avatar:avatar1, name:'wendo wakwa',posts:1},
    {id:1, avatar:avatar2, name:'wendo wakwa',posts:23},
    {id:1, avatar:avatar1, name:'wendo wakwa',posts:5},
    {id:1, avatar:avatar1, name:'wendo wakwa',posts:10}
   ]
  const [authors, setAuthors]=useState(AUTHORS)

  
  return (
    <section className='authors '>
     {authors.length >0 ? <div className='authors-page'>
      {
        authors.map(({id, avatar, name,posts })=>{
         return  <Link key={id} to='posts/users/:id' className='authors-container '>
            <div className="authorsimg">
              <img src={avatar} alt="" className='avatar-img' />
            </div>

            <div className="author-info">
              <h4>{name}</h4>
              <span>{posts}</span>
          
              
            </div>


          </Link>
          

        })
      }

     </div> : <h1>authors/users page not found </h1>

     }
     
    
    </section>
    
    
  )
}

export default Author