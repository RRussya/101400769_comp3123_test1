const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = { message: 'delayed success!' };
      resolve(success);
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      try {
        throw new Error(`error: delayed exception`);
      } catch (e) {
        let error = { 'error': e.message };
        reject(error);
      }
    }, 500);
  });
};

resolvedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

rejectedPromise()
  .then((result) => {
    console.log(result); // This will not be called in this case
  })
  .catch((error) => {
    console.error(error);
  });