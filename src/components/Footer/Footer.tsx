import { FC } from 'react';

import { FooterContent, StyledFooter } from './Footer.styled';

import { Container } from '../UI/Container';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <p>Данные предоставлены:</p>
          <a href='https://www.weatherbit.io/api' target='_blank' rel='noopener noreferrer'>
            weatherbit.io
          </a>
          <a href='https://openweathermap.org/api' target='_blank' rel='noopener noreferrer'>
            openweathermap.org
          </a>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
