import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMAGE, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const toggleSignIn = () => {
    setIsSignInFrom(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate the form data
    const msg = checkValidData(email.current.value, password.current.value);
    setErrMsg(msg);
    if (msg) return;
    //sign In /sign Up Logic
    if (!isSignInForm) {
      //sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMsg(errorCode + '-' + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMsg(errorCode + '-' + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src={BG_IMAGE}
          alt='bg_img'
          className='h-screen object-cover w-screen'
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-3/4 md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-90 rounded-lg'
      >
        <h1 className='text-2xl md:font-bold text-3xl py-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full rounded-md bg-gray-700'
          />
        )}
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full rounded-md bg-gray-700'
        />

        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full rounded-md bg-gray-700'
        />
        <p className='text-red-500'>{errMsg}</p>
        <button
          className='p-4 my-6 bg-red-600 rounded-sm w-full font-bold'
          onClick={handleButtonClick}
        >
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
