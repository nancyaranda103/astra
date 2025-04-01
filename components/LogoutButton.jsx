'use client';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Clear the user cookie on the client side
      document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      router.push('/sign-in'); // Redirect to sign-in page
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle logout error (e.g., display an error message)
    }
  };
 
  return <button className='bg-gradient-to-t from-purple-600 to-purple-800 text-white p-2 px-4   rounded-lg' onClick={handleLogout}> Logout</button>;
}

export default LogoutButton;