import { withRouter } from 'storybook-addon-react-router-v6';
import { NoteItem } from './NoteItem.component'

export default {
    title: 'Notes Item',
    component: NoteItem,
    decorators: [withRouter],
}

// const Template = (args)=> <NoteItem {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//         note: {
//             id: 1,
//             category: 'Task',
//             name: 'Do something',
//             created: '11/12/2022',
//             content: 'Any task ',
//             dates: '11/12/2022 02/02/2022'
//         },
// };