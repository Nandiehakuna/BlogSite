import React, { useState } from 'react'
import DUMMY_POSTS from '../Data';
import PostItem from '../components/PostItem'


const Posts = () => {
    const [posts, setPosts]=useState(DUMMY_POSTS);

  return (
    <section className='posts'>
        
        
        <div className="posts-container ">
            {
                posts.map(({id,thumbnail, category, title, desc, authorID})=><PostItem key={id} PostID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
            }
        </div>
       
        
    </section>
  )
}

export default Posts