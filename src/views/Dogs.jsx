import React, { useRef } from "react";
import { ImagesGallery } from "../components/ImagesGallery";
import { Select } from "../components/Select";
import { useGalleryImagesAPI } from "../hooks/useGalleryImagesAPI";
import { useSelectAPI } from "../hooks/useSelectAPI";
import { getAllDogsBreed, getDogsBreedImages } from "../services/Dogs";

export function Dogs() {
  const selectRef = useRef();
  const dogsImagesAPI = useGalleryImagesAPI(getDogsBreedImages);
  const selectAPI = useSelectAPI(getAllDogsBreed);

  return (
    <>
      <div className="my-3 d-flex justify-content-center">
        <Select
          innerRef={selectRef}
          options={selectAPI.options}
          onChange={(dog) => {
            selectRef.current = dog;
            dogsImagesAPI.changeImagesGallery(dog);
          }}
        />
      </div>
      <ImagesGallery
        images={dogsImagesAPI.images}
        changeImages={(ref, type) =>
          dogsImagesAPI.changeImagesGallery(ref, type)
        }
        ref={selectRef}
        loading={dogsImagesAPI.loading}
      />
    </>
  );
}
