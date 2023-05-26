const createOptions = data => {
  return data
    .map(({ image: { id } = { id: 'none' }, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
};

export { createOptions };
