import UnarchiveIcon from '@mui/icons-material/Unarchive';


const ButtonUnarchive = ({ onClick }: { onClick: () => void }) => (
  <button type="button" onClick={onClick} className='ml-5 hover:bg-red-700 rounded'>
    <UnarchiveIcon fontSize="large" color="primary" />
  </button>
);

export default ButtonUnarchive;