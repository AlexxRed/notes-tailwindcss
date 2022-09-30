import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <button type="button" onClick={onClick} className='ml-5 hover:bg-red-700 rounded'>
    <DeleteForeverIcon fontSize="large" color="primary"  />
  </button>
);

export default DeleteButton;
