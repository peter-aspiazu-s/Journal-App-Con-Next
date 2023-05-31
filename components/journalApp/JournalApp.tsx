import axios from 'axios';
import { useRouter } from 'next/router';
import {FC} from 'react';

const JournalApp:FC = ():JSX.Element => {

  const router = useRouter();

  const handleLogout = async() => {

    try {
      const response = await axios.get('/api/logout')

      if(response.status === 200){
        console.log('Logged out successfully');
        router.push('/login');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }

  }

  return (
    <div>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}


export default JournalApp;