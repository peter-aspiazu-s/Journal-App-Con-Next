import { FC } from 'react';

interface Props {
    handleLogout: () => void;
    handleClickViewJournalItems: () => void;
}

export const Header:FC<Props> = ({ handleLogout, handleClickViewJournalItems }):JSX.Element => {
  return (
    <div className='header'>
        <div className='header_container'>
            <div className='header_menu-icon' onClick={handleClickViewJournalItems}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="48" 
                    viewBox="0 -960 960 960" 
                    width="48"
                    className='header-icon'
                >
                    <path 
                        d="M149.825-280Q137-280 128.5-288.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137-450 128.5-458.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137-620 128.5-628.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM290-280v-60h550v60H290Zm0-170v-60h550v60H290Zm0-170v-60h550v60H290Z"/>
                </svg>
            </div>

            <div className='header_title'>
                JournalApp
            </div>

            <div className='header_logout' onClick={handleLogout}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="48" 
                    viewBox="0 -960 960 960" 
                    width="48"
                    className='header-icon'
                >
                    <path 
                        d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z"/>
                </svg>
            </div>
        </div>
    </div>
  )
}
