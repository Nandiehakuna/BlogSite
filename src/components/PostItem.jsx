
import React from 'react'
import { Link } from 'react-router-dom'
import PostsAuthor from './PostsAuthor'

const PostItem = ({PostID,thumbnail, category, title,description, authorID}) => {
    
  return (
    <div className='postitem'>
        <article className='postitem-container'>
            <div className="post-img">
            <img src={thumbnail} alt={title} className='postitem-img' />
            </div>

            <div className="posts-centent">
              <Link to={`/posts/${PostID}`}>
                <h2>{title}</h2>
                <p>{description}</p>
                </Link>

                <div className='posts-footer'>

                  <PostsAuthor/>
               
                    <Link to={`/posts/categories/${category}`}>{category}</Link>

                 </div>

            </div>


        </article>
    </div>
  )
}

export default PostItem