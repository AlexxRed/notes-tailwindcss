import { CreateButton } from './CreateButton.component';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Create Button',
  component: CreateButton,
  decorators: [withRouter],
}
export const CreateNotesButton = () => (
  <CreateButton name={'Create new Note'}>
    Create new Note
  </CreateButton>
);

const Template = (args) => <CreateButton {...args} />;

export const Default = Template.bind({});
