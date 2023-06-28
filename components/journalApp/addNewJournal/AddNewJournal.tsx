import {FC} from 'react';
import { FormJournalContent } from './FormJournalContent';
import { ImageGallery } from './ImageGallery';

interface Props {
    viewJournalItems: boolean;
}

export const AddNewJournal:FC<Props> = ({viewJournalItems}):JSX.Element => {
  return (
    <div className={viewJournalItems ? 'addnewjournal animationContrainAddNewJournal' : 'addnewjournal animationExpandAddNewJournal'}>
        <div className='addnewjournal_container'>
            <div className='addnewjournal_container-date-save'>
                <div className='addnewjournal_date'>28 de junio, 2023</div>
                <div className='addnewjournal_container-save'>
                    <svg className='addnewjournal_icon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M840-683v503q0 24-18 42t-42 18H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h503l157 157Zm-60 27L656-780H180v600h600v-476ZM479.765-245Q523-245 553.5-275.265q30.5-30.264 30.5-73.5Q584-392 553.735-422.5q-30.264-30.5-73.5-30.5Q437-453 406.5-422.735q-30.5 30.264-30.5 73.5Q376-306 406.265-275.5q30.264 30.5 73.5 30.5ZM233-584h358v-143H233v143Zm-53-72v476-600 124Z"/></svg>
                    <div className='addnewjournal_save'>GUARDAR</div>
                </div>
            </div>

            <FormJournalContent />

            <ImageGallery />
        </div>
    </div>
  )
}
