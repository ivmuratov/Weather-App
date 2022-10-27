import styled from 'styled-components/macro';

interface PlaceholderProps {
  fontSize?: string;
  indent?: string;
}

export const ToggleStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Placeholder = styled.div<PlaceholderProps>`
  display: flex;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize};
  margin-right: ${({ indent }) => indent};
`;

export const Content = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  background: #a5b3b5;
  border-radius: 30px;
  padding: 10px;
  transition: 0.5s all;

  &:before {
    transition: 0.5s all;
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 50%;
    left: 3px;
    background: #ffffff;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  display: none;
  opacity: 0;
  position: absolute;

  &:checked + ${Content} {
    background: #575dff;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
