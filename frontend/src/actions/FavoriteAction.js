import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE }
from "../constants/FavoriteConstant";
import axios from "axios";

// Add to favorites
export const addFavoriteItemsToCart = (id,quantity) => async (dispatch, getState) =>{
    const {data} = await axios.get(`/api/v2/product/${id}`);

    dispatch({
        type: ADD_TO_FAVORITE,
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].url,
            stock: data.product.Stock,
            quantity,
        }
    })

    localStorage.setItem("favoriteItems", JSON.stringify(getState().favorite.favoriteItems));
}

// Delete from favorites
export const deleteFavoriteItemsToCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_FAVORITE,
      payload: id,
    });
  
    localStorage.setItem("favoriteItems", JSON.stringify(getState().favorite.favoriteItems));
  };
