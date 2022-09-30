import { IStatistic } from '../../services/types/statistic.type';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TaskIcon from '@mui/icons-material/Task';

export const StatisticItem = ({ item }: { item: IStatistic }) => {


    return (
        <li className='p-5 m-8 shadow-xl shadow-gray-600'>
            <div className='flex flex-row justify-between mb-5'>
                <div className='flex justify-center items-center'>
                    {item.category === 'Idea' && <EmojiObjectsIcon color='secondary' className='mr-5' />}
                    {item.category === 'Task' && <TaskIcon color='secondary' className='mr-5' />}
                    {item.category === 'Random Thought' && <PsychologyIcon color='secondary' className='mr-5'/>}
                    <p className=' text-2xl'>{item.category}</p>
                </div>

            </div>
            <p className=' text-xl'>ACTIVE: {item.active}</p>
            <p className=' text-xl'>ARCHIVED: {item.archived}</p>
        </li>
    );
};