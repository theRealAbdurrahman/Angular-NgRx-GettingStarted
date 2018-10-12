import { Product } from './../product';
import * as fromRoot from '../../state/app.state';

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export interface AppState extends fromRoot.AppState {
  products: ProductState;
}

export function reducer(state: ProductState, action): ProductState {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
      return { ...state, showProductCode: action.payload };
    //       return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}
