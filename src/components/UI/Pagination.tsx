import { FC } from 'react';
import styled from 'styled-components';

import { IPageActions } from '../../types/IPageActions';

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PageList = styled.ul`
  display: flex;
`;

const PrevPage = styled.button`
  cursor: pointer;
`;

const NextPage = styled.button`
  cursor: pointer;
`;

const PageNumber = styled.li`
  padding: 10px;
  background: white;
  border-radius: 2px;
  cursor: pointer;
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
      {currPage === pageNumbers[0] ? (
        <PrevPage disabled>Предыдущая</PrevPage>
      ) : (
        <PrevPage onClick={actions.prevPage}>Предыдущая</PrevPage>
      )}
      <PageList>
        {pageNumbers.map((number) => (
          <PageNumber key={number} onClick={() => actions.paginate(number)}>
            {number}
          </PageNumber>
        ))}
      </PageList>
      {currPage === pageNumbers[pageNumbers.length - 1] ? (
        <NextPage disabled>Следующая</NextPage>
      ) : (
        <NextPage onClick={actions.nextPage}>Следующая</NextPage>
      )}
    </StyledPagination>
  );
};
