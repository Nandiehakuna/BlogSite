import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer>
    <ul className='footer-categories'>
      <li><Link to="posts/categories/:id">categories</Link></li>
      <li><Link to="posts/categories/:id">categories</Link></li>
      <li><Link to="posts/categories/:id">categories</Link></li>
      <li><Link to="posts/categories/:id">categories</Link></li>
      <li><Link to="posts/categories/:id">categories</Link></li>
      <li><Link to="posts/categories/:id">categories</Link></li>
      <li><Link to="posts/categories/:id">categories</Link></li>
      <li><Link to="posts/categories/:id">categories</Link></li>
      <li><Link to="posts/categories/:id">categories</Link></li>
      <li><Link to="posts/categories/:id">categories</Link></li>
      <li><Link to="posts/categories/:id">categories</Link></li>
</ul>
 <div className='footer-copyright'>
  <small> All rights reserved &copy; copyright, MernTutorial</small>
 </div>
   </footer>

  )
}

export default Footer