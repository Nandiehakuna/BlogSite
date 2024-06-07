import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'

const PostsAuthor = () => {
  return (
    <div>
        <Link to={'/posts/users/:id'}>
            <img src={Avatar} alt="" />

            <div className="author-details">
                <h1>by: keliasanderson</h1>
            </div>

        </Link>
    </div>
  )
}

export default PostsAuthor