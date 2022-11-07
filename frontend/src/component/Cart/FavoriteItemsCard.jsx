import React from "react";
import { Link } from "react-router-dom";
import "./FavoriteItemsCard.css";
import { useSelector } from "react-redux";

const FavoriteItemsCard = ({ item, deleteFavoriteItems }) => {

  const { product } = useSelector((state) => state.productDetails);

  return (
    <div className="FavoriteItemsCard">
      <div>
        <img src={item.image} alt="ssa" />
        
        <Link
          to={`/product/${item.product}`}
          style={{
            fontSize: "300 0.9vmax",
            fontFamily: "cursive",
          }}
        >
          {item.name}
        </Link>
        <p onClick={() => deleteFavoriteItems(item.product)}>Remove</p>
      </div>

      <div>
        <span>{`$ ${item.price}`}</span>
      </div>

      <div>
        <p style={{ paddingBottom: ".5vmax" }}>
          <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
            {product.Stock < 1 ? "OutOfStock" : "InStock"}
          </b>
        </p>
      </div>

      <div>
        <Link to={`/product/${item.product}`}>
          <button
            className="FavoritesButton"
            onClick={() => deleteFavoriteItems(item.product)}
          >
            Add To Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteItemsCard;
