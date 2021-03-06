let poeni=0;
let brojac=0;
var pitanja;
let timer=20;
var ime;
document.getElementById("poeni").innerHTML = poeni.toString();
$('.pitanja').hide();

fetch('quiz.json').then(function(response){
    return response.json();
}).then(function(obj){
    pitanja = obj;
});

function dalje(){
  var input_name=document.forms["form"]["input_name"].value;
  if(input_name==""){
      $('.alert').removeClass("hide");
      $('.alert').addClass("show");
      return false;
  }
  else{
      ime = document.forms["form"]["input_name"].value;
      $('.alert').removeClass("show");
      $('.alert').addClass("hide");
      $('#podaci_korisnika').hide();
      $('#pravila_kviza').fadeIn();
  }
}
$('.close-btn').click(function(){
  $('.alert').removeClass("show");
  $('.alert').addClass("hide");
})
function nazad(){
  $('#podaci_korisnika').fadeIn();
   $('#pravila_kviza').hide();
}

function start(){
  $('#pravila_kviza').hide();
  $('.pitanja').show();
  pokaziPitanje();
}

var tajmer;

function pokaziPitanje(){
  clearInterval(tajmer);
  tajmer = setInterval(countDown,1000);
  timer=21;
  $(".btn").css('background-color', 'black');
  $(".btn").attr("disabled", false);
  $("#next").attr("disabled", false); 
  $("#potvrdi").attr("disabled", false); 
  if(brojac>9){
    prikaziRezultat();
    return 0;
  }
  if(brojac%2==0){
      $('.odgovori_4').show();
      $('.odgovori_dopuna').hide();
      document.getElementById("text").innerHTML = pitanja[brojac].pitanje;
      var odg = randomBrojevi();
      document.getElementById("odg1").innerHTML = pitanja[brojac].odgovori[odg[0]];
      document.getElementById("odg2").innerHTML = pitanja[brojac].odgovori[odg[1]];
      document.getElementById("odg3").innerHTML = pitanja[brojac].odgovori[odg[2]];
      document.getElementById("odg4").innerHTML = pitanja[brojac].odgovori[odg[3]];
  }
  else{
      $('#prikaz_odg').hide();
      $('.odgovori_4').hide();
      $('.odgovori_dopuna').show();
      document.getElementById("tekstualni_odgovor").style.color = 'white';
      document.getElementById("tekstualni_odgovor").value="";
      document.getElementById("text").innerHTML = pitanja[brojac].pitanje;
  }
}

function randomBrojevi(){
    let ans = [0, 1, 2, 3];
    ans = ans.sort(() => Math.random() - 0.5);
    return ans;
}

function tacanOdgovor(btn){
  clearInterval(tajmer);
  if(brojac%2==0){
      if(btn.innerHTML==pitanja[brojac].odgovori[1]){
        btn.style.backgroundColor = "#49a078";
        $(".btn").attr("disabled", "disabled");
        $("#next").attr("disabled", "disabled"); 
        $("#potvrdi").attr("disabled", "disabled"); 
        brojac+=1;
        dodajPoen();
        setTimeout(pokaziPitanje, 3000);                                 
      }
      else{
        btn.style.backgroundColor = "#a4161a";
        nadjiOdgovor();
      }
  }
  else{
    dopunaTacnost();
    }
}

function nadjiOdgovor(){
  if(document.getElementById("odg1").innerHTML==pitanja[brojac].odgovori[1]){
    document.getElementById("odg1").style.backgroundColor = "#49a078";
    $(".btn").attr("disabled", "disabled");
    $("#next").attr("disabled", "disabled"); 
    $("#potvrdi").attr("disabled", "disabled"); 
    brojac+=1;
    setTimeout(pokaziPitanje, 3000); 
  }
  if(document.getElementById("odg2").innerHTML==pitanja[brojac].odgovori[1]){
    document.getElementById("odg2").style.backgroundColor = "#49a078";
    $(".btn").attr("disabled", "disabled");
    $("#next").attr("disabled", "disabled"); 
    $("#potvrdi").attr("disabled", "disabled"); 
    brojac+=1;
    setTimeout(pokaziPitanje, 3000); 
  }
  if(document.getElementById("odg3").innerHTML==pitanja[brojac].odgovori[1]){
    document.getElementById("odg3").style.backgroundColor = "#49a078";
    $(".btn").attr("disabled", "disabled");
    $("#next").attr("disabled", "disabled"); 
    $("#potvrdi").attr("disabled", "disabled"); 
    brojac+=1;
    setTimeout(pokaziPitanje, 3000); 
  }
  if(document.getElementById("odg4").innerHTML==pitanja[brojac].odgovori[1]){
    document.getElementById("odg4").style.backgroundColor = "#49a078";
    $(".btn").attr("disabled", "disabled");
    $("#next").attr("disabled", "disabled"); 
    $("#potvrdi").attr("disabled", "disabled"); 
    brojac+=1;
    setTimeout(pokaziPitanje, 3000); 
  }
}
  
function datOdgovor(){
    clearInterval(tajmer);
    var odg=document.getElementById("tekstualni_odgovor").value.toUpperCase(); 
    $('#prikaz_odg').show();
    if((pitanja[brojac].odgovori)==odg.trim()){
      document.getElementById("prikaz_odg").innerHTML="Tačno!";
      $("#tekstualni_odgovor").css('color', '#49a078');
      dodajPoen();
      brojac+=1;
      $(".btn").attr("disabled", "disabled");
      $("#next").attr("disabled", "disabled"); 
      $("#potvrdi").attr("disabled", "disabled"); 
      setTimeout(pokaziPitanje, 3000); 
    }
    else{
      document.getElementById("prikaz_odg").innerHTML=pitanja[brojac].odgovori;
      brojac+=1;
      $(".btn").attr("disabled", "disabled");
      $("#next").attr("disabled", "disabled"); 
      $("#potvrdi").attr("disabled", "disabled"); 
      setTimeout(pokaziPitanje, 3000); 
    }
}

function sledecePitanje(){
    brojac+=1;
    $(".btn").attr("disabled", "disabled");
    $("#next").attr("disabled", "disabled");
    $("#potvrdi").attr("disabled", "disabled"); 
    pokaziPitanje();
}

function dodajPoen(){
  poeni+=1;
  document.getElementById("poeni").innerHTML = poeni; 
}

let countDown=()=>{
  if(timer===0){
    clearInterval(tajmer);
    sledecePitanje();
  }
  else{
    timer--;
    document.getElementById("vreme_sec").innerHTML=timer;
  }
}
function prikaziRezultat(){
  clearInterval(tajmer);
  $('.pitanja').hide();
  $('#rezl').show();
  $('#najboljiRezultati').hide();
  document.getElementById("rezUcesnika").innerHTML = ime + " osvojili ste " + poeni.toString();
  sacuvajRezultat();
}

function igrajPonovo(){
  location.reload();
}

function tabela(){
  $('#rezl').hide();
  $('#najboljiRezultati').show();
  upisiUTabelu();
}

function sacuvajRezultat(){
  var imena = JSON.parse(localStorage.getItem("imena"));
  var rezultati = JSON.parse(localStorage.getItem("rezultati"));
  var pom1;
  var pom2;
  if(rezultati==null){
    rezultati = [];
    imena = [];
    rezultati[0] = poeni;
    imena[0] = ime;
  }
  else{
    for(var i=0;i<rezultati.length;i++){
      if(rezultati[i]==poeni){
        if(imena[i]>ime){
          pom1 = imena[i];
          pom2 = rezultati[i];
          imena[i]=ime;
          rezultati[i]=poeni;
          ime = pom1;
          poeni = pom2;
        }
      }
      else if(rezultati[i]<poeni){
        pom1 = imena[i];
        pom2 = rezultati[i];
        imena[i]=ime;
        rezultati[i]=poeni;
        ime = pom1;
        poeni = pom2;
      }
    }
    rezultati.push(poeni);
    imena.push(ime);
  }
  if(rezultati.length<11){
    localStorage.setItem("imena", JSON.stringify(imena));
    localStorage.setItem("rezultati", JSON.stringify(rezultati));
  }
}

function upisiUTabelu(){
  var imena = JSON.parse(localStorage.getItem("imena"));
  var rezultati = JSON.parse(localStorage.getItem("rezultati"));
  for(var i=0;i<rezultati.length;i++){
    document.getElementById("igrac"+(i+1).toString()).innerHTML = imena[i];
    document.getElementById("toprez"+(i+1).toString()).innerHTML = rezultati[i];
  }
}