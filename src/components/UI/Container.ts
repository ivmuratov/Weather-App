import styled from 'styled-components';

import { Indent, MaxWidth } from '../../styles/vars';

interface ContainerProps {
  maxWidth?: MaxWidth;
  indent?: Indent;
}

const Container = styled.div<ContainerProps>`
  max-width: ${({ maxWidth = MaxWidth.mw1, indent = Indent.ind1 }) => maxWidth + indent * 2 + 'px'};
  padding: ${({ indent = Indent.ind1 }) => '0 ' + indent + 'px'};
  margin: 0 auto;
`;

export default Container;
