import { fetchCatByBreed } from './cat-api';
import { refs } from './takingRefs';
import { toggleHidden } from './toggleHidden';
import { onError } from './onError';

const { output, loader } = refs;

const createMarkupOfOneItem = ({ breeds, url }) => {
  const { name, description, temperament } = breeds[0];

  output.innerHTML = `
    <img class="cat-img" src="${url}" alt="${name}" width="500" />
      <div class="cat-info-inner">
        <h2 class="cat-info-title">${name}</h2>
        <p class="cat-info-text">${description}</p>
        <p class="cat-info-text"><b>Temperament: </b>${temperament}</p>
      </div>`;
};

const onSelect = option => {
  toggleHidden(output);
  toggleHidden(loader);

  fetchCatByBreed(option.value)
    .then(cat => {
      toggleHidden(loader);
      toggleHidden(output);

      createMarkupOfOneItem(cat);
    })
    .catch(onError);
};

export { onSelect };
