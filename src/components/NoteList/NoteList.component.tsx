import { INote } from '../../services/types/note.types';
import { NoteItem } from '../NoteItem/NoteItem.component';


export const NoteList = ({data}: {data: INote[]}) => (
  <>
    <ul className='list-none w-1/2 grid grid-cols-1 ml-auto mr-auto'>
      {data.map((note: INote) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </ul>
  </>
);
