import { FC } from 'react';

import { StyledHeader } from './Header.styled';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { themeSlice } from '../../store/reducers/themeSlice';
import { Container } from '../../styles/global';
import { lightTheme } from '../../styles/theme';
import { FlexContainer } from '../UI/FlexContainer';
import ToggleSwitch from '../UI/ToggleSwitch';

const Header: FC = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);

  const { toggleOnDark } = themeSlice.actions;

  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      <Container>
        <FlexContainer justifyContent='flex-end'>
          <ToggleSwitch onClick={() => dispatch(theme === lightTheme ? toggleOnDark(true) : toggleOnDark(false))} />
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
