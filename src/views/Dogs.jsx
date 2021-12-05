import React, { useEffect, useState, useRef } from "react";
import { Select } from "../components/Select";
import { ImageGallery } from "../components/ImageGallery";
import Loading from "../components/Loading";
import { getAllDogsBreed } from "../services/Dogs";
import { useDogsImages } from "../hooks/useDogsImages";

export function Dogs() {
  const [dogs, setDogs] = useState([]);
  const selectRef = useRef("");
  const dogsImages = useDogsImages();
  useEffect(() => {
    getAllDogsBreed()
      .then((response) => {
        setDogs([...dogs, ...response]);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="my-3 d-flex justify-content-center">
        <Select
          innerRef={selectRef}
          options={dogs}
          onChange={(dog) => {
            selectRef.current = dog;
            dogsImages.changeDogsBreedImages(dog);
          }}
        />
      </div>
      {dogsImages.loading ? (
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      ) : (
        <div className="row m-0 col-12 justify-content-center">
          {dogsImages.dogImages.length === 0 && selectRef.current !== "" && (
            <>
              <div className="col-12 d-flex justify-content-center">
                NO HAY IMÁGENES DEL TIPO DE RAZA {selectRef.current}, PERO
                PODEMOS MOSTRAR TODAS LAS IMÁGENES QUE HAY DE SU RAZA
              </div>
              <div className="col-12 d-flex justify-content-center mt-3">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    dogsImages.changeDogsBreedImages(selectRef.current, "breed")
                  }
                >
                  {selectRef.current.split("-")[0]}
                </button>
              </div>
            </>
          )}
          <ImageGallery images={dogsImages.dogImages} />
        </div>
      )}
    </>
  );
}
