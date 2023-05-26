import { refs } from './takingRefs';
import { createOptions } from './createOptions';
import { toggleHidden } from './toggleHidden';

const { breedSelect, loader } = refs;

const onApiLoad = data => {
  toggleHidden(loader);
  toggleHidden(breedSelect);

  breedSelect.innerHTML = createOptions(data);
};

export { onApiLoad };
