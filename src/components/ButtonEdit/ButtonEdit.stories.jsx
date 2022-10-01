import { EditButton } from './ButtonEdit.component';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Edit Button',
  component: EditButton,
decorators: [withRouter],
//   argTypes: { onClick: { action: 'clicked' } },
}
// export const EditNotesButton = ({onClick}) => (
//   <EditButton onClick={onClick}>
//     Edit Note
//   </EditButton>
// );

// const Template = (args) => <EditButton {...args} />;
