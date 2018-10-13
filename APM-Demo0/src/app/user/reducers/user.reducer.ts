import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  maskUserName: boolean;
}

const initialUserSate: UserState = {
  maskUserName: false
};

const getUserStateFeatureState = createFeatureSelector<UserState>('users');
export const getMaskUserName = createSelector(
  getUserStateFeatureState,
  userSate => userSate.maskUserName
);

export function reducer(state = initialUserSate, action): UserState {
  switch (action.type) {
    case 'TOGGLE_MASK_USERNAME':
      return { ...state, maskUserName: action.payload };

    default: {
      return state;
    }
  }
}
