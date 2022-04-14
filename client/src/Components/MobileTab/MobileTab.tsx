import { FC } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Text } from '../StyledComponents/Text';
import {
  StyledMobileTabIcon,
  Styles,
} from '../StyledComponents/MobileTab';
import { Title } from '../StyledComponents/Title';
import { Box } from '../StyledComponents/Box';
import { SmallCardContainer } from '../StyledComponents/SmallCardContainer';

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
    <SmallCardContainer
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
    >
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
    </SmallCardContainer>
  );
};

export default MobileTab;
