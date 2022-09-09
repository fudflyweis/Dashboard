import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import HOC from "../../layout/HOC";

const ImagesGallery = () => {
    const [images, setImages] = React.useState(null);

    React.useEffect(() => {
        let shouldCancel = false;

        const call = async () => {
            const response = await axios.get(
                "https://google-photos-album-demo2.glitch.me/S2yLfV7Wy6zSHGtf6"
            );
            if (!shouldCancel && response.data && response.data.length > 0) {
                setImages(
                    response.data.map(url => ({
                        original: `${url}=w500-h500`,
                        thumbnail: `${url}=w100`
                    }))
                );
            }
        };
        call();
        return () => (shouldCancel = true);
    }, []);

    return images ? <ImageGallery items={images} /> : null;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<ImagesGallery />, rootElement);
export default HOC(ImagesGallery);