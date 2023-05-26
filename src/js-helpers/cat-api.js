import { params } from './common';

const { BASE_URL, API_KEY, ENDPOINT } = params;

const fetchBreeds = () => {
  return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

const fetchCatByBreed = breedId => {
  return fetch(`${BASE_URL}/images/${breedId}?api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    }
  );
};

export { fetchBreeds, fetchCatByBreed };
