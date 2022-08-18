import { FC } from 'react';

import { StyledHeader } from './Header.styled';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { themeSlice } from '../../store/reducers/themeSlice';
import { Container } from '../../styles/global';
import { lightTheme } from '../../styles/theme';

const Header: FC = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);

  const { toggleOnDark } = themeSlice.actions;

  const dispatch = useAppDispatch();

  return (
    <Container>
      <StyledHeader>
        <button onClick={() => dispatch(theme === lightTheme ? toggleOnDark(true) : toggleOnDark(false))}>
          Toggle
        </button>
      </StyledHeader>
    </Container>
  );
};

export default Header;
