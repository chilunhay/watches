import React from "react";
import "./Favorites.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavoriteItemsToCart } from "../../actions/FavoriteAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import FavoriteItemsCard from "./FavoriteItemsCard";
import MetaData from "../../more/MetaData";
import Loading from "../../more/Loader";
import BottomTab from "../../more/BottomTab";

const Favorite = ({ history }) => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.productDetails);
  const { favoriteItems } = useSelector((state) => state.favorite);

  const deleteFavoriteItems = (id) => {
    dispatch(deleteFavoriteItemsToCart(id));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Favorites Items" />
          {favoriteItems.length === 0 ? (
            <div className="emptyCart">
              <RemoveShoppingCartIcon />
              <Typography>No Items In Favorites</Typography>
              <Link to="/products">View Products</Link>
              <BottomTab />
            </div>
          ) : (
            <>
              <div className="favoritesPage">
                <div className="favoritesHeader">
                  <p>Product</p>
                  <p>Price</p>
                  <p>Stock Status</p>
                  <p>Action</p>
                </div>
                {favoriteItems &&
                  favoriteItems.map((item) => (
                    <div className="favoritesContainer" key={item.product}>
                      <FavoriteItemsCard
                        item={item}
                        deleteFavoriteItems={deleteFavoriteItems}
                      />
                    </div>
                  ))}
                <BottomTab />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Favorite;
