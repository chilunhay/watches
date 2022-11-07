import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from "../constants/FavoriteConstant";

export const favoriteReducer = (state = { favoriteItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      const item = action.payload;

      const isItemExist = state.favoriteItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          favoriteItems: state.favoriteItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, item],
        };
      }

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (i) => i.product !== action.payload
        ),
      };

    default:
      return state;
  }
};
