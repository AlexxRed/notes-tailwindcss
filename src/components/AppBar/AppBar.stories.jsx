import { AppBar } from './AppBar';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
    title: 'App Bar',
    component: AppBar,
    decorators: [withRouter],
}
export const Header = () => (
    <AppBar >
    </AppBar>
);

// const Template = (args) => <EditButton {...args} />;
