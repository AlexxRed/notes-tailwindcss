import ArchiveIcon from '@mui/icons-material/Archive';


const ButtonArchive = ({ onClick }: { onClick: () => void }) => (
  <button type="button" onClick={onClick} className='ml-5 hover:bg-red-700 rounded' >
    <ArchiveIcon fontSize="large" color="primary" />
  </button>
);

export default ButtonArchive;