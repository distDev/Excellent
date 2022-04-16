import { FC } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Text } from '../StyledComponents/Text';
import {
  StyledMobileTab,
  StyledMobileTabIcon,
  Styles,
} from '../StyledComponents/MobileTab';
import { Title } from '../StyledComponents/Title';
import { Box } from '../StyledComponents/Box';

type Props = {
  title: string;
  subtitle?: string;
  icon: any;
  path?: string;
};

const MobileTab: FC<Props & Styles> = ({
  icon,
  title,
  subtitle,
  path,
  alignItems,
  flexDirection,
  justifyContent,
}) => {
  return (
    <StyledMobileTab>
      <Box display='flex' gap='15px'>
        <StyledMobileTabIcon>{icon}</StyledMobileTabIcon>
        <Box
          display='flex'
          flexDirection={flexDirection}
          justifyContent={justifyContent}
          alignItems={alignItems}
        >
          <Title>{title}</Title>
          <Text color='grey'>{subtitle}</Text>
        </Box>
      </Box>
      {/* Если есть ссылка, то рендерится стрелка и ссылка */}
      {path ? (
        <>
          <RiArrowRightSLine />
          <Link to={path}></Link>
        </>
      ) : null}
    </StyledMobileTab>
  );
};

export default MobileTab;
