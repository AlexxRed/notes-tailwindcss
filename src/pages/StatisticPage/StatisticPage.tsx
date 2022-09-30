import { useSelector } from 'react-redux';
import { StatisticList } from '../../components/StatisticList/StatisticList.component';
import { getNotesList, getArchiveList } from '../../redux/notesSlice';
import { INote } from '../../services/types/note.types';
import { IStatistic } from '../../services/types/statistic.type';



function StatisticPage() {
    const notesList = useSelector(getNotesList);
    const archiveList = useSelector(getArchiveList);

        const totalIdeas = notesList.filter((item: INote) => item.category === "Idea").length
    const totalArciveIdeas = archiveList.filter((item: INote) => item.category === "Idea").length

    const totalTasks = notesList.filter((item: INote) => item.category === "Task").length
    const totalArciveTasks = archiveList.filter((item: INote) => item.category === "Task").length

    const totalThought = notesList.filter((item: INote)=> item.category === "Random Thought").length
    const totalArciveThought = archiveList.filter((item: INote) => item.category === "Random Thought").length    
    
    const statistic : IStatistic[] = [
        {
            category: 'Idea',
            active: totalIdeas,
            archived: totalArciveIdeas
        },
        {
            category: 'Task',
            active: totalTasks,
            archived: totalArciveTasks
        },
        {
            category: 'Random Thought',
            active: totalThought,
            archived: totalArciveThought
        }
    ];

    return (
        <div className=' flex-row h-screen bg-no-repeat m-0 pt-5'>
            <h1 className='flex ml-auto mr-auto mt-auto mb-5 justify-center items-center text-6xl text-gray-600 w-full'>Statistic</h1>
            <StatisticList data={statistic}/>
        </div>
        
    )
};

export default StatisticPage;