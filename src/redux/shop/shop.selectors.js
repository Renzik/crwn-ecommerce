import { createSelector } from 'reselect';

const COLLETION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShopItems = state => state.collections;

export const selectShopCollections = createSelector(
  [selectShopItems],
  ShopItems => ShopItems.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectShopCollections], collections =>
    collections.find(collection => collection.id === COLLETION_ID_MAP[collectionUrlParam])
  );
