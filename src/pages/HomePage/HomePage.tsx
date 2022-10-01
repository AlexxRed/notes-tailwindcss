import { useSelector } from 'react-redux';

import { getNotesList} from '../../redux/notesSlice';
import { NoteList } from '../../components/NoteList/NoteList.component';
import { CreateButton } from '../../components/CreateButton/CreateButton.component';



function HomePage() {
    const notesList = useSelector(getNotesList);
    

    return (
        <div className=' flex-row h-screen bg-no-repeat m-0 pt-5'>
            <h1 className='flex ml-auto mr-auto mt-auto justify-center items-center text-6xl text-gray-600 w-full mb-5'>Notes</h1>
            <CreateButton name={'Create new Note'} />
            <NoteList data={notesList}/>
        </div>
    )
};

export default HomePage;