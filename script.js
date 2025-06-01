const uri = "https://nursh.github.io/FM-Time-Tracking-Dashboard/data.json";

const reportDetails = document.querySelector(".report-details");
const reportDuration = document.querySelector(".report-duration");
const durationLinks = reportDuration.querySelectorAll("a");
let currentActiveLink = reportDuration.querySelector(".active");

let reportData = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch(uri)
    .then((response) => response.json())
    .then((data) => {
      reportData = data;
      main(currentActiveLink.textContent.toLowerCase());
    });

  durationLinks.forEach((link) => {
    link.addEventListener("click", function () {
      currentActiveLink = reportDuration.querySelector(".active");
      currentActiveLink.setAttribute("class", "");
      this.setAttribute("class", "active");
      main(this.textContent.toLowerCase());
    });
  });
});


function main(selectedDuration) {
  reportDetails.innerHTML = '';
  const filteredData = getDisplayDetails(selectedDuration);
  appendDetails(filteredData);
}

function getDisplayDetails(timeFrame) {
  return reportData.map(({ title, timeframes }) => ({
      title,
      current: timeframes[timeFrame]["current"],
      previous: timeframes[timeFrame]["previous"]
    })
  );
}

function appendDetails(data) {
  data.forEach(({ title, current, previous }) => {
    reportDetails.innerHTML += `
      <article class="report-detail ${formatTitle(title)}">
        <div>
          <div class="report-title flex">
            <h2>${title}</h2>
            <img src="./images/icon-ellipsis.svg" alt="more report details" />
          </div>
          <div class="report-time flex">
            <h3>${current}hrs</h3>
            <p>Last Week  - ${previous}hrs</p>
          </div>
        </div>
      </article>
    `
  })
}

function formatTitle(title) {
  return title.replace(' ', '-').toLowerCase();
}
