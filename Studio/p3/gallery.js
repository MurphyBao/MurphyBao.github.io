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
    showReco();
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
      var galleryContainer = document.createElement("div"); 
      galleryContainer.classList.add("gallery-container")
      document.querySelector(".g-container").append(galleryContainer);
      console.log('galleryContainer');
      
      // add song titles
     
    var gImage = document.createElement("img");
    gImage.src = films.fields.shots[0].url;
    gImage.classList.add("g-image");
    galleryContainer.append(gImage);
    console.log('gImage');
    

    var recolFilms = films.fields.recommend;
        recolFilms.forEach(function(recommend){
        galleryContainer.classList.add(recommend);
      })

      var mayaFilms = document.querySelector('.maya');
      mayaFilms.addEventListener("click", function(){

        if (galleryContainer.classList.contains("maya")){
            galleryContainer.style.display = "inline-block";
           
        }  else {galleryContainer.style.display = "none";
      }
      })

      var syFilms = document.querySelector('.sydney');
      syFilms.addEventListener("click", function(){

        if (galleryContainer.classList.contains("sydney")){
            galleryContainer.style.display = "inline-block";
           
        }  else {galleryContainer.style.display = "none";
      }
      })

      var alFilms = document.querySelector('.alex');
      alFilms.addEventListener("click", function(){

        if (galleryContainer.classList.contains("alex")){
            galleryContainer.style.display = "inline-block";
           
        }  else {galleryContainer.style.display = "none";
      }
      })

      var avaFilms = document.querySelector('.ava');
      avaFilms.addEventListener("click", function(){

        if (galleryContainer.classList.contains("ava")){
            galleryContainer.style.display = "inline-block";
           
        }  else {galleryContainer.style.display = "none";
      }
      })

      var liFilms = document.querySelector('.liam');
      liFilms.addEventListener("click", function(){

        if (galleryContainer.classList.contains("liam")){
            galleryContainer.style.display = "inline-block";
           
        }  else {galleryContainer.style.display = "none";
      }
      })

      var chFilms = document.querySelector('.charlotte');
      chFilms.addEventListener("click", function(){

        if (galleryContainer.classList.contains("charlotte")){
            galleryContainer.style.display = "inline-block";
           
        }  else {galleryContainer.style.display = "none";
      }
      })

      var jeFilms = document.querySelector('.jenna');
      jeFilms.addEventListener("click", function(){

        if (galleryContainer.classList.contains("jenna")){
            galleryContainer.style.display = "inline-block";
           
        }  else {galleryContainer.style.display = "none";
      }
      })

      var allFilms = document.querySelector('.allpics');
      allFilms.addEventListener("click", function(){
        galleryContainer.style.display = "inline-block";
      })


    

    });
  }


  //function showReco() {
   // console.log("showReco()");
    //films.forEach((films) => {

       // var recoFilter = films.fields.recommend;
        //recoFilter.forEach(function(recommend){
         // galleryContainer.classList.add(recommend);
        //})
  
        //var mayaReco = document.querySelector('.maya');
        //mayaReco.addEventListener("click", function(){
  
          //if (galleryContainer.classList.contains("maya")){
       //       galleryContainer.style.display = "block";
    //      }  else {galleryContainer.style.display = "none";
   //     }
  //      })
//
   // });
//}