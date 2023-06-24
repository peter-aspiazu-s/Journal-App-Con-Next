import axios from 'axios';
import { useRouter } from 'next/router';
import {FC, useState} from 'react';
import { Header } from './header/Header';
import { Loading } from '../loading/Loading';
import { JournalItems } from './journalItems/JournalItems';

const JournalApp:FC = ():JSX.Element => {

  const [loadingLogout, setLoadingLogout] = useState(false);
  const [viewJournalItems, setViewJournalItems] = useState(false);

  const router = useRouter();

  const handleLogout = async() => {

    setLoadingLogout(true);

    try {
      const response = await axios.get('/api/logout')
      if(response.status === 200){
        console.log('Logged out successfully');
        router.push('/login');
      }

      setLoadingLogout(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
    
  }
  
  if(loadingLogout){
    return (
      <div className='journal_loading'>
        <Loading />
      </div>
    )
  }

  const handleClickViewJournalItems = () => {
    setViewJournalItems(!viewJournalItems)
  }

  return (
    <div>
      <Header handleLogout={handleLogout} handleClickViewJournalItems={handleClickViewJournalItems} />

      <JournalItems viewJournalItems={viewJournalItems} />
    </div>
  )
}


export default JournalApp;