import { FC } from 'react';

import { PaginationStyled, PageList, PageNumber } from './Pagination.styled';

import IPageActions from '../../../types/IPageActions';
import LeftArrowButton from '../ArrowButton/LeftArrowButton';
import RightArrowButton from '../ArrowButton/RightArrowButton';

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
