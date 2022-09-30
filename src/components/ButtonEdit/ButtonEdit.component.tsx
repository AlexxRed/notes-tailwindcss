import { refs } from '../../services/consts/refs';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';



const EditButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Link className='cursor-pointer hover:bg-red-700 rounded w-6' to={refs.editNote} onClick={onClick}>
      <EditIcon fontSize="medium" color="primary" />
    </Link>
  );
};

export default EditButton;
