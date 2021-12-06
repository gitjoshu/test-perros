import { useState } from "react";

export function useGalleryImagesAPI(APIService) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const changeImagesGallery = (image = "", option) => {
    setLoading(true);
    if (image === "") {
      setImages([]);
      setLoading(false);
      return { loading, images };
    }
    APIService(image, option)
      .then((response) => {
        setImages(response);
        setLoading(false);
        return { loading, images };
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return { loading, images, changeImagesGallery };
}
