import { useSelector } from 'react-redux';
import { getArchiveList } from '../../redux/notesSlice';
import { NoteList } from '../../components/NoteList/NoteList.component';

function ArchivePage() {
    const notesArchive = useSelector(getArchiveList)
    return (
        <div className=' flex-row h-screen bg-no-repeat m-0 pt-5'>
            <p className='flex ml-auto mr-auto mt-auto mb-5 justify-center items-center text-6xl text-gray-600 w-full'>Archive</p>
            <NoteList data={notesArchive} />
        </div>
        
    )
};

export default ArchivePage;