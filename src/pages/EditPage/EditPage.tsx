import { useDispatch, useSelector } from 'react-redux';
import  CreateFormComponent from '../../components/CreateNoteForm/CreateForm.component'
import { INote } from '../../services/types/note.types';
import { editNote, getActive, setActiveNote } from '../../redux/notesSlice';


function EditPage() {
    const dispatch = useDispatch();
    const data = useSelector(getActive)


    const onSave = (values: INote): void => {
        dispatch(editNote(values));
        dispatch(setActiveNote(''));
    }

    return (
        <div className=' flex-row h-screen bg-no-repeat m-0 pt-5 mt-12'>
            <CreateFormComponent data={ data } onSave={ onSave } title='Edit Note' />
        </div>
    )
};

export default EditPage;