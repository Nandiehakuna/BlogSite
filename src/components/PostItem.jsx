
import React from 'react'
import { Link } from 'react-router-dom'
import PostsAuthor from './PostsAuthor'

const PostItem = ({PostID,thumbnail, category, title,description, authorID}) => {

  const shortDescription = description.length>145?description.substr(0, 145) + "...":description ;

  const PostTitle = title.length> 30 ? title.substr(0, 30):title;
    
  return (

    
    <div className='postitem'>
        <article className='postitem-container'>
            <div className="post-img">
            <img src={thumbnail} alt={title} className='postitem-img' />
            </div>

            <div className="posts-centent">
              <Link to={`/posts/${PostID}`}>
                <h2>{PostTitle}</h2>
                <p>{shortDescription}</p>
                </Link>

                <div className='posts-footer'>

                  <PostsAuthor/>
               
                    <Link to={`/posts/categories/${category}`} className='category'>{category}</Link>

                 </div>

            </div>


        </article>
    </div>
  )
}

export default PostItem