const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getSeveralItems = (sourceArray, neededElements) => {
  const result = [];
  for (let i = 0; i < neededElements; i++) {
    result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
  }
  return result;
};

export {getRandomNumber, getSeveralItems};
