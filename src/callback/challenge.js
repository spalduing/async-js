const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character';
const fetchData = (url_api, callback) => {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + url_api);
        return callback(error, null);
      }
    }
  };

  xhttp.send();
};

fetchData(API, (err1, data1) => {
  if (err1) {
    return console.error(err1);
  }
  fetchData(API + '/' + data1.results[0].id, (err2, data2) => {
    if (err2) {
      return console.error(err2);
    }
    fetchData(data2.origin.url, (err3, data3) => {
      if (err3) {
        return console.error(err3);
      }
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
