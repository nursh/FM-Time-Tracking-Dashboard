const uri = 'https://nursh.github.io/FM-Time-Tracking-Dashboard/data.json';


const reportDetails = document.querySelector('.report-details');
const reportDuration = document.querySelector('.report-duration');
const durationLinks = reportDuration.querySelectorAll('a');
const activeDuration = reportDuration.querySelector('.active');

let reportData = [];

document.addEventListener('DOMContentLoaded', () => {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => reportData = data);

  durationLinks.forEach(link => {
    link.addEventListener('click', function () {
      const currentActiveLink = reportDuration.querySelector('.active');
      currentActiveLink.setAttribute('class', '');
      this.setAttribute('class', 'active');
    })
  })
});

function displayDetails() {
  
}
