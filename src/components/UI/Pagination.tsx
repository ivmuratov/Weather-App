import { FC } from 'react';
import styled from 'styled-components/macro';

import LeftArrowButton from './ArrowButton/LeftArrowButton';
import RightArrowButton from './ArrowButton/RightArrowButton';

import IPageActions from '../../types/IPageActions';

const PaginationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageList = styled.ul`
  display: flex;
`;

interface PageNumberProps {
  active: boolean;
}

const PageNumber = styled.li<PageNumberProps>`
  font-size: 24px;
  padding: 10px;
  margin: 0 10px 0 0;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '2px solid' : '0')};

  &:hover {
    opacity: 0.8;
  }

  &:last-child {
    margin: 0;
  }
`;

interface PaginationProps {
  currPage: number;
  items: number;
  itemsPerPage: number;
  actions: IPageActions;
}

const Pagination: FC<PaginationProps> = ({ currPage, items, itemsPerPage, actions }) => {
  const pageNumbers: number[] = [];

  for (let i: number = 1; i <= Math.ceil(items / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const firstPage = pageNumbers[0];

  const lastPage = pageNumbers[pageNumbers.length - 1];

  return (
    <PaginationStyled>
      {currPage === firstPage ? <LeftArrowButton inactive /> : <LeftArrowButton onClick={actions.prevPage} />}
      <PageList>
        {pageNumbers.map((number) => (
          <PageNumber key={number} active={currPage === number} onClick={() => actions.paginate(number)}>
            {number}
          </PageNumber>
        ))}
      </PageList>
      {currPage === lastPage ? <RightArrowButton inactive /> : <RightArrowButton onClick={actions.nextPage} />}
    </PaginationStyled>
  );
};

export default Pagination;
