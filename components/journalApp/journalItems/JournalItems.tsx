import {FC} from 'react';

const journalList = [
    {
        mes: 'Enero',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elitc'
    },
    {
        mes: 'Febrero',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elitd'
    },
    {
        mes: 'Marzo',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elitn'
    },
    {
        mes: 'Abril',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elitg'
    },
    {
        mes: 'Junio',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elitl'
    },
    {
        mes: 'Julio',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing eliti'
    },
    {
        mes: 'Agosto',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elite'
    },
    {
        mes: 'Septiembre',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elitt'
    },
    {
        mes: 'Octubre',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...'
    },
    {
        mes: 'Noviembre',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit..'
    },
    {
        mes: 'Diciembre',
        journal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
]

interface Props {
    viewJournalItems: boolean;
}

export const JournalItems:FC<Props> = ({ viewJournalItems }):JSX.Element => {
  return (
    <div className={ viewJournalItems ? 'journal-items journal-items_animation' : 'journal-items journal-items_animation-hide'}>
        <div className='journal-items_container'>
            <div className='journal-items_name'>Peter Aspiazu</div>
            {
                journalList.map(({journal, mes}) => (
                    <div className='journal-items_journal' key={journal}>
                        <svg className='journal-items_icon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240 200-120Zm60-91 220-93 220 93v-574H260v574Zm0-574h440-440Z"/></svg>
                        
                        <div className='journal-items_text'>
                            <div className='journal-items_mes'>{mes}</div>
                            <div className='journal-items_desc'>{journal}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
