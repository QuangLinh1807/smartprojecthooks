import React, { useState } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
// import "../index.css";
import { Popover, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import search from "../../image/search.png";
import close from "../../image/times.png";

import image00 from "../../image/0000045091520_0000000000000_0.png";
import image01 from "../../image/0000045091520_0000000000000_135.JPG";
import image02 from "../../image/0000045091520_0000000000000_45.JPG";
import image03 from "../../image/0000045091520_0000000000000_90.JPG";
import image04 from "../../image/0000045091520_0000000000000_180.JPG";
import image05 from "../../image/0000045091520_0000000000000_225.JPG";
import image06 from "../../image/0000045091520_0000000000000_270.JPG";

Product.propTypes = {
  imagesBig: PropTypes.array,
  imagesSmall: PropTypes.array,
};
Product.defaultProps = {
  imagesBig: [],
  imagesSmall: [],
}

function Product(props) {
  const [visible, setVisible] = useState(false);
  const { imagesBig, imagesSmall } = props;

// const [imagesBig, setImagesBig] = useState([
//     {
//       id:"1", image: image00,
//     }
//   ])
//   const [imagesSmall, setImagesSmall] = useState([
//     { id: "1", image: image01 },
//     { id: "2", image: image02 },
//     { id: "3", image: image03 },
//     { id: "4", image: image04 },
//     { id: "5", image: image05 },
//     { id: "6", image: image06 },
//   ]);
  const [image, setImage] = useState([
    {
      id: "1",
      imageBig: image00,
      imageSmall: [image01, image02, image03, image04, image05, image06],
    },
    {
      id: "2",
      imageBig: image00,
      imageSmall: [image01, image02, image03, image04, image05, image06],
    },
  ]);
  

  const hide = () => {
    setVisible(false);
  };
  const handleVisibleChange = (visible) => {
    setVisible(visible);
    console.log(image.map((img, index) => {
      return (
        <div key={img.id}>
        <img className="products-card-img" src={img.imageBig} alt="" />
      </div>
      )
    }));
  };
  const renderImagesBig = imagesBig.map((img) => {
    return (
      <div key={img.id}>
        <img className="products-card-img" src={img.image} alt="" />
      </div>
    );
  });
  const renderImagesSmall = imagesSmall.map((img) => {
    return (
      <div key={img.id}>
        <img src={img.image} alt="" />
      </div>
    );
  });

  const content = (
    <div className="popup">
      <div
        id="carouselExampleIndicators"
        className="carousel"
        data-ride="carousel"
      >
        <Carousel
          width={400}
          showStatus={false}
          autoPlay={true}
          centerMode={true}
          centerSlidePercentage={100}
          dynamicHeight={true}
          infiniteLoop={true}
          interval={100000}
          thumbWidth={58}
        >
          {renderImagesSmall}
        </Carousel>
      </div>
      <div className="popup-right">
        <div className="popup-right-title">
          <p>メグミルク</p>
          <p>雪印コーヒーメグミルク メグミルク 雪印コーヒーメグミルク</p>
          <hr />
        </div>
        <div className="popup-right-description">
          <p>1000ml／1本</p>
          <p>内容量：1000ml</p>
          <p>1000ml／1本 100gあたり98円</p>
          <p>賞味期間：一週間程度</p>
          <p>
            店頭での平均的な容量を表示しています。なるべく近い容量の商品をお届けいたしますが、差分が発生しますので、予めご了承ください。尚
          </p>
          <p>本体価格： ¥148</p>
          <hr />
        </div>
        <div className="popup-right-cart">
          <div className="popup-right-cart-quantity ">
            <div>
              <span className="input-number-decrement">–</span>
              <input
                className="input-number"
                type="text"
                defaultValue={1}
                min={0}
                max={10}
              />
              <span className="input-number-increment">+</span>
            </div>
            <div className="popup-right-cart-price">
              <p>本体価格小計：</p>
              <p> ¥999,999</p>
            </div>
          </div>
          <button>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="shopping-cart"
              className="svg-inline--fa fa-shopping-cart fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
              ></path>
            </svg>
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="products-card">
      {renderImagesBig}
      {/* <img className="products-card-img" src={image00} /> */}
      <div className="product-information">
        <div className="product-information-title">
          <span>ナチュレ恵 7種FM+ベリーM</span>
          <span>280g</span>
        </div>
        <div className="product-information-description">
          <Popover
            placement="bottomLeft"
            title={
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a onClick={hide}>
                <img src={close} alt="" />
              </a>
            }
            content={content}
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
          >
            <Button>
              <img src={search} alt="" />
            </Button>
          </Popover>
          <div className="product-information-description__price">
            ¥ 160税込
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
