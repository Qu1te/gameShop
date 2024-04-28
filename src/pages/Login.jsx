import React from 'react'
import '../styles/Login.css'
const Login = () => {
  return (
	 <div className='Login'>
		<div className='LoginConteiner'>
			<div className='SignInText'>
				<h1>Sign Up</h1>
			</div>
			<form action="">
				<input type="email" name="" id="" placeholder='Email'/>
				<input type="password" name="" id="" placeholder='Password' />
			</form>
			<div className='LoginBtn'>
				<a href="/register">Sign Up</a>
				<a href="/" id='SigninBtn'>Sign In</a>
			</div>
		</div>
	 </div>
  )
}

export default Login
