import { FC } from 'react';
import styled from 'styled-components';

import { LeftArrowButton, RightArrowButton } from './ArrowButton';

import { IPageActions } from '../../types/IPageActions';

const StyledPagination = styled.div`
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

export const Pagination: FC<PaginationProps> = ({ currPage, items, itemsPerPage, actions }) => {
  const pageNumbers: number[] = [];

  for (let i: number = 1; i <= Math.ceil(items / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      {currPage === pageNumbers[0] ? <LeftArrowButton inactive /> : <LeftArrowButton onClick={actions.prevPage} />}
      <PageList>
        {pageNumbers.map((number) => (
          <PageNumber key={number} active={currPage === number} onClick={() => actions.paginate(number)}>
            {number}
          </PageNumber>
        ))}
      </PageList>
      {currPage === pageNumbers[pageNumbers.length - 1] ? (
        <RightArrowButton inactive />
      ) : (
        <RightArrowButton onClick={actions.nextPage} />
      )}
    </StyledPagination>
  );
};
