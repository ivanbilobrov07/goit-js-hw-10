import { params } from './common';

const { BASE_URL, API_KEY, ENDPOINT } = params;

const fetchBreeds = async () => {
  const response = await fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
};

const fetchCatByBreed = async breedId => {
  const response = await fetch(
    `${BASE_URL}/images/${breedId}?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
};

export { fetchBreeds, fetchCatByBreed };
