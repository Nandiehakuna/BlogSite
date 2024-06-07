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
        desc:'Dive into a world where curiosity meets creativity. ThoughtsUnleashed is your go-to destination for diverse and engaging content, covering everything from lifestyle and travel to tech insights and personal growth. Our team of passionate writers and enthusiasts bring you thoughtful articles, inspiring stories, and practical tips to enrich your everyday life. Whether youre looking for a dose of daily inspiration, insightful advice, or just a good read, you ll find it all here. Join our community and explore the myriad of topics that ignite our passion and curiosity! ',
        authorID:3

    },
    {
        id:'2',
        thumbnail:Thumbnail2,
        category:'education',
        title:'this is the title of the very first post on this page ',
        desc:'Dive into a world where curiosity meets creativity. ThoughtsUnleashed is your go-to destination for diverse and engaging content, covering everything from lifestyle and travel to tech insights and personal growth. Our team of passionate writers and enthusiasts bring you thoughtful articles, inspiring stories, and practical tips to enrich your everyday life. Whether youre looking for a dose of daily inspiration, insightful advice, or just a good read, youll find it all here. Join our community and explore the myriad of topics that ignite our passion and curiosity! ',
        authorID:3

    }, {
        id:'3',
        thumbnail:Thumbnail3,
        category:'education',
        title:'this is the title of the very first post on this page ',
        desc:'Dive into a world where curiosity meets creativity. ThoughtsUnleashed is your go-to destination for diverse and engaging content, covering everything from lifestyle and travel to tech insights and personal growth. Our team of passionate writers and enthusiasts bring you thoughtful articles, inspiring stories, and practical tips to enrich your everyday life. Whether youre looking for a dose of daily inspiration, insightful advice, or just a good read, youll find it all here. Join our community and explore the myriad of topics that ignite our passion and curiosity!',
        authorID:3

    }, {
        id:'4',
        thumbnail:Thumbnail4,
        category:'education',
        title:'this is the title of the very first post on this page ',
        desc:'Dive into a world where curiosity meets creativity. ThoughtsUnleashed is your go-to destination for diverse and engaging content, covering everything from lifestyle and travel to tech insights and personal growth. Our team of passionate writers and enthusiasts bring you thoughtful articles, inspiring stories, and practical tips to enrich your everyday life. Whether youre looking for a dose of daily inspiration, insightful advice, or just a good read, youll find it all here. Join our community and explore the myriad of topics that ignite our passion and curiosity! ',
        authorID:3

    }, {
        id:'5',
        thumbnail:Thumbnail5,
        category:'education',
        title:'this is the title of the very first post on this page ',
        desc:'Dive into a world where curiosity meets creativity. ThoughtsUnleashed is your go-to destination for diverse and engaging content, covering everything from lifestyle and travel to tech insights and personal growth. Our team of passionate writers and enthusiasts bring you thoughtful articles, inspiring stories, and practical tips to enrich your everyday life. Whether youre looking for a dose of daily inspiration, insightful advice, or just a good read, youll find it all here. Join our community and explore the myriad of topics that ignite our passion and curiosity!t ',
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