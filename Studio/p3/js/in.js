
console.log("Hello, films");

var Airtable = require('airtable');

//is airtable connected
console.log(Airtable);

//connect to the specific airtable
var base = new Airtable({apiKey: 'keyVR9gMz8aVRITLz'}).base('appXP0LvY0ZNgXaWo');

base("films")
  .select({}).eachPage(gotPageOfFilms, gotAllFilms);

  var films = [];

  function gotPageOfFilms(records, fetchNextPage) {
    console.log("gotPageOfFilms()");
    // add the records from this page to our array
    films.push(...records);
    // request more pages
    fetchNextPage();
  }

    // call back function that is called when all pages are loaded
    function gotAllFilms(err) {
    console.log("gotAllFilms()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogFilms();
    showFilms();
  }
  
  function consoleLogFilms() {
    console.log("consoleLogFilms()");
    films.forEach(films => {
      console.log("films", films);
    });
  }

    // look through our airtable data, create elements
    function showFilms() {
    console.log("showFilms()");
    films.forEach((films) => {


      // create container for each song adding new class tages, determine whether the object is in the .container or not
      //innerText or img
      var filmsContainer = document.createElement("div"); 
      filmsContainer.classList.add("films-container")
      document.querySelector(".container").append(filmsContainer);
      console.log('filmsContainer');
      
      // add song titles
      var filmsTitle = document.createElement("h1");
      filmsTitle.innerText = films.fields.film_title;
      filmsTitle.classList.add("films-title");
      filmsContainer.append(filmsTitle);
      console.log('filmsTitle');

      var horrorGenre = films.fields.genre;
      horrorGenre.forEach(function(genre){
        filmsContainer.classList.add(genre);
      });


      var filmsImage = document.createElement("img");
      filmsImage.src = films.fields.shots[0].url;
      filmsImage.classList.add("films-image");
      filmsContainer.append(filmsImage);
      console.log('filmsImage');



      var filmsDirector = document.createElement("h1");
      filmsDirector.innerText = films.fields.director;
      filmsDirector.classList.add("films-director");
      filmsContainer.append(filmsDirector);
      console.log('filmsDirector');

      var filmsDate = document.createElement("h2");
      filmsDate.innerText = films.fields.date_released;
      filmsDate.classList.add("films-date");
      filmsContainer.append(filmsDate);
      console.log('filmsDate');



      titleFilter();

      function titleFilter() {
        if (filmsContainer.classList.contains("indie")) {
          filmsContainer.style.display = "block";
        } else {
          filmsContainer.style.display = "none";
        }
      }

      filmsTitle.onclick = function(){
        filmsTitle.style.cursor = "pointer";
        filmsImage.style.display = "block";
        filmsDirector.style.display = "block";
        filmsDate.style.display = "block";
      }

      filmsTitle.onmouseover = function(){
        filmsTitle.style.cursor = "pointer";
        filmsTitle.style.display = "none";
        filmsDirector.style.display = "block";
      }

      filmsTitle.onmouseleave = function(){
        filmsTitle.style.cursor = "pointer";
        filmsTitle.style.display = "block";
        filmsDirector.style.display = "none";
      }
      

      filmsImage.onclick = function(){
        filmsTitle.style.cursor = "pointer";
        filmsImage.style.display = "none";
        filmsDate.style.display = "none";
      }
      var personalFilms = films.fields.personal;
      personalFilms.forEach(function(personal){
        filmsContainer.classList.add(personal);
      })

      var watchFilms = document.querySelector('.watch');
      watchFilms.addEventListener("click", function(){

        if (filmsContainer.classList.contains("watch")){
          filmsContainer.style.background = "red";
        }  else {filmsContainer.style.background = "none";
      }
      })

      var shotFilms = document.querySelector('.shot');
      shotFilms.addEventListener("click", function(){

        if (filmsContainer.classList.contains("fav")){
          filmsContainer.style.background = "red";
        }  else {filmsContainer.style.background = "none";
      }
      })
      var expFilms = document.querySelector('.exp');
      expFilms.addEventListener("click", function(){

        if (filmsContainer.classList.contains("exp")){
          filmsContainer.style.background = "red";
        }  else {filmsContainer.style.background = "none";
      }
      })

      var resetFilms = document.querySelector('.reset');
      resetFilms.addEventListener("click", function(){
        filmsContainer.style.background = "none";
      })
      

    });
  }