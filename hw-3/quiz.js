function myFunction(){
    var input_name=document.forms["form"]["input_name"].value;
    if(input_name==""){
        return false;
    }
    else{
        document.getElementById("podaci_korisnika").style.display="none";
        document.getElementById("pravila_kviza").style.display="block";
    }
}