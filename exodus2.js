

const notitle = document.getElementById('title')
notitle.addEventListener("click", klikanie);

function klikanie() {   
  var hide = document.getElementById('title')
  var main = document.getElementById('mainpage')
  var sekcja = document.getElementById('sekcja1')
  var body = document.body;


  sekcja.classList.remove("show");
  
    setTimeout(function() {
        sekcja.style.display = "none";
    }, 1000);

  body.classList.add("hidebody");
  
    setTimeout(function() {
        main.style.display = "grid";
        main.style.visibility = "visible";
        main.classList.add("mainpageblack");
    }, 2000);
  
  
  console.log('started');

}