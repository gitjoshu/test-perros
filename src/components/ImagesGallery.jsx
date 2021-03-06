import { forwardRef } from "react";
import { ImagesList } from "./ImagesList";
import Loading from "../components/Loading";

export const ImagesGallery = forwardRef((props, ref) => {
  return (
    <>
      {props.loading ? (
        <Loading />
      ) : (
        <div
          className={`row m-0 col-12 ${
            props.images.length === 0 && ref.current
              ? "justify-content-center"
              : ""
          }`}
        >
          {props.images.length === 0 &&
            ref.current !== undefined &&
            ref.current !== "" && (
              <>
                <div className="col-12 d-flex justify-content-center">
                  NO HAY IMÁGENES DEL TIPO DE RAZA {ref.current}, PERO PODEMOS
                  MOSTRAR TODAS LAS IMÁGENES QUE HAY DE SU RAZA
                </div>
                <div className="col-12 d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => props.changeImages(ref.current, "breed")}
                  >
                    {ref.current !== undefined && (
                      <>{ref.current.split("-")[0]}</>
                    )}
                  </button>
                </div>
              </>
            )}
          <ImagesList images={props.images} />
        </div>
      )}
    </>
  );
});
