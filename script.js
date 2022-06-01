const total_active_cases = document.querySelector('.active');
const total_confirm_cases = document.querySelector('.confirm');
const total_death_cases = document.querySelector('.deadth');
const total_recover_cases = document.querySelector('.recoveries');
const update_date = document.querySelectorAll('.last');
let table = document.querySelector('.tbody');

// data 
let i = 0;
fetch("https://data.covid19india.org/data.json")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    total_active_cases.textContent = data.statewise[0].active;
    total_confirm_cases.textContent = data.statewise[0].confirmed;
    total_death_cases.textContent = data.statewise[0].deaths;
    total_recover_cases.textContent = data.statewise[0].recovered;
    for (let i = 0; i < update_date.length; i++) {
      update_date[i].textContent = data.statewise[0].lastupdatedtime;
    }
    data.statewise.forEach(el => {
      if (i != 0) {
        let html = `<tr>
        <td>${i}</td>
        <td class="state-bold">${el.state}</td>
        <td>${el.active}</td>
        <td>${el.confirmed}</td>
        <td>${el.recovered}</td>
        <td>${el.deaths}</td>
        </tr>`;
        table.insertAdjacentHTML("beforeend", html);
      }
      i++;
    });
  });
// end of data 

// map 
loadNearbyCovidCentresMapmyIndiaDiv(document.getElementById("nearby-covid-places-mapmyindia"), { css: "https://maps.mapmyindia.com/covid-places/css/custom.css" });
MapmyIndia.covidRemove();
// end of map