const createEditEvent = (template) => {
  const newEditEvent = document.createElement(`div`);
  newEditEvent.innerHTML = template;
  return newEditEvent.firstChild;
};

export {
  createEditEvent
};
