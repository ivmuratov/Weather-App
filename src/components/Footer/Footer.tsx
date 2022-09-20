import { FC } from 'react';

import { Content, FooterStyled } from './Footer.styled';

import Container from '../UI/Container';

const Footer: FC = () => {
  return (
    <FooterStyled>
      <Container>
        <Content>
          <p>Данные предоставлены:</p>
          <a href='https://www.weatherbit.io/api' target='_blank' rel='noopener noreferrer'>
            weatherbit.io
          </a>
          <a href='https://openweathermap.org/api' target='_blank' rel='noopener noreferrer'>
            openweathermap.org
          </a>
        </Content>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
