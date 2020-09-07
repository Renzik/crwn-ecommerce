import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShopItems = state => state.collections;

export const selectShopCollections = createSelector(
  [selectShopItems],
  ShopItems => ShopItems.collections
);

export const selectCollectionsForPreview = createSelector([selectShopCollections], collections =>
  collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = memoize(collectionUrlParam =>
  createSelector([selectShopCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  )
);
