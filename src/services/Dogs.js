export const getAllDogsBreed = async () => {
  let dogsFetchList = [];
  await fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      Object.entries(data.message).map(([breed, types]) => {
        if (types.length > 0) {
          types.map((type) =>
            dogsFetchList.push(`${breed.toUpperCase()}-${type.toUpperCase()}`)
          );
        } else {
          dogsFetchList.push(breed.toUpperCase());
        }
        return dogsFetchList;
      });
    })
    .catch((error) => {
      throw error;
    });
  return dogsFetchList;
};

export const getDogsBreedImages = async (dog, option = "type") => {
  let dogBreedImagesFetchList = [];
  let dogToFetch = dog.toLowerCase().split("-")[0];
  await fetch(`https://dog.ceo/api/breed/${dogToFetch}/images`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      if (option === "type") {
        dogBreedImagesFetchList = data.message.filter((image) =>
          image.includes(dog.toLowerCase())
        );
      } else {
        dogBreedImagesFetchList = data.message;
      }
    })
    .catch((error) => {
      throw error;
    });
  return dogBreedImagesFetchList;
};
