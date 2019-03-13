const createEvent = (template) => {
  const newEvent = document.createElement(`div`);
  newEvent.innerHTML = template;
  return newEvent.firstChild;
};

export {
  createEvent
};
