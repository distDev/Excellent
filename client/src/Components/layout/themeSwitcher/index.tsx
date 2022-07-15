import { ThemeSwitcherBox } from './styles';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '../../../State/store';
import { switchTheme } from '../../../State/action-creators';

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const dispatch = useAppDispatch();
  const activetheme = useAppSelector((state) => state.theme);

  const handleSwitchTheme = () => {
    dispatch(switchTheme());
  };

  return (
    <ThemeSwitcherBox onClick={handleSwitchTheme}>
      {activetheme === 'dark' ? <FiSun /> : <FiMoon />}
    </ThemeSwitcherBox>
  );
};

export default ThemeSwitcher;
