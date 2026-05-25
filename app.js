// My Cinemizaaj Mood to movie App it uses api from TMDB ...
const baseUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";

// for select btn
let btn = document.querySelector("#happy-btn");
let btn2 = document.querySelector("#thrilled-btn");
let btn3 = document.querySelector("#romance-btn");
let btn4 = document.querySelector("#chill-btn");
let btn5 = document.querySelector("#gol-era-btn");

// creating async funtion
async function MoodsLogic(genreId, maxYear = "") {
  try {
    let dynamicUrl = `https://api.themoviedb.org/3/discover/movie?api_key=23d19ec4c6bf98af2236c985df444392&with_original_language=hi&with_genres=${genreId}`;

    if (maxYear !== "") {
      dynamicUrl = dynamicUrl + `&primary_release_date.lte=${maxYear}-12-31`;
    }

    let result = await axios.get(dynamicUrl);
    return result.data;
  } catch (err) {
    console.log("Error :", err);
  }
}

// now the btn Cheerful logic
btn.addEventListener("click", async () => {
  //  the random number generator we will use to generate the random indexes
  let ans = await MoodsLogic(35);
  let randomIndex = Math.floor(Math.random() * ans.results.length); // first card
  let randomIndex2 = Math.floor(Math.random() * ans.results.length); // second card
  let randomIndex3 = Math.floor(Math.random() * ans.results.length); // Third card
  console.log(ans);

  //  for google searches #mov1 card1
  let cardSearch = document.querySelector("#mov1");
  cardSearch.style.cursor = "pointer";
  cardSearch.onclick = () => {
    let movieName = ans.results[randomIndex].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName + " movie");
    window.open(googleLink, "_blank");
  };

  //  for google searches #mov2 card2
  let cardSearch2 = document.querySelector("#mov2");
  cardSearch2.style.cursor = "pointer";
  cardSearch2.onclick = () => {
    let movieName2 = ans.results[randomIndex2].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName2 + " movie");
    window.open(googleLink, "_blank");
  };

  //  for google searches #mov3 card3
  let cardSearch3 = document.querySelector("#mov3");
  cardSearch3.style.cursor = "pointer";
  cardSearch3.onclick = () => {
    let movieName3 = ans.results[randomIndex3].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName3 + " movie");
    window.open(googleLink, "_blank");
  };

  //  if same random number comes again
  while (randomIndex2 === randomIndex) {
    randomIndex2 = Math.floor(Math.random() * ans.results.length);
  }
  //  now for random number index 3
  while (randomIndex3 === randomIndex || randomIndex3 === randomIndex2) {
    randomIndex3 = Math.floor(Math.random() * ans.results.length);
  }

  // for Card 1 -------------------------------------------------

  //  changing in titles
  let cardTitle = document.querySelector("#mov1 .movie-title");
  cardTitle.innerText = ans.results[randomIndex].title;

  // card image
  let cardImage = document.querySelector("#mov1 .pos-img1");
  cardImage.src = imgUrl + ans.results[randomIndex].poster_path;

  // card overview
  let cardOverview = document.querySelector("#mov1 .movie-desc");
  cardOverview.innerText = ans.results[randomIndex].overview;
  //  card year
  let cardYear = document.querySelector("#mov1 .movie-years");
  cardYear.innerText = ans.results[randomIndex].release_date;

  // for Card 2 ---------------------------------------------------

  let cardTitle2 = document.querySelector("#mov2 .movie-title");
  cardTitle2.innerText = ans.results[randomIndex2].title;

  // card image
  let cardImage2 = document.querySelector("#mov2 .pos-img2");
  cardImage2.src = imgUrl + ans.results[randomIndex2].poster_path;

  // card overview
  let cardOverview2 = document.querySelector("#mov2 .movie-desc");
  cardOverview2.innerText = ans.results[randomIndex2].overview;
  //  card year
  let cardYear2 = document.querySelector("#mov2 .movie-years");
  cardYear2.innerText = ans.results[randomIndex2].release_date;

  // for Card 3 ---------------------------------------------------

  let cardTitle3 = document.querySelector("#mov3 .movie-title");
  cardTitle3.innerText = ans.results[randomIndex3].title;

  // card image
  let cardImage3 = document.querySelector("#mov3 .pos-img3");
  cardImage3.src = imgUrl + ans.results[randomIndex3].poster_path;

  // card overview
  let cardOverview3 = document.querySelector("#mov3 .movie-desc");
  cardOverview3.innerText = ans.results[randomIndex3].overview;
  //  card year
  let cardYear3 = document.querySelector("#mov3 .movie-years");
  cardYear3.innerText = ans.results[randomIndex3].release_date;

  //  this will redirect on google search
});

// ---------------------------------------------------------------------------------------

// now the btn thrilled-btn logic
btn2.addEventListener("click", async () => {
  //  the random number generator we will use to generate the random indexes
  let ans = await MoodsLogic(53); // pasing genre
  let randomIndex = Math.floor(Math.random() * ans.results.length); // first card
  let randomIndex2 = Math.floor(Math.random() * ans.results.length); // second card
  let randomIndex3 = Math.floor(Math.random() * ans.results.length); // Third card
  console.log(ans);

  //  for google searches #mov1 card1
  let cardSearch = document.querySelector("#mov1");
  cardSearch.style.cursor = "pointer";
  cardSearch.onclick = () => {
    let movieName = ans.results[randomIndex].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName + " movie");
    window.open(googleLink, "_blank");
  };

  //  for google searches #mov2 card2
  let cardSearch2 = document.querySelector("#mov2");
  cardSearch2.style.cursor = "pointer";
  cardSearch2.onclick = () => {
    let movieName2 = ans.results[randomIndex2].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName2 + " movie");
    window.open(googleLink, "_blank");
  };

  //  for google searches #mov3 card3
  let cardSearch3 = document.querySelector("#mov3");
  cardSearch3.style.cursor = "pointer";
  cardSearch3.onclick = () => {
    let movieName3 = ans.results[randomIndex3].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName3 + " movie");
    window.open(googleLink, "_blank");
  };

  //  if same random number comes again
  while (randomIndex2 === randomIndex) {
    randomIndex2 = Math.floor(Math.random() * ans.results.length);
  }
  //  now for random number index 3
  while (randomIndex3 === randomIndex || randomIndex3 === randomIndex2) {
    randomIndex3 = Math.floor(Math.random() * ans.results.length);
  }

  // for Card 1 -------------------------------------------------

  //  changing in titles
  let cardTitle = document.querySelector("#mov1 .movie-title");
  cardTitle.innerText = ans.results[randomIndex].title;

  // card image
  let cardImage = document.querySelector("#mov1 .pos-img1");
  cardImage.src = imgUrl + ans.results[randomIndex].poster_path;

  // card overview
  let cardOverview = document.querySelector("#mov1 .movie-desc");
  cardOverview.innerText = ans.results[randomIndex].overview;
  //  card year
  let cardYear = document.querySelector("#mov1 .movie-years");
  cardYear.innerText = ans.results[randomIndex].release_date;

  // for Card 2 ---------------------------------------------------

  let cardTitle2 = document.querySelector("#mov2 .movie-title");
  cardTitle2.innerText = ans.results[randomIndex2].title;

  // card image
  let cardImage2 = document.querySelector("#mov2 .pos-img2");
  cardImage2.src = imgUrl + ans.results[randomIndex2].poster_path;

  // card overview
  let cardOverview2 = document.querySelector("#mov2 .movie-desc");
  cardOverview2.innerText = ans.results[randomIndex2].overview;
  //  card year
  let cardYear2 = document.querySelector("#mov2 .movie-years");
  cardYear2.innerText = ans.results[randomIndex2].release_date;

  // for Card 3 ---------------------------------------------------

  let cardTitle3 = document.querySelector("#mov3 .movie-title");
  cardTitle3.innerText = ans.results[randomIndex3].title;

  // card image
  let cardImage3 = document.querySelector("#mov3 .pos-img3");
  cardImage3.src = imgUrl + ans.results[randomIndex3].poster_path;

  // card overview
  let cardOverview3 = document.querySelector("#mov3 .movie-desc");
  cardOverview3.innerText = ans.results[randomIndex3].overview;
  //  card year
  let cardYear3 = document.querySelector("#mov3 .movie-years");
  cardYear3.innerText = ans.results[randomIndex3].release_date;

  //  this will redirect on google search
});

// now the romance-btn logic

btn3.addEventListener("click", async () => {
  //  the random number generator we will use to generate the random indexes
  let ans = await MoodsLogic(10749); // pasing genre
  let randomIndex = Math.floor(Math.random() * ans.results.length); // first card
  let randomIndex2 = Math.floor(Math.random() * ans.results.length); // second card
  let randomIndex3 = Math.floor(Math.random() * ans.results.length); // Third card
  console.log(ans);

  //  for google searches #mov1 card1
  let cardSearch = document.querySelector("#mov1");
  cardSearch.style.cursor = "pointer";
  cardSearch.onclick = () => {
    let movieName = ans.results[randomIndex].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName + " movie");
    window.open(googleLink, "_blank");
  };

  //  for google searches #mov2 card2
  let cardSearch2 = document.querySelector("#mov2");
  cardSearch2.style.cursor = "pointer";
  cardSearch2.onclick = () => {
    let movieName2 = ans.results[randomIndex2].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName2 + " movie");
    window.open(googleLink, "_blank");
  };

  //  for google searches #mov3 card3
  let cardSearch3 = document.querySelector("#mov3");
  cardSearch3.style.cursor = "pointer";
  cardSearch3.onclick = () => {
    let movieName3 = ans.results[randomIndex3].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName3 + " movie");
    window.open(googleLink, "_blank");
  };

  //  if same random number comes again
  while (randomIndex2 === randomIndex) {
    randomIndex2 = Math.floor(Math.random() * ans.results.length);
  }
  //  now for random number index 3
  while (randomIndex3 === randomIndex || randomIndex3 === randomIndex2) {
    randomIndex3 = Math.floor(Math.random() * ans.results.length);
  }

  // for Card 1 -------------------------------------------------

  //  changing in titles
  let cardTitle = document.querySelector("#mov1 .movie-title");
  cardTitle.innerText = ans.results[randomIndex].title;

  // card image
  let cardImage = document.querySelector("#mov1 .pos-img1");
  cardImage.src = imgUrl + ans.results[randomIndex].poster_path;

  // card overview
  let cardOverview = document.querySelector("#mov1 .movie-desc");
  cardOverview.innerText = ans.results[randomIndex].overview;
  //  card year
  let cardYear = document.querySelector("#mov1 .movie-years");
  cardYear.innerText = ans.results[randomIndex].release_date;

  // for Card 2 ---------------------------------------------------

  let cardTitle2 = document.querySelector("#mov2 .movie-title");
  cardTitle2.innerText = ans.results[randomIndex2].title;

  // card image
  let cardImage2 = document.querySelector("#mov2 .pos-img2");
  cardImage2.src = imgUrl + ans.results[randomIndex2].poster_path;

  // card overview
  let cardOverview2 = document.querySelector("#mov2 .movie-desc");
  cardOverview2.innerText = ans.results[randomIndex2].overview;
  //  card year
  let cardYear2 = document.querySelector("#mov2 .movie-years");
  cardYear2.innerText = ans.results[randomIndex2].release_date;

  // for Card 3 ---------------------------------------------------

  let cardTitle3 = document.querySelector("#mov3 .movie-title");
  cardTitle3.innerText = ans.results[randomIndex3].title;

  // card image
  let cardImage3 = document.querySelector("#mov3 .pos-img3");
  cardImage3.src = imgUrl + ans.results[randomIndex3].poster_path;

  // card overview
  let cardOverview3 = document.querySelector("#mov3 .movie-desc");
  cardOverview3.innerText = ans.results[randomIndex3].overview;
  //  card year
  let cardYear3 = document.querySelector("#mov3 .movie-years");
  cardYear3.innerText = ans.results[randomIndex3].release_date;

  //  this will redirect on google search
});

// now the chilling-btn logic

btn4.addEventListener("click", async () => {
  //  the random number generator we will use to generate the random indexes
  let ans = await MoodsLogic(10751); // pasing genre
  let randomIndex = Math.floor(Math.random() * ans.results.length); // first card
  let randomIndex2 = Math.floor(Math.random() * ans.results.length); // second card
  let randomIndex3 = Math.floor(Math.random() * ans.results.length); // Third card
  console.log(ans);

  //  for google searches #mov1 card1
  let cardSearch = document.querySelector("#mov1");
  cardSearch.style.cursor = "pointer";
  cardSearch.onclick = () => {
    let movieName = ans.results[randomIndex].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName + " movie");
    window.open(googleLink, "_blank");
  };

  //  for google searches #mov2 card2
  let cardSearch2 = document.querySelector("#mov2");
  cardSearch2.style.cursor = "pointer";
  cardSearch2.onclick = () => {
    let movieName2 = ans.results[randomIndex2].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName2 + " movie");
    window.open(googleLink, "_blank");
  };

  //  for google searches #mov3 card3
  let cardSearch3 = document.querySelector("#mov3");
  cardSearch3.style.cursor = "pointer";
  cardSearch3.onclick = () => {
    let movieName3 = ans.results[randomIndex3].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName3 + " movie");
    window.open(googleLink, "_blank");
  };

  //  if same random number comes again
  while (randomIndex2 === randomIndex) {
    randomIndex2 = Math.floor(Math.random() * ans.results.length);
  }
  //  now for random number index 3
  while (randomIndex3 === randomIndex || randomIndex3 === randomIndex2) {
    randomIndex3 = Math.floor(Math.random() * ans.results.length);
  }

  // for Card 1 -------------------------------------------------

  //  changing in titles
  let cardTitle = document.querySelector("#mov1 .movie-title");
  cardTitle.innerText = ans.results[randomIndex].title;

  // card image
  let cardImage = document.querySelector("#mov1 .pos-img1");
  cardImage.src = imgUrl + ans.results[randomIndex].poster_path;

  // card overview
  let cardOverview = document.querySelector("#mov1 .movie-desc");
  cardOverview.innerText = ans.results[randomIndex].overview;
  //  card year
  let cardYear = document.querySelector("#mov1 .movie-years");
  cardYear.innerText = ans.results[randomIndex].release_date;

  // for Card 2 ---------------------------------------------------

  let cardTitle2 = document.querySelector("#mov2 .movie-title");
  cardTitle2.innerText = ans.results[randomIndex2].title;

  // card image
  let cardImage2 = document.querySelector("#mov2 .pos-img2");
  cardImage2.src = imgUrl + ans.results[randomIndex2].poster_path;

  // card overview
  let cardOverview2 = document.querySelector("#mov2 .movie-desc");
  cardOverview2.innerText = ans.results[randomIndex2].overview;
  //  card year
  let cardYear2 = document.querySelector("#mov2 .movie-years");
  cardYear2.innerText = ans.results[randomIndex2].release_date;

  // for Card 3 ---------------------------------------------------

  let cardTitle3 = document.querySelector("#mov3 .movie-title");
  cardTitle3.innerText = ans.results[randomIndex3].title;

  // card image
  let cardImage3 = document.querySelector("#mov3 .pos-img3");
  cardImage3.src = imgUrl + ans.results[randomIndex3].poster_path;

  // card overview
  let cardOverview3 = document.querySelector("#mov3 .movie-desc");
  cardOverview3.innerText = ans.results[randomIndex3].overview;
  //  card year
  let cardYear3 = document.querySelector("#mov3 .movie-years");
  cardYear3.innerText = ans.results[randomIndex3].release_date;

  //  this will redirect on google search
});

// now the gol-era-btn logic
btn5.addEventListener("click", async () => {
  //  the random number generator we will use to generate the random indexes
  let ans = await MoodsLogic(10749, "1990"); // pasing genre
  let randomIndex = Math.floor(Math.random() * ans.results.length); // first card
  let randomIndex2 = Math.floor(Math.random() * ans.results.length); // second card
  let randomIndex3 = Math.floor(Math.random() * ans.results.length); // Third card
  console.log(ans);

  //  for google searches #mov1 card1
  let cardSearch = document.querySelector("#mov1");
  cardSearch.style.cursor = "pointer";
  cardSearch.onclick = () => {
    let movieName = ans.results[randomIndex].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName + " movie");
    window.open(googleLink, "_blank");
  };

  //  for google searches #mov2 card2
  let cardSearch2 = document.querySelector("#mov2");
  cardSearch2.style.cursor = "pointer";
  cardSearch2.onclick = () => {
    let movieName2 = ans.results[randomIndex2].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName2 + " movie");
    window.open(googleLink, "_blank");
  };

  //  for google searches #mov3 card3
  let cardSearch3 = document.querySelector("#mov3");
  cardSearch3.style.cursor = "pointer";
  cardSearch3.onclick = () => {
    let movieName3 = ans.results[randomIndex3].title;
    let googleLink =
      "https://www.google.com/search?q=" +
      encodeURIComponent(movieName3 + " movie");
    window.open(googleLink, "_blank");
  };

  //  if same random number comes again
  while (randomIndex2 === randomIndex) {
    randomIndex2 = Math.floor(Math.random() * ans.results.length);
  }
  //  now for random number index 3
  while (randomIndex3 === randomIndex || randomIndex3 === randomIndex2) {
    randomIndex3 = Math.floor(Math.random() * ans.results.length);
  }

  // for Card 1 -------------------------------------------------

  //  changing in titles
  let cardTitle = document.querySelector("#mov1 .movie-title");
  cardTitle.innerText = ans.results[randomIndex].title;

  // card image
  let cardImage = document.querySelector("#mov1 .pos-img1");
  cardImage.src = imgUrl + ans.results[randomIndex].poster_path;

  // card overview
  let cardOverview = document.querySelector("#mov1 .movie-desc");
  cardOverview.innerText = ans.results[randomIndex].overview;
  //  card year
  let cardYear = document.querySelector("#mov1 .movie-years");
  cardYear.innerText = ans.results[randomIndex].release_date;

  // for Card 2 ---------------------------------------------------

  let cardTitle2 = document.querySelector("#mov2 .movie-title");
  cardTitle2.innerText = ans.results[randomIndex2].title;

  // card image
  let cardImage2 = document.querySelector("#mov2 .pos-img2");
  cardImage2.src = imgUrl + ans.results[randomIndex2].poster_path;

  // card overview
  let cardOverview2 = document.querySelector("#mov2 .movie-desc");
  cardOverview2.innerText = ans.results[randomIndex2].overview;
  //  card year
  let cardYear2 = document.querySelector("#mov2 .movie-years");
  cardYear2.innerText = ans.results[randomIndex2].release_date;

  // for Card 3 ---------------------------------------------------

  let cardTitle3 = document.querySelector("#mov3 .movie-title");
  cardTitle3.innerText = ans.results[randomIndex3].title;

  // card image
  let cardImage3 = document.querySelector("#mov3 .pos-img3");
  cardImage3.src = imgUrl + ans.results[randomIndex3].poster_path;

  // card overview
  let cardOverview3 = document.querySelector("#mov3 .movie-desc");
  cardOverview3.innerText = ans.results[randomIndex3].overview;
  //  card year
  let cardYear3 = document.querySelector("#mov3 .movie-years");
  cardYear3.innerText = ans.results[randomIndex3].release_date;

  //  this will redirect on google search
});
// ------------------------------------------------------------------------------------------
// made by ABhishek ...
