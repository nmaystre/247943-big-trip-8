import moment from 'moment';

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getSeveralItems = (sourceArray, neededElements) => {
  const result = [];
  for (let i = 0; i < neededElements; i++) {
    result.push(sourceArray[Math.floor(getRandomNumber(0, sourceArray.length))]);
  }
  return result;
};

const getRandomTime = () => {
  return moment().hour(getRandomNumber(0, 24)).minute(getRandomNumber(0, 59));
};

export {getRandomNumber, getSeveralItems, getRandomTime};
