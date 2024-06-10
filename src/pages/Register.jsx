import React, { useEffect } from 'react'

const Register = () => {

  const [userData, setUserData]= useEffect([
    {
      name:'',
      email:'',
      password:'',
      paswword2:''

    }
  ])

  return (
    <section className='register'>
      <form action="post" className='register-container '>
        <input type="text" name='name' value={userData.name} onChange={handleOnChange} placeholder='enter name ' />

      </form>

    </section>

  )
}

export default Register