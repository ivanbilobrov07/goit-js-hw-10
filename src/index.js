import SlimSelect from 'slim-select';
import '../node_modules/slim-select/dist/slimselect.css';

import { fetchBreeds } from './js-helpers/cat-api';
import { refs } from './js-helpers/takingRefs';
import { onApiLoad } from './js-helpers/onApiLoad';
import { onSelect } from './js-helpers/onSelect';
import { onError } from './js-helpers/onError';

const { breedSelect } = refs;

fetchBreeds()
  .then(posts => {
    onApiLoad(posts);

    new SlimSelect({
      select: breedSelect,
      events: {
        afterChange: newVal => onSelect(newVal[0]),
      },
    });
  })
  .catch(onError);
