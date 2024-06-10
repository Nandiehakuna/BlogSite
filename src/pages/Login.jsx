import React, {  useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [userData, setUserData]= useState([
    {
      name:'',
      email:'',
      password:'',
      paswword2:''

    }
  ])

 const inputChangeHandler = (e)=>{
  setUserData(prevstate =>{
   return  {...prevstate, [e.target.name]:e.target.value}
  })

 }

  return (
    <section className='login'>
      <h2>sign in</h2>
      <form action="post" className='login-container '>
        <h1>error occurred during sign up</h1>
        
        <input type="email" name='email' value={userData.email} onChange={inputChangeHandler} placeholder='email ' />
        <input type="password" name='password' value={userData.password} onChange={inputChangeHandler } placeholder='password ' />
       
       <button type='submit ' className='btn-primary'>register</button>
       <small>Dont have an account  ? <Link to='/login'>sign up </Link></small>


      </form>

    </section>

  )
}

export default Login