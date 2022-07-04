import { ThemeSwitcherBox } from './styles';
import { FiMoon } from 'react-icons/fi';
import { useAppDispatch } from '../../../State/store';
import { switchTheme } from '../../../State/action-creators';

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const dispatch = useAppDispatch()

  const handleSwitchTheme = () => {
    dispatch(switchTheme());
  };

  return (
    <ThemeSwitcherBox onClick={handleSwitchTheme}>
      <FiMoon />
    </ThemeSwitcherBox>
  );
};

export default ThemeSwitcher;
