import { IStatistic } from '../../services/types/statistic.type';
import { StatisticItem } from '../StatisticItem/StatisticItem.component';

export const StatisticList = ({data}: {data: IStatistic[] | any}) => (
    <>
        <ul className='list-none w-1/2 grid grid-cols-1 ml-auto mr-auto'>
        {data.map((item: IStatistic) => (
            <StatisticItem item={item} key={item.category} />
        ))}
        </ul>
    </>
);
