import { refs } from '../../services/consts/refs';
import { ButtonCreate, Text } from './CreateButton.styled';


export const CreateButton = ({name}:{name:string}) => (
  <ButtonCreate to={refs.createNote} >
    <Text >{name}</Text>
  </ButtonCreate>
);


