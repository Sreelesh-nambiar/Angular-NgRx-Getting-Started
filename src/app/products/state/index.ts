  import * as fromRoot from "../../state/app.state";
  import {
    createFeatureSelector,
    createSelector
  } from '@ngrx/store';

import { ProductState } from './product.reducer';
  
  export interface State extends fromRoot.State {
    products: ProductState;
  }
  
  const getProductFeaturestate = createFeatureSelector <ProductState> ('products');
  
  export const getShowProductCode = createSelector(
    getProductFeaturestate, state => state.showProductCode
  );
  
  export const getCurrentProductId = createSelector(
    getProductFeaturestate, state => state.currentProductId
  );
  
  export const getCurrentProduct = createSelector(
    getProductFeaturestate,
    getCurrentProductId,
    (state, currentProductId) => {
      if (currentProductId === 0) {
        return {
          id: 0,
          productName: '',
          productCode: 'new',
          description: '',
          starRating: 0
        };
      } else {
        return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
      }
    }
  );
  
  export const getProducts = createSelector(
    getProductFeaturestate, state => state.products
  );
  
  export const getError = createSelector(
    getProductFeaturestate, state => state.error
  )
  