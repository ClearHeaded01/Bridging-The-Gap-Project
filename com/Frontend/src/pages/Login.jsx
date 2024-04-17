import React, { useState } from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';
const Login = () => {
  const [formData, setFormData] =useState({});
  const { loading, error } = useSelector((state) => state.user);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json();
    if (data.success === false) {
      dispatch(signInFailure(data.message));
      return;
    }
    dispatch(signInSuccess(data));
    Navigate(`/dashboard`);
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }
  return (
    <div className='min-h-screen py-24 sm:py-32 bg-gray-900'>
      <div className=' mx-auto max-w-xl p-3'>
      <h1 className='px-3 text-3xl text-center py-3  m-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg '>Login</h1>
        <div className='flex-1 items-center'>
          <form className='flex flex-col gap-4' action="" onSubmit={handleSubmit}>
           
            <div >
              <Label className='text-white' value='Email'/>
              <TextInput type='email' placeholder='email' id='email' onChange={handleChange}/>
            </div>
            <div >
              <Label className='text-white' value='Password'/>
              <TextInput type='password' placeholder='password' id='password' onChange={handleChange}/>
            </div>
            <Button className=' max-w-xs ml-auto mr-auto' gradientDuoTone="purpleToBlue" outline type='submit' disabled={loading}>{
              loading ? (
                <>
                <Spinner size="sm"/>
                  <span className='pl-3'>Loading...</span>
                
                </>
              ) : 'Login'
            }
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5 '>
            <span className='text-white'>Don't Have an account?</span>
            <Link to={'/register'} className='text-blue-500'>Register</Link>
          </div>
          {error && <Alert className='mt-5' color="failure">{error}</Alert>}
        </div>
      </div>
    </div>
  )
}

export default Login