
import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({PostID,thumbnail, category, title,description, authorID}) => {
    
  return (
    <div>
        <article className='posts'>
            <div className="post-img">
            <img src={thumbnail} alt={title} />
            </div>

            <div className="posts-centent">
              <Link to={`/posts/${PostID}`}>{title}</Link>

                <footer className='posts-category'>
               
                    <Link to={`/posts/categories/${category}`}>{category}</Link>
                    

                
                </footer>

            </div>


        </article>
    </div>
  )
}

export default PostItem