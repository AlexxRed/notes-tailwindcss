import { refs } from '../../services/consts/refs';
import { ButtonEdit, ButtonIcon } from './ButtonEdit.styled';

function EditButton({ onClick }: { onClick: () => void }) {
  return (
    <ButtonEdit to={refs.editNote} onClick={onClick}>
      <ButtonIcon />
    </ButtonEdit>
  );
};

export default EditButton;
