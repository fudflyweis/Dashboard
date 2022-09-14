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
      original: "https://c1.wallpaperflare.com/preview/580/802/425/car-mercedes-slk-auto.jpg",
      thumbnail: "https://c1.wallpaperflare.com/preview/580/802/425/car-mercedes-slk-auto.jpg",
    },
    {
      original: "https://wallpaperaccess.com/full/534288.jpg",
      thumbnail: "https://wallpaperaccess.com/full/534288.jpg",
    },
    {
      original: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
      thumbnail: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
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
