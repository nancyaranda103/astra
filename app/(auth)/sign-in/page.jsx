'use client';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';
import 'boxicons'


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');





  
  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error messages
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res.user) {
        console.log({ res });
        document.cookie = "user=true; path=/"; // Stores user session in a cookie
        setEmail('');
        setPassword('');
        router.push('/dashboard');
      }
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message); // Display error message
    }


    
  
    
  };
  

  const handleClick = () => {
    router.push('/sign-up');
  };

  
  return (


    <section className='bg-gray-50 min-h-screen flex items-center
    justify-center  '>
    <div className=" bg-gray-100 flex rounded-2xl shadow-lg 
    max-w-3xl p-5 items-center">`
      
      <div className='px-10  md:w-1/2  '>

        <h1 className='font-bold text-2xl text-purple-600 '>Sign In</h1>
      
      
        <p className='text-sm mt-4'>if you are already a member, easily login. </p>


        <form className='flex flex-col gap-4  '
       onSubmit={handleSignIn}>
      
        <input
          type="email"
          placeholder="email"
          className='p-2 mt-8 rounded-xl border'
          onChange={(e) => setEmail(e.target.value)}

        />
        <div className='relative '>
        <input
        className='p-2 rounded-xl border w-full '
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        /> </div>
<button  
className='bg-purple-600 rounded-xl text-white py-2 hover:scale-105 duration-300'
  type="submit" disabled={loading}>
  {loading ? 'Logging in...' : 'login'}
</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>

     
      <div className='mt-10 grid-cols-3 items-center text-gray-500  '> 
<hr className='border-gray-500 '/>
    


<p className='text-center text-sm' >OR</p>
<hr className='border-gray-500' />
</div>

<button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center  hover:scale-105 duration-300'> <box-icon className='mr-3 bx-md '   type='logo' name='google-plus'></box-icon>    Login with google</button>
<p className='mt-5  text-sm border-b border-gray-400 py-4 '  > Forgot Password ?</p>
    <div className='mt-3 text-sm flex justify-center items-center '>
      <p>Don't have an account ?</p>
<button onClick={handleClick} className='py-2 px-5 text-purple-900 bg-white border rounded-xl hover:scale-110 duration-300 '>Register</button>
      </div>

      </div>

  
 

<div className='w-1/2 md:block hidden  '>
<img className='rounded-2xl' src="kaka.jpg" alt="the picture of the company"/>

</div>




    </div>
    </section>  
  );
};

export default SignIn;