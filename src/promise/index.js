const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Whoops!');
    }
  });
};
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Hey!');
      }, 2000);
    } else {
      const error = new Error('Whoops!');
      reject(error);
    }
  });
};

// somethingWillHappen()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// somethingWillHappen2()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log('Arryay of results', response);
  })
  .catch((err) => {
    console.error(err);
  });
