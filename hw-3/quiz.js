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
    fetch("quiz.json").then(response => response.json())
    .then(
        data => {
        $("#text").html(data.prvo_pitanje);
        $("#odg1").html(data.odgovori_pitanja1[0]);
        $("#odg2").html(data.odgovori_pitanja1[1]);
        $("#odg3").html(data.odgovori_pitanja1[2]);
        $("#odg4").html(data.odgovori_pitanja1[3]);

            $("#odg1").click(function(){
                $("#odg1").css('background-color', '#a4161a');
                $("#odg2").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next2, 3000);
            })
            
            $("#odg2").click(function(){
                $("#odg2").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next2, 3000);
            })

            $("#odg3").click(function(){
                $("#odg3").css('background-color', '#a4161a');
                $("#odg2").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next2, 3000);
            })

            $("#odg4").click(function(){
                $("#odg4").css('background-color', '#a4161a');
                $("#odg2").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next2, 3000);
            })

            $("#next").click(function(){
                $("#odg2").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next2, 3000);
            })

        function next2(){
            $(".btn").css('background-color', 'black');
            $(".btn").attr("disabled", false);
            $("#text").html(data.drugo_pitanje);
            $("#odg1").html(data.odgovori_pitanja2[0]);
            $("#odg2").html(data.odgovori_pitanja2[1]);
            $("#odg3").html(data.odgovori_pitanja2[2]);
            $("#odg4").html(data.odgovori_pitanja2[3]);

            $("#odg1").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next3, 3000);
            })

            $("#odg2").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg2").css('background-color', '#a4161a');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next3, 3000);
            })

            $("#odg3").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg3").css('background-color', '#a4161a');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next3, 3000);
            })

            $("#odg4").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg4").css('background-color', '#a4161a');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next3, 3000);
            })

            $("#next").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next3, 3000);
            })
        }

        function next3(){
            $(".btn").css('background-color', 'black');
            $(".btn").attr("disabled", false);
            $("#text").html(data.trece_pitanje);
            $("#odg1").html(data.odgovori_pitanja3[0]);
            $("#odg2").html(data.odgovori_pitanja3[1]);
            $("#odg3").html(data.odgovori_pitanja3[2]);
            $("#odg4").html(data.odgovori_pitanja3[3]);

            $("#odg1").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg1").css('background-color', '#a4161a');
                $("#odg3").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next4, 3000);
            })

            $("#odg2").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg2").css('background-color', '#a4161a');
                $("#odg3").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next4, 3000);
            })
            
            $("#odg3").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg3").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next4, 3000);
            })

            $("#odg4").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg4").css('background-color', '#a4161a');
                $("#odg3").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next4, 3000);
            })

            $("#next").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg3").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next4, 3000);
            })
        }

        function next4(){
            $(".btn").css('background-color', 'black');
            $(".btn").attr("disabled", false);
            $("#text").html(data.cetvrto_pitanje);
            $("#odg1").html(data.odgovori_pitanja4[0]);
            $("#odg2").html(data.odgovori_pitanja4[1]);
            $("#odg3").html(data.odgovori_pitanja4[2]);
            $("#odg4").html(data.odgovori_pitanja4[3]);

            $("#odg1").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg1").css('background-color', '#a4161a');
                $("#odg3").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next5, 3000);
            })

            $("#odg2").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg2").css('background-color', '#a4161a');
                $("#odg3").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next5, 3000);
            })
            
            $("#odg3").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg3").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next5, 3000);
            })

            $("#odg4").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg4").css('background-color', '#a4161a');
                $("#odg3").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next5, 3000);
            })

            $("#next").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg3").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next5, 3000);
            })
        }

        function next5(){
            $(".btn").css('background-color', 'black');
            $(".btn").attr("disabled", false);
            $("#text").html(data.peto_pitanje);
            $("#odg1").html(data.odgovori_pitanja5[0]);
            $("#odg2").html(data.odgovori_pitanja5[1]);
            $("#odg3").html(data.odgovori_pitanja5[2]);
            $("#odg4").html(data.odgovori_pitanja5[3]);
            
            $("#odg1").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg1").css('background-color', '#a4161a');
                $("#odg2").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next6, 3000);
            })
            
            $("#odg2").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg2").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next6, 3000);
            })

            $("#odg3").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg3").css('background-color', '#a4161a');
                $("#odg2").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next6, 3000);
            })

            $("#odg4").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg4").css('background-color', '#a4161a');
                $("#odg2").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next6, 3000);
            })

            $("#next").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg2").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next6, 3000);
            })
        }
        function next6(){
            $(".btn").css('background-color', 'black');
            $(".btn").attr("disabled", false);
            $("#text").html(data.sesto_pitanje);
            $("#odg1").html(data.odgovori_pitanja6[0]);
            $("#odg2").html(data.odgovori_pitanja6[1]);
            $("#odg3").html(data.odgovori_pitanja6[2]);
            $("#odg4").html(data.odgovori_pitanja6[3]);
            
            $("#odg1").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next7, 3000);
            })

            $("#odg2").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg2").css('background-color', '#a4161a');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next7, 3000);
            })

            $("#odg3").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg3").css('background-color', '#a4161a');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next7, 3000);
            })

            $("#odg4").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg4").css('background-color', '#a4161a');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next7, 3000);
            })

            $("#next").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
                setTimeout(next7, 3000);
            })
        }
        function next7(){
            $(".btn").css('background-color', 'black');
            $(".btn").attr("disabled", false);
            $("#text").html(data.sedmo_pitanje);
            $("#odg1").html(data.odgovori_pitanja7[0]);
            $("#odg2").html(data.odgovori_pitanja7[1]);
            $("#odg3").html(data.odgovori_pitanja7[2]);
            $("#odg4").html(data.odgovori_pitanja7[3]);

            $("#odg1").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
            })

            $("#odg2").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg2").css('background-color', '#a4161a');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
            })

            $("#odg3").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg3").css('background-color', '#a4161a');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
            })

            $("#odg4").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg4").css('background-color', '#a4161a');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
            })

            $("#next").click(function(){
                $(".btn").css('background-color', 'black');
                $("#odg1").css('background-color', '#49a078');
                $(".btn").attr("disabled", "disabled");
            })
        }
    }
    )
}