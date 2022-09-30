import { useDispatch, useSelector } from 'react-redux';
import { INote } from '../../services/types/note.types';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TaskIcon from '@mui/icons-material/Task';
import DeleteButton from '../ButtonDelete/ButtonDelete.component';
import EditButton from '../ButtonEdit/ButtonEdit.component';
import ButtonArchive from '../ButtonArchive/ButtonArchive.component';
import  ButtonUnarchive  from '../ButtonUnarchive/ButtonUnarchive.component';
import { getArchiveList } from '../../redux/notesSlice';
import { removeNote, addToArcchive, unarchiveNote, setActiveNote } from '../../redux/notesSlice';


export const NoteItem = ({ note }: { note: INote }) => {
    const notesArchive = useSelector(getArchiveList)
    const dispatch = useDispatch();


    const deleteNote = (id: string) => {
        dispatch(removeNote(id))
    };

    const pushToArchive = (note: INote) => {
        dispatch(addToArcchive(note))
    }

    const unArchiveNote = (note: INote) => {
        dispatch(unarchiveNote(note))
    }

    const setActive = (note: INote) => {
        console.log(note)
        dispatch(setActiveNote(note))
    }

    const isArchive = notesArchive.find((item: INote) => item.id === note.id)

    return (
        <li className='p-5 shadow-xl shadow-gray-600'>
            <div className='flex flex-row justify-between mb-5'>
                <div className='flex justify-center items-center'>
                    {note.category === 'Idea' && <EmojiObjectsIcon color='secondary' className='mr-5' />}
                    {note.category === 'Task' && <TaskIcon color='secondary' className='mr-5' />}
                    {note.category === 'Random Thought' && <PsychologyIcon color='secondary' className='mr-5'/>}
                    <p className='text-xl'>{note.name}</p>
                </div>
                <p className='text-lg'>{note.created}</p>
            
                <div className='flex justify-end'>
                    {isArchive && <ButtonUnarchive onClick={() => unArchiveNote(note)} />}
                    {!isArchive && (
                        <>
                            <EditButton onClick={()=> setActive(note)} />
                            <ButtonArchive onClick={() => pushToArchive(note)}/>    
                            <DeleteButton onClick={() => deleteNote(note.id!)} />
                        </>)}
                </div>

            </div>
            <div className='text-lg mb-5'>{note.content}</div>
            <div className='text-lg mb-5'>{note.category}</div>
            <div className='text-lg mb-5'>{note.dates && `${note.dates}`}</div>
        </li>
    );
};