import React, { useState } from 'react'

import Thumbnail1 from '../Assets/blog1.jpg'
import Thumbnail2 from '../Assets/blog17.jpg'
import Thumbnail3 from '../Assets/blog3.jpg'
import Thumbnail4 from '../Assets/blog4.jpg'
import Thumbnail5 from '../Assets/blog5.jpg'
import PostItem from './PostItem'

const  DUMMY_POSTS=[
    {
        id:'1',
        thumbnail:Thumbnail1,
        category:'education',
        title:'this is the title of the very first post on this page ',
        desc:'lorem ispum dolar sit amot ',
        authorID:3

    },
    {
        id:'2',
        thumbnail:Thumbnail2,
        category:'education',
        title:'this is the title of the very first post on this page ',
        desc:'lorem ispum dolar sit amot ',
        authorID:3

    }, {
        id:'3',
        thumbnail:Thumbnail3,
        category:'education',
        title:'this is the title of the very first post on this page ',
        desc:'lorem ispum dolar sit amot ',
        authorID:3

    }, {
        id:'4',
        thumbnail:Thumbnail4,
        category:'education',
        title:'this is the title of the very first post on this page ',
        desc:'lorem ispum dolar sit amot ',
        authorID:3

    }, {
        id:'5',
        thumbnail:Thumbnail5,
        category:'education',
        title:'this is the title of the very first post on this page ',
        desc:'lorem ispum dolar sit amot ',
        authorID:3

    },
    {
        id:'6',
        thumbnail:Thumbnail1,
        category:'education',
        title:'this is the title of the very first post on this page ',
        desc:'lorem ispum dolar sit amot ',
        authorID:3

    },
]
const Posts = () => {
    const [posts, setPosts]=useState(DUMMY_POSTS);

  return (
    <div>
        <section className="posts">
            {
                posts.map((id,thumbnail, category, title, desc, authorID)=><PostItem key={id} PostID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
            }
        </section>
    </div>
  )
}

export default Posts