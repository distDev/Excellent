import { ThemeSwitcherBox } from './styles';
import { FiMoon } from 'react-icons/fi';

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const handleSwitchTheme = () => {};

  return (
    <ThemeSwitcherBox onClick={handleSwitchTheme}>
      <FiMoon />
    </ThemeSwitcherBox>
  );
};

export default ThemeSwitcher;
