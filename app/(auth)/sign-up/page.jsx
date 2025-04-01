"use client";
import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';

const SignUp = () => { // Corrected to SignUp
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setsuccessMessage] = useState("")
  const router = useRouter();
  const handleSignUp = async (e) => { // added event parameter e.
    e.preventDefault(); // added preventDefault to stop page reload on submit
    setErrorMessage('');
    setsuccessMessage('')
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      if(res.user){
        sessionStorage.setItem('user', true);
        setemail('');
        setpassword('');
        setsuccessMessage('Registration successful!');
      
      }

    } catch (e) {
      console.error(e);
      setErrorMessage(e.message); //added error message to state
    }


    
  

  };
  const signIn = () => {
    

    router.push('/sign-in');
  };

  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className='px-10 md:w-1/2'>
          <h1 className='font-bold text-2xl text-purple-600'>Sign Up</h1>
          <p className='text-sm mt-4'>pls easily signup</p>
          <form className='flex flex-col gap-4' onSubmit={handleSignUp}>
            <input
              type="email"
              placeholder="email"
              className='p-2 mt-8 rounded-xl border'
              onChange={(e) => setemail(e.target.value)}
            />
            <div className='relative '>
              <input
                className='p-2 rounded-xl border w-full'
                type="password"
                placeholder="password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <button
              className='bg-purple-600 rounded-xl text-white py-2 hover:scale-105 duration-300'
              type="submit"
              disabled={loading}
            >
              {loading ? 'registering...' : 'Sign up'}
            </button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          </form>
          <div className='mt-10 grid-cols-3 items-center text-gray-500'>
            <hr className='border-gray-500' />
            <p className='text-center text-sm'>OR</p>
            <hr className='border-gray-500' />
          </div>
          <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300'>
            <box-icon className='mr-3 bx-md' type='logo' name='google-plus'></box-icon> Login with google
          </button>
          <p className='mt-5 text-sm border-b border-gray-400 py-4'>Forgot Password ?</p>
          <div className='mt-3 text-sm flex justify-center items-center'>
            <p>Have an Account ?</p>
            <button onClick={signIn} className='py-2 px-5 text-purple-900 bg-white border rounded-xl hover:scale-110 duration-300'>Sign In</button>
          </div>
        </div>
        <div className='w-1/2 md:block hidden'>
          <img className='rounded-2xl' src="kaka.jpg" alt="yo" />
        </div>
      </div>
    </section>
  );
};

export default SignUp; 