/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, NavLink } from 'react-router-dom';
import { refs } from "../../services/consts/refs";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ArchiveIcon from '@mui/icons-material/Archive';
import AnalyticsIcon from '@mui/icons-material/Analytics';


import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import red from '@mui/material/colors/red';

const theme = createTheme({
  palette: {
        primary: blue,
        secondary: red,
    },
    
});




export function AppBar() {
    return (
        <header className='block min-h-80 bg-gray-600 shadow-lg'>
            <nav className='flex align-center justify-between'>
                <div className='flex justify-center'>
                    <NavLink className='p-3' to={refs.home}><NoteAltIcon fontSize="large" color="primary" className='hover:fill-white'></NoteAltIcon></NavLink>
                </div>
                <div className='flex justify-center'>
                    <Link className='p-3' to={refs.archive}><ArchiveIcon fontSize="large" color="primary" className='hover:fill-white'></ArchiveIcon></Link>
                    <Link className='p-3' to={refs.staistic}><AnalyticsIcon fontSize="large" color="primary" className='hover:fill-white'></AnalyticsIcon></Link>
                </div>
            </nav>
        </header>
        
    )
};