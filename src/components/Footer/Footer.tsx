import { FC } from 'react';

import { Content, FooterStyled } from './Footer.styled';

import Container from '../UI/Container/Container';
import Link from '../UI/Link/Link';

const Footer: FC = () => {
  return (
    <FooterStyled>
      <Container>
        <Content>
          <p>Данные предоставлены:</p>
          <Link href='https://www.weatherbit.io/api' target='_blank' rel='noopener noreferrer' margin='0 7px 0 0'>
            weatherbit.io
          </Link>
          <Link href='https://openweathermap.org/api' target='_blank' rel='noopener noreferrer'>
            openweathermap.org
          </Link>
        </Content>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
