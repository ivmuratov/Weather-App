import { FC } from 'react';

import { HeaderContent, StyledHeader } from './Header.styled';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { citySlice } from '../../store/reducers/citySlice';
import { themeSlice } from '../../store/reducers/themeSlice';
import { Container } from '../../styles/global';
import { lightTheme } from '../../styles/theme';
import Dropdown from '../UI/Dropdown';
import ToggleSwitch from '../UI/ToggleSwitch';

const items: string[] = ['Novosibirsk', 'Moscow'];

const Header: FC = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);

  const { name } = useAppSelector((state) => state.cityReducer);

  const { toggleOnDark } = themeSlice.actions;

  const { selectCity } = citySlice.actions;

  const dispatch = useAppDispatch();

  const select = (item: string) => {
    dispatch(selectCity(item));
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Dropdown label={'Город: '} value={name} select={select} items={items} />
          <ToggleSwitch onClick={() => dispatch(theme === lightTheme ? toggleOnDark(true) : toggleOnDark(false))} />
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
