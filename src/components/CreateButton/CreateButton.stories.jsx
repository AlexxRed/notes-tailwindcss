import { CreateButton } from './CreateButton.component';

export default {
 title: 'Create Button',
 component: CreateButton,
}
export const CreateNotesButton = () => (
  <CreateButton name={'Create new Note'}>
    Create new Note
  </CreateButton>
);

const Template = (args) => <CreateButton {...args} />;

export const Default = Template.bind({});
