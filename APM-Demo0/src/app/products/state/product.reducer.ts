import { Product } from './../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export interface AppState extends fromRoot.AppState {
  products: ProductState;
}
const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

const getProductsFeatureSlice = createFeatureSelector<ProductState>('products');
export const getShowProductCode = createSelector(
  getProductsFeatureSlice,
  productsState => productsState.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductsFeatureSlice,
  productState => productState.currentProduct
);

export const getProducts = createSelector(
  getProductsFeatureSlice,
  productState => productState.products
);

export function reducer(state = initialState, action): ProductState {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
      return { ...state, showProductCode: action.payload };
    // return Object.assign({ showProductCode: action.payload }, state);

    default:
      return state;
  }
}
