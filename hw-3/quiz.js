let poeni=0;
let brojac=0;
var pitanja;
document.getElementById("poeni").innerHTML = poeni.toString();
$('.pitanja').hide();

fetch('quiz.json').then(function(response){
    return response.json();
}).then(function(obj){
    pitanja = obj;
});

function myFunction(){
  var input_name=document.forms["form"]["input_name"].value;
  if(input_name==""){
      $('.alert').removeClass("hide");
      $('.alert').addClass("show");
      return false;
  }
  else{
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

function pokaziPitanje(){
  $(".btn").css('background-color', 'black');
  $(".btn").attr("disabled", false);
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
  if(brojac%2==0){
      if(btn.innerHTML==pitanja[brojac].odgovori[1]){
        btn.style.backgroundColor = "#49a078";
        $(".btn").attr("disabled", "disabled"); 
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
    brojac+=1;
    setTimeout(pokaziPitanje, 3000); 
  }
  if(document.getElementById("odg2").innerHTML==pitanja[brojac].odgovori[1]){
    document.getElementById("odg2").style.backgroundColor = "#49a078";
    $(".btn").attr("disabled", "disabled");
    brojac+=1;
    setTimeout(pokaziPitanje, 3000); 
  }
  if(document.getElementById("odg3").innerHTML==pitanja[brojac].odgovori[1]){
    document.getElementById("odg3").style.backgroundColor = "#49a078";
    $(".btn").attr("disabled", "disabled");
    brojac+=1;
    setTimeout(pokaziPitanje, 3000); 
  }
  if(document.getElementById("odg4").innerHTML==pitanja[brojac].odgovori[1]){
    document.getElementById("odg4").style.backgroundColor = "#49a078";
    $(".btn").attr("disabled", "disabled");
    brojac+=1;
    setTimeout(pokaziPitanje, 3000); 
  }
}
  
function datOdgovor(){
    var odg=document.getElementById("tekstualni_odgovor").value.toUpperCase(); 
    $('#prikaz_odg').show();
    if((pitanja[brojac].odgovori)==odg.trim()){
      document.getElementById("prikaz_odg").innerHTML="Tačno!";
      $("#tekstualni_odgovor").css('color', '#49a078');
      dodajPoen();
      brojac+=1;
      setTimeout(pokaziPitanje, 3000); 
    }
    else{
      document.getElementById("prikaz_odg").innerHTML=pitanja[brojac].odgovori;
      brojac+=1;
      setTimeout(pokaziPitanje, 3000); 
    }
}

function sledecePitanje(){
    brojac+=1;
    pokaziPitanje();
}

function dodajPoen(){
  poeni+=1;
  document.getElementById("poeni").innerHTML = poeni; 
}

