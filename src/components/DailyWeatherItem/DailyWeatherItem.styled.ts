import styled, { keyframes } from 'styled-components/macro';

export const DailyWeatherItemStyled = styled.li`
  margin: 0 0 15px 0;

  &:last-child {
    margin: 0;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  padding: 10px;
  z-index: 10;
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.card.boxShadow};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 265px;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 45px;
  margin: 0 5px 0 0;
`;

export const MaxMinTemp = styled.div`
  display: flex;
  align-items: baseline;

  span:first-child {
    font-size: 42px;
  }

  span:last-child {
    font-size: 21px;
  }
`;

export const Description = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

const animate = keyframes`
  0% {
    transform: translateY(-85px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const MoreContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px 10px 10px 10px;
  margin: -8px 0 0 0;
  border-radius: 0 0 10px 10px;
  box-shadow: ${({ theme }) => theme.card.boxShadow};
  animation: ${animate} 0.6s linear;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WeatherDetailsGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;

  @media (max-width: 820px) {
    border-bottom: 1px solid;
    padding: 8px 0;

    &:first-child {
      padding: 0 0 8px 0;
    }

    &:last-child {
      border: 0;
      padding: 8px 0 0 0;
    }
  }
`;

export const WeatherDetailsItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 10px 0;

  span {
    margin: 0 25px 0 0;
  }

  &:last-child {
    padding: 0;
  }
`;
