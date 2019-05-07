import { createSelector } from 'reselect';

const itemReducerSelector = state => state.item;

export const myItemsSelector = createSelector(
  itemReducerSelector,
  item => item.myItems,
);

export const loadingSelector = createSelector(
  itemReducerSelector,
  item => item.isLoading,
);

export const loadedSelector = createSelector(
  itemReducerSelector,
  item => item.loaded,
);

export const offsetSelector = createSelector(
  itemReducerSelector,
  item => item.offset,
);
