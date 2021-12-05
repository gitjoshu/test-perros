import { useState } from "react";
import { getDogsBreedImages } from "../services/Dogs";

export function useDogsImages() {
  const [dogImages, setDogImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const changeDogsBreedImages = (dog = "", option = "type") => {
    setLoading(true);
    if (dog === "") {
      setDogImages([]);
      setLoading(false);
      return { loading, dogImages };
    }
    getDogsBreedImages(dog, option)
      .then((response) => {
        setDogImages(response);
        setLoading(false);
        return { loading, dogImages };
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return { loading, dogImages, changeDogsBreedImages };
}
