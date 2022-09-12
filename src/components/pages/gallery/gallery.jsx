import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import HOC from "../../layout/HOC";
import "./gallery.css";
const ImagesGallery = () => {
  const images = [
    {
      original: "https://picsum.photos/id/101/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  //   const call = async () => {
  //     const response = await axios.get(
  //       "https://google-photos-album-demo2.glitch.me/S2yLfV7Wy6zSHGtf6"
  //     );
  //     if (!shouldCancel && response.data && response.data.length > 0) {
  //       setImages(
  //         response.data.map((url) => ({
  //           original: `${url}=w500-h500`,
  //           thumbnail: `${url}=w100`,
  //         }))
  //       );
  return (
    <div className="imageGallery">
      <ImageGallery items={images} />
    </div>
  );
};
//   };
// };
export default HOC(ImagesGallery);
