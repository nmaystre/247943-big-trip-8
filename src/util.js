import moment from 'moment';

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getSeveralItems = (sourceArray, neededElements) => {
  const result = [];
  const newArray = sourceArray.slice();

  for (let i = 0; i < neededElements; i++) {
    let randomItem = newArray[Math.floor(getRandomNumber(0, newArray.length))];
    result.push(randomItem);
    newArray.splice(randomItem, 1);
  }
  return result;
};

const getRandomTime = () => {
  return moment().hour(getRandomNumber(0, 24)).minute(getRandomNumber(0, 59));
};

export {getRandomNumber, getSeveralItems, getRandomTime};
