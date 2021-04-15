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
      })





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
        if (filmsContainer.classList.contains("horror")) {
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
          filmsContainer.style.background = "blue";
          watchFilms.style.background = "blue";
          shotFilms.style.background = "none";
          expFilms.style.background = "none";
        }  else {filmsContainer.style.background = "none";
      }
      })

      var shotFilms = document.querySelector('.shot');
      shotFilms.addEventListener("click", function(){

        if (filmsContainer.classList.contains("fav")){
          filmsContainer.style.background = "red";
          shotFilms.style.background = "red";
          watchFilms.style.background = "none";
          expFilms.style.background = "none";
        }  else {filmsContainer.style.background = "none";
      }
      })
      var expFilms = document.querySelector('.exp');
      expFilms.addEventListener("click", function(){

        if (filmsContainer.classList.contains("exp")){
          filmsContainer.style.background = "orange";
          expFilms.style.background = "orange";
          watchFilms.style.background = "none";
          shotFilms.style.background = "none";
        }  else {filmsContainer.style.background = "none";
      }
      })

      var resetFilms = document.querySelector('.reset');
      resetFilms.addEventListener("click", function(){
        filmsContainer.style.background = "none";
        expFilms.style.background = "none";
          watchFilms.style.background = "none";
          shotFilms.style.background = "none";
      })
      
      

    });
  }















var imgs = document.getElementsByClassName("imgs")[0];
var adcato = document.getElementsByClassName("adcato")[0];
var imgs2 = document.getElementsByClassName("imgs2")[0];
var comecato =  document.getElementsByClassName("comecato")[0];
var romancato =  document.getElementsByClassName("romancato")[0];
var dracato =  document.getElementsByClassName("dracato")[0];
var imgs3 = document.getElementsByClassName("imgs3")[0];
var imgs4 = document.getElementsByClassName("imgs4")[0];
var imgs5 = document.getElementsByClassName("imgs5")[0];
var cricato =  document.getElementsByClassName("cricato")[0];
var muccato =  document.getElementsByClassName("muccato")[0];
var imgs6 = document.getElementsByClassName("imgs6")[0];
var horcato =  document.getElementsByClassName("horcato")[0];
var imgs7 = document.getElementsByClassName("imgs7")[0];
var incato =  document.getElementsByClassName("incato")[0];
var imgs8 = document.getElementsByClassName("imgs8")[0];
var fancato =  document.getElementsByClassName("fancato")[0];
var imgs9 = document.getElementsByClassName("imgs9")[0];
var scicato =  document.getElementsByClassName("scicato")[0];
var imgs10 = document.getElementsByClassName("imgs10")[0];

adcato.onmouseover = function(){
  imgs.style.display = "block";
  imgs.style.display = "flex";
  imgs2.style.display = "none";
  imgs3.style.display = "none";
  imgs4.style.display = "none";
  imgs5.style.display = "none";
  imgs6.style.display = "none";
  imgs7.style.display = "none";
  imgs8.style.display = "none";
  imgs9.style.display = "none";
  imgs10.style.display = "none";
}

comecato.onmouseover = function(){
  imgs2.style.display = "block";
  imgs2.style.display = "flex";
  imgs.style.display = "none";
  imgs3.style.display = "none";
  imgs4.style.display = "none";
  imgs5.style.display = "none";
  imgs6.style.display = "none";
  imgs7.style.display = "none";
  imgs8.style.display = "none";
  imgs9.style.display = "none";
  imgs10.style.display = "none";
}

dracato.onmouseover = function(){
  imgs3.style.display = "block";
  imgs3.style.display = "flex";
  imgs2.style.display = "none";
  imgs.style.display = "none";
  imgs4.style.display = "none";
  imgs5.style.display = "none";
  imgs6.style.display = "none";
  imgs7.style.display = "none";
  imgs8.style.display = "none";
  imgs9.style.display = "none";
  imgs10.style.display = "none";
}

romancato.onmouseover = function(){
  imgs4.style.display = "block";
  imgs4.style.display = "flex";
  imgs2.style.display = "none";
  imgs3.style.display = "none";
  imgs.style.display = "none";
  imgs5.style.display = "none";
  imgs6.style.display = "none";
  imgs7.style.display = "none";
  imgs8.style.display = "none";
  imgs9.style.display = "none";
  imgs10.style.display = "none";
}

cricato.onmouseover = function(){
  imgs5.style.display = "block";
  imgs5.style.display = "flex";
  imgs2.style.display = "none";
  imgs3.style.display = "none";
  imgs4.style.display = "none";
  imgs.style.display = "none";
  imgs6.style.display = "none";
  imgs7.style.display = "none";
  imgs8.style.display = "none";
  imgs9.style.display = "none";
  imgs10.style.display = "none";
}

muccato.onmouseover = function(){
  imgs6.style.display = "block";
  imgs6.style.display = "flex";
  imgs2.style.display = "none";
  imgs3.style.display = "none";
  imgs4.style.display = "none";
  imgs5.style.display = "none";
  imgs.style.display = "none";
  imgs7.style.display = "none";
  imgs8.style.display = "none";
  imgs9.style.display = "none";
  imgs10.style.display = "none";
}

horcato.onmouseover = function(){
  imgs7.style.display = "block";
  imgs7.style.display = "flex";
  imgs2.style.display = "none";
  imgs3.style.display = "none";
  imgs4.style.display = "none";
  imgs5.style.display = "none";
  imgs6.style.display = "none";
  imgs.style.display = "none";
  imgs8.style.display = "none";
  imgs9.style.display = "none";
  imgs10.style.display = "none";
}

incato.onmouseover = function(){
  imgs8.style.display = "block";
  imgs8.style.display = "flex";
  imgs2.style.display = "none";
  imgs3.style.display = "none";
  imgs4.style.display = "none";
  imgs5.style.display = "none";
  imgs6.style.display = "none";
  imgs7.style.display = "none";
  imgs.style.display = "none";
  imgs9.style.display = "none";
  imgs10.style.display = "none";
}

fancato.onmouseover = function(){
  imgs9.style.display = "block";
  imgs9.style.display = "flex";
  imgs2.style.display = "none";
  imgs3.style.display = "none";
  imgs4.style.display = "none";
  imgs5.style.display = "none";
  imgs6.style.display = "none";
  imgs7.style.display = "none";
  imgs8.style.display = "none";
  imgs.style.display = "none";
  imgs10.style.display = "none";
}

scicato.onmouseover = function(){
  imgs10.style.display = "block";
  imgs10.style.display = "flex";
  imgs2.style.display = "none";
  imgs3.style.display = "none";
  imgs4.style.display = "none";
  imgs5.style.display = "none";
  imgs6.style.display = "none";
  imgs7.style.display = "none";
  imgs8.style.display = "none";
  imgs9.style.display = "none";
  imgs.style.display = "none";
}














