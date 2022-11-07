import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../Home/Footer.js";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/MetaData";
import "./About.css";
import BottomTab from "../../more/BottomTab";

const About = () => {
  const { loading } = useSelector((state) => state.profile);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img
                      src="https://content.rolex.com/dam/new-watches-2022/homepage/roller-new-watches/homepage-new-watches-2022-roller-watches-air-king_portrait.jpg?imwidth=420"
                      alt="watch"
                    />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Welcome to TDC Watches
                      </span>
                      <p>
                        Here at TDC Watches, we pride ourselves on being the No.
                        1 for Brands in the designer watch world. Stocking over
                        150 top brands, from luxury Versace to hip HUGO, plus
                        brands designed by us such as Depth Charge (available
                        exclusively at TDC Watches, we might add), we are here
                        to help you find your ideal watch, whoever you are
                        buying for. On top of our impressive brand collection,
                        our buyers work hard to secure exclusive lines from a
                        curation of our bestselling brands; the brands most
                        loved by you. We love giving you, our customers, the VIP
                        treatment by offering standout exclusives from the likes
                        of Rotary, Guess and STORM London.
                      </p>
                      <p>
                        Wondering whether our watches are genuine, considering
                        how good the prices are? No need to worry; we are
                        official stockists for all of our brands. Your watch
                        will ship out of our very own warehouse in Reading, and
                        before then, it will sit with the official manufacturer.
                        No middle man here! This also means every watch you
                        purchase with us will come in the original brand
                        packaging and with a valid guarantee. Plus any extras,
                        such as instructions and technical information (if
                        applicable), will be present and correct.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>What We Provide?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          // minHeight: "230px",
                          minHeight: "150px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg"
                            alt="img1"
                          />
                        </div>
                        <span>Best Prices & Offers</span>
                        {/* <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p> */}
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "150px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg"
                            alt="img2"
                          />
                        </div>
                        <span>Best For Trust & Quality</span>
                        {/* <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p> */}
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "150px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg"
                            alt="img3"
                          />
                        </div>
                        <span>Fast Delivery System</span>
                        {/* <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p> */}
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "150px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg"
                            alt="img4"
                          />
                        </div>
                        <span>Easy Returns Service</span>
                        {/* <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p> */}
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "150px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg"
                            alt="img5"
                          />
                        </div>
                        <span>100% satisfication</span>
                        {/* <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p> */}
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "150px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg"
                            alt="img6"
                          />
                        </div>
                        <span>Great Daily Deal</span>
                        {/* <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <BottomTab />
        </>
      )}
    </>
  );
};

export default About;
