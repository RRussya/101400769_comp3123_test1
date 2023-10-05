const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (inputArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(inputArray)) {
      reject('Input is not an array');
      return;
    }

    const filteredLowerCaseWords = inputArray
      .filter((item) => typeof item === 'string')
      .map((word) => word.toLowerCase());

    if (filteredLowerCaseWords.length === 0) {
      reject('No lowercase words found in the input array');
    } else {
      resolve(filteredLowerCaseWords);
    }
  });
};

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });