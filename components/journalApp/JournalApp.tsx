import axios from 'axios';
import { useRouter } from 'next/router';
import {FC, useState} from 'react';
import { Header } from './header/Header';
import { Loading } from '../loading/Loading';
import { JournalItems } from './journalItems/JournalItems';
import { NothingSelected } from './nothingSelected/NothingSelected';
import { ButtonAddJournal } from './buttonAddJournal/ButtonAddJournal';
import { AddNewJournal } from './addNewJournal/AddNewJournal';

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
    <div className='journalapp'>
      <Header handleLogout={handleLogout} handleClickViewJournalItems={handleClickViewJournalItems} />

      <div className='journalapp_container'>
        <JournalItems viewJournalItems={viewJournalItems} />

        {/* <NothingSelected viewJournalItems={viewJournalItems} /> */}

        <AddNewJournal viewJournalItems={viewJournalItems} />

        <ButtonAddJournal />
      </div>
    </div>
  )
}


export default JournalApp;