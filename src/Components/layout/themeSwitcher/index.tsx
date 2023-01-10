import { FiMoon, FiSun } from 'react-icons/fi';
import styled from 'styled-components/macro';
import { useAppDispatch } from '../../../Hooks/useAppDispatch';
import { useAppSelector } from '../../../Hooks/useAppSelector';
import { switchTheme } from '../../../Store/slices/theme-slice';

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const dispatch = useAppDispatch();
  const activetheme = useAppSelector((state) => state.theme.mode);

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

const ThemeSwitcherBox = styled.header`
  height: 30px;
  width: 30px;
  cursor: pointer;
  svg {
    height: 27px;
    width: 27px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;
