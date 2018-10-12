import { State } from '@ngrx/store';

export function reducer(state, action): State<any> {
  switch (action.type) {
    case 'TOGGLE_MASK_USERNAME':
      return { ...state, maskUserName: action.payload };

    default: {
      return state;
    }
  }
}
