import React from 'react'
import { Link } from 'react-router-dom'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../Assets/logo.jpg"

const Header = () => {
  return (
    <nav>
        <div className="container nav_container">
          <Link to="/" className='nav_logo'>
          <img src={Logo} alt="nav logo" className='nav-logo-img'  />
          </Link>
          
           <ul>
       <li><Link to="/Author">Authors </Link></li>
       <li><Link to="/profile">Kelly Gakii </Link></li>
       <li><Link to="/create">create profile </Link></li>
       <li><Link to="/logout">logout </Link></li>
</ul>
<button className='btn nav-btn'>
<DensityMediumIcon/>
<CloseIcon/>

</button>

    

  </div>
    </nav>
  

  )
}

export default Header