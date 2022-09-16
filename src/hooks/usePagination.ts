import { useState } from 'react';

import IPageActions from '../types/IPageActions';

export const usePagination = <T extends {}>(
  totalItems: T[] | undefined,
): {
  currItems: T[] | undefined;
  currPage: number;
  itemsPerPage: number;
  actions: IPageActions;
} => {
  const [currPage, setCurrPage] = useState<number>(1);

  const itemsPerPage: number = 7;

  const lastItemIndex = currPage * itemsPerPage;

  const firstItemIndex = lastItemIndex - itemsPerPage;

  const currItems = totalItems?.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber: number) => {
    setCurrPage(pageNumber);
  };

  const nextPage = () => {
    setCurrPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrPage((prev) => prev - 1);
  };

  return { currItems, currPage, itemsPerPage, actions: { paginate, nextPage, prevPage } };
};
