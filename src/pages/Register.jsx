import React, {  useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

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
    <section className='register'>
      <h2>sign up</h2>
      <form action="post" className='register-container '>
        <h1>error occurred during sign up</h1>
        <input type="text" name='name' value={userData.name} onChange={inputChangeHandler} placeholder='Full Name  ' />
        <input type="email" name='email' value={userData.email} onChange={inputChangeHandler} placeholder='email ' />
        <input type="password" name='password' value={userData.password} onChange={inputChangeHandler } placeholder='password ' />
        <input type="password" name='password2' value={userData.paswword2} onChange={inputChangeHandler } placeholder='comfirm password  ' />
       <button type='submit ' className='btn-primary'>register</button>
       <small>Already have an account ? <Link to='/login'>sign in </Link></small>


      </form>

    </section>

  )
}

export default Register