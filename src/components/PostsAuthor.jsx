import React from 'react'
import { Link } from 'react-router-dom'
// import { Avatar } from '@mui/material'
import avatar from '../Assets/avatar1.jpg'


const PostsAuthor = () => {
  return (
    <div>
        <Link to={'/posts/users/:id'}  className='author'>
            <img src={avatar} alt="" className='profile-avatar' />

            <div className="author-details">
                <h1> keliasanderson</h1>
                <small>just now </small>

            </div>

        </Link>
    </div>
  )
}

export default PostsAuthor