import {FC} from 'react';

export const FormJournalContent:FC = ():JSX.Element => {
  return (
    <div className='formjournalcontent'>
      <form className='formjournalcontent_form'>
        <input className='formjournalcontent_input-title' type="text" placeholder='Título' />
        <textarea className='formjournalcontent_input-description' placeholder='¿Qué sucedio el día de hoy?' />
      </form>
    </div>
  )
}
