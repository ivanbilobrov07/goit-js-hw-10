import Notiflix from 'notiflix';

import { toggleHidden } from './toggleHidden';
import { refs } from './takingRefs';

const { loader } = refs;

const onError = () => {
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!'
  );
  toggleHidden(loader);
};

export { onError };
