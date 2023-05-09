const searchButton = document.querySelector("#searchButton");
const movieCard = document.querySelector("#movieCard");
const movieID = document.querySelector("#movieCard");
const movieTitle = document.querySelector("#movieTitle");
const movieYear = document.querySelector("#movieYear");
const movieContainer = document.querySelector("#movieContainer");

searchButton.addEventListener("click", () => searchMovie());



async function searchMovie() {
    movieContainer.innerHTML = "";
  const searchbox = document.querySelector("#searchbox").value;
  const movieResults = await fetch(
    `http://www.omdbapi.com/?apikey=df320dc2&s=${searchbox}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }
  );
  const json = await movieResults.json();
  for (i = 0; i < json.Search.length; i++) {
    const movieCardDiv = document.createElement("div");
    const movieCardPhoto = document.createElement("img");
    movieCardPhoto.classList.add("movieReveal");
    const movieCardID = document.createElement("h3");
    const movieCardYear = document.createElement("h3");
    movieCardPhoto.src = `${json.Search[i].Poster}`;
    movieCardID.innerText = `${json.Search[i].Title}`;
    movieCardYear.innerText = `${json.Search[i].Year}`;
    movieCardDiv.append(movieCardPhoto, movieCardID, movieCardYear);
    movieContainer.append(movieCardDiv);
  }
  console.log(json);
}

// this gets details about one movie only
