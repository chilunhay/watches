import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg from "../../Assets/rsz_1banner_1.jpg";
import bg2 from "../../Assets/rsz_1banner_3.jpg";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductAction";
import ProductCard from "../Product/ProductCard";
import MetaData from "../../more/MetaData";
import Footer from "./Footer.js";
import Loading from "../../more/Loader";
import { useAlert } from "react-alert";
import BottomTab from "../../more/BottomTab";

const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, alert, error]);

  return (
    <>
    {loading ? (
        <Loading />
      ) : (
      <>
      <MetaData title="Home" />
        <Header />
        {/* Carousel */}
        <div className="banner">
          <Carousel>
            <img src={bg} className="bgImg" alt="bg" />
            <img src={bg2} className="bgImg" alt="bg2" />
          </Carousel>
          <div className="home__content">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontFamily: "Segoe Script",
                  fontSize: "3em",
                  fontWeight: "500",
                  color: "#26c",
                  backgroundColor: "#fff",
                }}
              >
                Welcome to
              </h2>
              {/* <span
                style={{
                  padding: "10px",
                  backgroundColor: "#fff",
                  margin: "0px 10px",
                  textAlign: "center",
                  width: "150px",
                  height: "40px",
                  color: "#26c",
                  fontFamily: "Segoe Script",
                  fontSize: "2.4em",
                  display: "flex",
                  justifyContent: "center",
                  lineHeight: ".7",
                  alignItems: "center",
                }}
              >
                1 Free
              </span> */}
            </div>
            <div>
              <h2
                style={{
                  fontSize: "4.5em",
                  fontFamily: "Poppins,sans-serif",
                  color: "#fff",
                }}
              >
                TDC Watches
              </h2>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "4.5em",
                  fontWeight: "400",
                  fontFamily: "Poppins,sans-serif",
                  color: "#fff",
                  lineHeight: ".7",
                }}
              >
                Collection
              </h2>
            </div>
            <div>
              <h2
                style={{
                  fontWeight: "400",
                  fontFamily: "Poppins,sans-serif",
                  color: "#fff",
                  fontSize: "1em",
                  paddingTop: "10px",
                }}
              >
                Get Free Shipping on all orders over $1000
              </h2>
            </div>
            <div>
              <a href="#container">
                <button
                  type="submit"
                  style={{
                    width: "135px",
                    height: "50px",
                    border: "none",
                    background: "#3BB77E",
                    margin: "10px 0",
                    fontSize: "1vmax",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  className="Home__button"
                >
                  SHOP NOW
                </button>
              </a>
            </div>
          </div>
        </div>

        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
        <BottomTab />
        <Footer />
      </>
      )}
    </>
  );
};

export default Home;
