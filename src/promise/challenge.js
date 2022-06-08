const fetchData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character';

const getData = async () => {
  try {
    const { results } = await fetchData(API);

    const { origin } = results[0];

    const { dimension } = await fetchData(origin.url);

    console.log({
      name: results[0].name,
      dimension,
    });
  } catch (error) {
    console.error(error);
  }
};

getData();

const getDataOverComplicated = async () => {
  const { results } = await fetchData(API)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });

  const { origin } = results[0];

  const { dimension } = await fetchData(origin.url)
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));

  console.log({
    name: results[0].name,
    dimension,
  });
};
