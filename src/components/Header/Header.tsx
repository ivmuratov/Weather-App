import { FC } from 'react';

import { Content, HeaderStyled } from './Header.styled';

import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';

import { lightTheme } from '../../styles/theme';
import IDropdownItem from '../../types/IDropdownItem';
import Container from '../UI/Container/Container';
import Dropdown from '../UI/Dropdown/Dropdown';

import Icon from '../UI/Icon/Icon';
import Toggle from '../UI/Toggle/Toggle';

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

  const { toggleOnDark, selectCity } = useActions();

  return (
    <HeaderStyled>
      <Container>
        <Content>
          <Dropdown header={<Icon name='location' />} label={city.label} select={selectCity} items={items} />
          <Toggle
            onClick={() => toggleOnDark(theme === lightTheme && true)}
            placeholder={<Icon name='moon' margin='0 5px 0 0' />}
            placeholderSize='24px'
          />
        </Content>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
