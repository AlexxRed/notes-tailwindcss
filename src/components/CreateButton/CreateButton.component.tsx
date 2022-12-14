import { refs } from '../../services/consts/refs';
import { Link } from 'react-router-dom';


export const CreateButton = () => (
  <Link to={refs.createNote} className='flex mr-auto ml-auto text-center w-60 bg-white rounded p-5 hover:bg-blue-700'>
    <p className='flex ml-auto mr-auto'>Create new Note</p>
  </Link>
);
