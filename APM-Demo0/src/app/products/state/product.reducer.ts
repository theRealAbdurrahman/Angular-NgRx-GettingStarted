import { Product } from './../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionTypes } from './Product.actions';

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

export function reducer(
  state = initialState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return { ...state, showProductCode: action.payload };

    case ProductActionTypes.SetCurrentProduct:
      return { ...state, currentProduct: { ...action.payload } };

    case ProductActionTypes.ClearCurrentProduct:
      return { ...state, currentProduct: null };

    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProduct: {
          id: 0,
          productName: '',
          productCode: 'New',
          description: '',
          starRating: 0
        }
      };
    default:
      return state;
  }
}

// return Object.assign({ showProductCode: action.payload }, state);
