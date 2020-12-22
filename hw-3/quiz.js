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
