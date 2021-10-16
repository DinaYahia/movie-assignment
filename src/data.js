let data = {};
let dataDisplayHtml = "";

const dataDisplayElement = document.getElementById("data-display");
const dataTitle = document.getElementById("title");
const dataYear = document.getElementById("year");
const dataMovieImage = document.getElementById("movieImageDiv");
const dataSummaryMovie = document.getElementById("summaryMovie")

const urlSearchParams = new URLSearchParams(window.location.search);
data = Object.fromEntries(urlSearchParams.entries());

function displayData() {
  Object.entries(data).forEach((pair) => {
    const key = pair[0];
    const value = pair[1];

    if(key == "title"){
      dataTitle.innerHTML += `<p id="title">${value} Movie</p>`;
    }
    else if(key == "productionYear"){
      dataYear.innerHTML += `<p id="yearProd">It was produced in <strong> ${value} </strong> </p>`;
    }
    else if(key == "leadActor"){
      dataDisplayElement.innerHTML += `<p>The Lead Actor is <strong> ${value} </strong> </p>`;
    }
    else if(key == "producerName"){
      dataDisplayElement.innerHTML += `<p>The Producer Name is <strong> ${value} </strong> </p>`;
    }
    else if(key == "summary"){
      dataSummaryMovie.innerHTML += `<p id="movieSummary">${value}</p>`;
    }
    else{
      dataMovieImage.innerHTML +=""+ `<img id="moviePoster" src="./${value}">`;
    }
  });
}

displayData();