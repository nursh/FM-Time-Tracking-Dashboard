const uri = 'https://nursh.github.io/FM-Time-Tracking-Dashboard/data.json';

fetch('./data.json')
  .then(response => response.json())
  .then(data => console.log(data))