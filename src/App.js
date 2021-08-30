import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.scss";
import Product from "./Component/Product/index.js";

import image00 from "./image/0000045091520_0000000000000_0.png";
import image02 from "./image/0000045091520_0000000000000_45.JPG";
import image03 from "./image/0000045091520_0000000000000_90.JPG";
import image01 from "./image/0000045091520_0000000000000_135.JPG";
import image04 from "./image/0000045091520_0000000000000_180.JPG";
import image05 from "./image/0000045091520_0000000000000_225.JPG";
import image06 from "./image/0000045091520_0000000000000_270.JPG";
import image07 from "./image/0000045091520_0000000000000_315.JPG";
import image08 from "./image/0000045091520_0000000000000_TOP.JPG";
import image09 from "./image/0000045091520_0000000000000_UPPER.JPG";

import image10 from "./image/0000045091568_mdbautos11100_0.png";
import image11 from "./image/0000045091568_mdbautos11100_45.JPG";
import image12 from "./image/0000045091568_mdbautos11100_90.JPG";
import image13 from "./image/0000045091568_mdbautos11100_135.JPG";
import image14 from "./image/0000045091568_mdbautos11100_180.JPG";
import image15 from "./image/0000045091568_mdbautos11100_225.JPG";
import image16 from "./image/0000045091568_mdbautos11100_270.JPG";
import image17 from "./image/0000045091568_mdbautos11100_315.JPG";
import image18 from "./image/0000045091568_mdbautos11100_TOP.JPG";
import image19 from "./image/0000045091568_mdbautos11100_UPPER.JPG";

import image20 from "./image/0000045184703_mdbautos11101_0.png";
import image22 from "./image/0000045184703_mdbautos11101_45.JPG";
import image23 from "./image/0000045184703_mdbautos11101_90.JPG";
import image21 from "./image/0000045184703_mdbautos11101_135.JPG";
import image24 from "./image/0000045184703_mdbautos11101_180.JPG";
import image25 from "./image/0000045184703_mdbautos11101_225.JPG";
import image26 from "./image/0000045184703_mdbautos11101_360.JPG";
import image27 from "./image/0000045184703_mdbautos11101_315.JPG";
import image28 from "./image/0000045184703_mdbautos11101_TOP.JPG";
import image29 from "./image/0000045184703_mdbautos11101_UPPER.JPG";

import image30 from "./image/0000045184710_mdbautos11100_0.png";
import image31 from "./image/0000045184710_mdbautos11100_45.JPG";
import image32 from "./image/0000045184710_mdbautos11100_135.JPG";
import image34 from "./image/0000045184710_mdbautos11100_180.JPG";
import image35 from "./image/0000045184710_mdbautos11100_225.JPG";
import image33 from "./image/0000045184710_mdbautos11100_270.JPG";
import image36 from "./image/0000045184710_mdbautos11100_360.JPG";
import image37 from "./image/0000045184710_mdbautos11100_315.JPG";
import image38 from "./image/0000045184710_mdbautos11100_TOP.JPG";
import image39 from "./image/0000045184710_mdbautos11100_UPPER.JPG";

import image40 from "./image/0000045184888_0000000000000_0.png";
import image42 from "./image/0000045184888_0000000000000_45.JPG";
import image43 from "./image/0000045184888_0000000000000_90.JPG";
import image41 from "./image/0000045184888_0000000000000_135.JPG";
import image44 from "./image/0000045184888_0000000000000_180.JPG";
import image45 from "./image/0000045184888_0000000000000_225.JPG";
import image46 from "./image/0000045184888_0000000000000_270.JPG";
import image47 from "./image/0000045184888_0000000000000_315.JPG";
import image48 from "./image/0000045184888_0000000000000_360.JPG";
import image49 from "./image/0000045184888_0000000000000_TOP.JPG";

import image50 from "./image/0000045185045_mdbautos11100_0.png";
import image51 from "./image/0000045185045_mdbautos11100_45.JPG";
import image52 from "./image/0000045185045_mdbautos11100_135.JPG";
import image54 from "./image/0000045185045_mdbautos11100_180.JPG";
import image55 from "./image/0000045185045_mdbautos11100_225.JPG";
import image53 from "./image/0000045185045_mdbautos11100_270.JPG";
import image56 from "./image/0000045185045_mdbautos11100_360.JPG";
import image57 from "./image/0000045185045_mdbautos11100_315.JPG";
import image58 from "./image/0000045185045_mdbautos11100_TOP.JPG";
// import image59 from "./image/0000045185045_mdbautos11100_UPPER.JPG";

import image60 from "./image/0000045207075_0000000000000_0.png";
import image61 from "./image/0000045207075_0000000000000_45.JPG";
import image62 from "./image/0000045207075_0000000000000_90.JPG";
import image63 from "./image/0000045207075_0000000000000_135.JPG";
import image64 from "./image/0000045207075_0000000000000_180.JPG";
import image65 from "./image/0000045207075_0000000000000_225.JPG";
import image66 from "./image/0000045207075_0000000000000_270.JPG";
import image67 from "./image/0000045207075_0000000000000_360.JPG";
import image68 from "./image/0000045207075_0000000000000_TOP.JPG";
import image69 from "./image/0000045207075_0000000000000_UPPER.JPG";

import image70 from "./image/0000045207082_0000000000000_0.png";
import image71 from "./image/0000045207082_0000000000000_45.JPG";
import image72 from "./image/0000045207082_0000000000000_135.JPG";
import image74 from "./image/0000045207082_0000000000000_180.JPG";
import image75 from "./image/0000045207082_0000000000000_225.JPG";
// import image73 from "./image/0000045207082_0000000000000_270.JPG";
import image76 from "./image/0000045207082_0000000000000_360.JPG";
import image77 from "./image/0000045207082_0000000000000_315.JPG";
import image78 from "./image/0000045207082_0000000000000_TOP.JPG";
import image79 from "./image/0000045207082_0000000000000_UPPER.JPG";

import image80 from "./image/0000045207099_0000000000000_0.png";
import image81 from "./image/0000045207099_0000000000000_45.JPG";
import image82 from "./image/0000045207099_0000000000000_135.JPG";
// import image84 from "./image/0000045207099_0000000000000_180.JPG";
import image85 from "./image/0000045207099_0000000000000_225.JPG";
import image83 from "./image/0000045207099_0000000000000_270.JPG";
import image86 from "./image/0000045207099_0000000000000_360.JPG";
import image87 from "./image/0000045207099_0000000000000_315.JPG";
import image88 from "./image/0000045207099_0000000000000_TOP.JPG";
import image89 from "./image/0000045207099_0000000000000_UPPER.JPG";

import image90 from "./image/0000049103090_mdbautos11100_0.png";
import image91 from "./image/0000049103090_mdbautos11100_90.JPG";
import image94 from "./image/0000049103090_mdbautos11100_180.JPG";
import image93 from "./image/0000049103090_mdbautos11100_270.JPG";
import image96 from "./image/0000049103090_mdbautos11100_BOTTOM.JPG";
import image98 from "./image/0000049103090_mdbautos11100_TOP.JPG";
import image99 from "./image/0000049103090_mdbautos11100_UPPER.JPG";

function App() {
  const [imagesBig1, setImagesBig1] = useState([
    {
      id: "1",
      image: image00,
    },
  ]);
  const [imagesSmall1, setImagesSmall1] = useState([
    { id: "1", image: image01 },
    { id: "2", image: image02 },
    { id: "3", image: image03 },
    { id: "4", image: image04 },
    { id: "5", image: image05 },
    { id: "6", image: image06 },
    { id: "7", image: image07 },
    { id: "8", image: image08 },
    { id: "9", image: image09 },
  ]);

  const [imagesBig2, setImagesBig2] = useState([
    {
      id: "1",
      image: image10,
    },
  ]);
  const [imagesSmall2, setImagesSmall2] = useState([
    { id: "1", image: image11 },
    { id: "2", image: image12 },
    { id: "3", image: image13 },
    { id: "4", image: image14 },
    { id: "5", image: image15 },
    { id: "6", image: image16 },
    { id: "7", image: image17 },
    { id: "8", image: image18 },
    { id: "9", image: image19 },
  ]);

  const [imagesBig3, setImagesBig3] = useState([
    {
      id: "1",
      image: image20,
    },
  ]);
  const [imagesSmall3, setImagesSmall3] = useState([
    { id: "1", image: image21 },
    { id: "2", image: image22 },
    { id: "3", image: image23 },
    { id: "4", image: image24 },
    { id: "5", image: image25 },
    { id: "6", image: image26 },
    { id: "7", image: image27 },
    { id: "8", image: image28 },
    { id: "9", image: image29 },
  ]);
  const [imagesBig4, setImagesBig4] = useState([
    {
      id: "1",
      image: image30,
    },
  ]);
  const [imagesSmall4, setImagesSmall4] = useState([
    { id: "1", image: image31 },
    { id: "2", image: image32 },
    { id: "3", image: image33 },
    { id: "4", image: image34 },
    { id: "5", image: image35 },
    { id: "6", image: image36 },
    { id: "7", image: image37 },
    { id: "8", image: image38 },
    { id: "9", image: image39 },
  ]);
  const [imagesBig5, setImagesBig5] = useState([
    {
      id: "1",
      image: image40,
    },
  ]);
  const [imagesSmall5, setImagesSmall5] = useState([
    { id: "1", image: image41 },
    { id: "2", image: image42 },
    { id: "3", image: image43 },
    { id: "4", image: image44 },
    { id: "5", image: image45 },
    { id: "6", image: image46 },
    { id: "7", image: image47 },
    { id: "8", image: image48 },
    { id: "9", image: image49 },
  ]);
  const [imagesBig6, setImagesBig6] = useState([
    {
      id: "1",
      image: image50,
    },
  ]);
  const [imagesSmall6, setImagesSmall6] = useState([
    { id: "1", image: image51 },
    { id: "2", image: image52 },
    { id: "3", image: image53 },
    { id: "4", image: image54 },
    { id: "5", image: image55 },
    { id: "6", image: image56 },
    { id: "7", image: image57 },
    { id: "8", image: image58 },
  ]);
  const [imagesBig7, setImagesBig7] = useState([
    {
      id: "1",
      image: image60,
    },
  ]);
  const [imagesSmall7, setImagesSmall7] = useState([
    { id: "1", image: image61 },
    { id: "2", image: image62 },
    { id: "3", image: image63 },
    { id: "4", image: image64 },
    { id: "5", image: image65 },
    { id: "6", image: image66 },
    { id: "6", image: image67 },
    { id: "6", image: image68 },
    { id: "6", image: image69 },
  ]);
  const [imagesBig8, setImagesBig8] = useState([
    {
      id: "1",
      image: image70,
    },
  ]);
  const [imagesSmall8, setImagesSmall8] = useState([
    { id: "1", image: image71 },
    { id: "2", image: image72 },
    // { id: "3", image: image73 },
    { id: "4", image: image74 },
    { id: "5", image: image75 },
    { id: "6", image: image76 },
    { id: "6", image: image77 },
    { id: "6", image: image78 },
    { id: "6", image: image79 },
  ]);
  const [imagesBig9, setImagesBig9] = useState([
    {
      id: "1",
      image: image80,
    },
  ]);
  const [imagesSmall9, setImagesSmall9] = useState([
    { id: "1", image: image81 },
    { id: "2", image: image82 },
    { id: "3", image: image83 },
    { id: "5", image: image85 },
    { id: "6", image: image86 },
    { id: "6", image: image87 },
    { id: "6", image: image88 },
    { id: "6", image: image89 },
  ]);
  const [imagesBig10, setImagesBig10] = useState([
    {
      id: "1",
      image: image90,
    },
  ]);
  const [imagesSmall10, setImagesSmall10] = useState([
    { id: "1", image: image91 },
    { id: "2", image: image93 },
    { id: "3", image: image94 },
    { id: "4", image: image96 },
    { id: "5", image: image98 },
    { id: "6", image: image99 },
  ]);

  //   const [image, setImage] = useState([
  //   {
  //     id: "1",
  //     imageBig: image00,
  //     imageSmall: [image01, image02, image03, image04, image05, image06],
  //   },
  // ]);

  return (
    <div className="demo">
      <div
        style={{
          marginLeft: 70,
          clear: "both",
          whiteSpace: "nowrap",
          display: "flex",
        }}
        className="products"
      >
        <Product imagesBig={imagesBig1} imagesSmall={imagesSmall1} />
        <Product imagesBig={imagesBig2} imagesSmall={imagesSmall2} />
        <Product imagesBig={imagesBig3} imagesSmall={imagesSmall3} />
        <Product imagesBig={imagesBig4} imagesSmall={imagesSmall4} />
        <Product imagesBig={imagesBig5} imagesSmall={imagesSmall5} />
        <Product imagesBig={imagesBig6} imagesSmall={imagesSmall6} />
        <Product imagesBig={imagesBig7} imagesSmall={imagesSmall7} />
        <Product imagesBig={imagesBig8} imagesSmall={imagesSmall8} />
        <Product imagesBig={imagesBig9} imagesSmall={imagesSmall9} />
        <Product imagesBig={imagesBig10} imagesSmall={imagesSmall10} />
        <Product imagesBig={imagesBig1} imagesSmall={imagesSmall1} />
        <Product imagesBig={imagesBig2} imagesSmall={imagesSmall2} />
        <Product imagesBig={imagesBig3} imagesSmall={imagesSmall3} />
        <Product imagesBig={imagesBig4} imagesSmall={imagesSmall4} />
        <Product imagesBig={imagesBig5} imagesSmall={imagesSmall5} />
        <Product imagesBig={imagesBig6} imagesSmall={imagesSmall6} />
        <Product imagesBig={imagesBig7} imagesSmall={imagesSmall7} />
        <Product imagesBig={imagesBig8} imagesSmall={imagesSmall8} />
        <Product imagesBig={imagesBig9} imagesSmall={imagesSmall9} />
        <Product imagesBig={imagesBig10} imagesSmall={imagesSmall10} />
        <Product imagesBig={imagesBig1} imagesSmall={imagesSmall1} />
        <Product imagesBig={imagesBig2} imagesSmall={imagesSmall2} />
        <Product imagesBig={imagesBig3} imagesSmall={imagesSmall3} />
        <Product imagesBig={imagesBig4} imagesSmall={imagesSmall4} />
        <Product imagesBig={imagesBig5} imagesSmall={imagesSmall5} />
        <Product imagesBig={imagesBig6} imagesSmall={imagesSmall6} />
        <Product imagesBig={imagesBig7} imagesSmall={imagesSmall7} />
        <Product imagesBig={imagesBig8} imagesSmall={imagesSmall8} />
        <Product imagesBig={imagesBig9} imagesSmall={imagesSmall9} />
        <Product imagesBig={imagesBig10} imagesSmall={imagesSmall10} />
        <Product imagesBig={imagesBig1} imagesSmall={imagesSmall1} />
        <Product imagesBig={imagesBig2} imagesSmall={imagesSmall2} />
        <Product imagesBig={imagesBig3} imagesSmall={imagesSmall3} />
        <Product imagesBig={imagesBig4} imagesSmall={imagesSmall4} />
        <Product imagesBig={imagesBig5} imagesSmall={imagesSmall5} />
        <Product imagesBig={imagesBig6} imagesSmall={imagesSmall6} />
        <Product imagesBig={imagesBig7} imagesSmall={imagesSmall7} />
        <Product imagesBig={imagesBig8} imagesSmall={imagesSmall8} />
        <Product imagesBig={imagesBig9} imagesSmall={imagesSmall9} />
        <Product imagesBig={imagesBig10} imagesSmall={imagesSmall10} />
      </div>
    </div>
  );
}

export default App;
