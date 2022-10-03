import { FC } from 'react';

import { Content, HeaderStyled } from './Header.styled';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { citySlice } from '../../store/reducers/cityReducer/cityReducer';
import { themeSlice } from '../../store/reducers/themeReducer/themeReducer';

import { lightTheme } from '../../styles/theme';
import IDropdownItem from '../../types/IDropdownItem';
import Container from '../UI/Container';
import Dropdown from '../UI/Dropdown';

import Toggle from '../UI/Toggle';

const items: IDropdownItem[] = [
  { id: 1, label: 'Архангельск', value: 'Arkhangelsk' },
  { id: 2, label: 'Грозный', value: 'Grozny' },
  { id: 3, label: 'Екатеринбург', value: 'Yekaterinburg' },
  { id: 4, label: 'Москва', value: 'Moscow' },
  { id: 5, label: 'Новосибирск', value: 'Novosibirsk' },
  { id: 6, label: 'Омск', value: 'Omsk' },
  { id: 7, label: 'Санкт-Петербург', value: 'Petersburg' },
];

const Header: FC = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);

  const { city } = useAppSelector((state) => state.cityReducer);

  const { toggleOnDark } = themeSlice.actions;

  const { selectCity } = citySlice.actions;

  const dispatch = useAppDispatch();

  const select = (item: IDropdownItem) => {
    dispatch(selectCity(item));
  };

  return (
    <HeaderStyled>
      <Container>
        <Content>
          <Dropdown header={'Город:'} label={city.label} select={select} items={items} />
          <Toggle onClick={() => dispatch(theme === lightTheme ? toggleOnDark(true) : toggleOnDark(false))} />
        </Content>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
