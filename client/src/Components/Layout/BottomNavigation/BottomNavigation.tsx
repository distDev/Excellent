import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledBottomNavigation } from '../../StyledComponents/BottomNavigation';
import { bottomNagigationLinks } from './bottomNagigationLinks';

type Props = {};



export const BottomNavigation = (props: Props) => {



  return (
    <StyledBottomNavigation>
      {bottomNagigationLinks.map(({ path, icon }) => (
        <NavLink
          className={({ isActive }) => isActive ? 'active-link' : ''}
          to={path}
        >
          {icon}
        </NavLink>
      ))}
    </StyledBottomNavigation>
  );
};
