import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const toggleSignIn = () => {
    setIsSignInFrom(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='bg_img'
        />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-90 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full rounded-md bg-gray-700'
          />
        )}
        <input
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full rounded-md bg-gray-700'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full rounded-md bg-gray-700'
        />
        <button className='p-4 my-6 bg-red-600 rounded-sm w-full font-bold'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p onClick={toggleSignIn} className='py-4 cursor-pointer'>
          {isSignInForm
            ? 'New to Netflix? Sign Up Now'
            : 'Already registered? Sign In Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
