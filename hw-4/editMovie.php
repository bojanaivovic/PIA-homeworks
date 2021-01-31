<?php
    require_once 'config_db.php';
    session_start();
?>

<!DOCTYPE html>
<html>
<!-- Domaci 4 (PIA 2020) -->

<head>
<title>Moviepage</title>
    <meta name="author" content="Bojana_Ivovic" />
    <meta charset="utf-8" />
    <meta name="description" content="PHP, MySQL" />
    <meta name="keywords" content="pia, web programming, html, css, bootstrap, javascript, jquery, PHP, mySQL" />
    <link rel="stylesheet" type="text/css" href="imdb.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
</head>
<body>
<nav class="navbar navbar-expand-md navbar-dark bg-dark navbar-fixed-top">
        <i class="fa fa-imdb" style="font-size:50px; color:#ff980f"></i>  
		<a class="navbar-brand" href="adminPage.php">M O V I E S</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
			<span class="navbar-toggler-icon"></span>
        </button>
        <div class="input-group">
            <form class="navbar-form navbar-left" action="adminPage.php" method="post">
              <input type="text" id="search-input" name="search" class="form-control" placeholder="Search..." autocomplete="off" required>
              <span class="input-group-btn">
                <button class="btn" type="submit" name="isearch" style="background-color: #E5880D"><i class="fa fa-search" style=color:black;></i></button>
              </span>
            </form>
        </div>
        <div class="logout-btn">
            <a href="adminPage.php?logout=1" class="btn-sm">
            <span class="glyphicon glyphicon-log-out"></span>
            Logout 
            </a>
        </div>
    </nav><br><br><br>
    <div id="conMovie">
    
    <a href="adminPage.php" id="close">x</a>
    <div class="container">
        <form method="post">
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="title" name="edit_title" placeholder="Edit title..."   autocomplete="off">
                <button class="logovanje mt-3 mb-5" type="submit" name="title" style="width:40%; margin-left:30%;"><a>Save update title</button>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="year" name="edit_year" placeholder="Edit year..." autocomplete="off">
                <button class="logovanje mt-3 mb-5" type="submit" name="year" style="width:40%; margin-left:30%;">Save update year</button>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <textarea id="description" name="edit_description" placeholder="Edit description..."  style="height:200px"  autocomplete="off"></textarea>
                <button class="logovanje mt-3 mb-5" type="submit"  name="description" style="width:40%; margin-left:30%;">Save update description</button>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="genres" name="edit_genres" placeholder="Edit genres..."   autocomplete="off">
                <button class="logovanje mt-3 mb-5" type="submit" name="genres"style="width:40%; margin-left:30%;">Save update genres</button>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="directors" name="edit_directors" placeholder="Edit directors..."  autocomplete="off">
                <button class="logovanje mt-3 mb-5" type="submit" name="directors" style="width:40%; margin-left:30%;">Save update direcotrs</button>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="production" name="edit_production" placeholder="Edit production..."   autocomplete="off">
                <button class="logovanje mt-3 mb-5" type="submit" name="production" style="width:40%; margin-left:30%;">Save update production</button>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="runtime" name="edit_runtime" placeholder="Edit runtime..."   autocomplete="off" >
                <button class="logovanje mt-3 mb-5" type="submit" name="runtime" style="width:40%; margin-left:30%;">Save update runtime</button>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="scenarist" name="edit_scenarist" placeholder="Edit scenarists..."   autocomplete="off">
                <button class="logovanje mt-3 mb-5" type="submit" name="scenarist" style="width:40%; margin-left:30%;">Save update scenarist</button>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="stars" name="edit_stars" placeholder="Edit stars..."  autocomplete="off">
                <button class="logovanje mt-3 mb-5" type="submit" name="stars" style="width:40%; margin-left:30%;">Save update stars</button>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="file" id="myFile" name="edit_image" >
                <button class="logovanje mt-3 mb-5" type="submit" name="image" style="width:40%; margin-left:30%;">Save update image</button>
            </div>
            </div>
        </form>
    </div>
</div>
</body>
</html>
   
<?php  
        $movie = $_GET['title'];
        $sql = "SELECT * FROM movies WHERE title='$movie'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $title = $row['title'];

        if(isset($_POST['title'])){
            $title = $_POST['edit_title'];
            $sql = "UPDATE movies SET title = '$title' WHERE title = '$movie'";
            $result = mysqli_query($conn, $sql);
        }
        

        if(isset($_POST['year'])){
            $year = $_POST['edit_year'];
            $sql = "UPDATE movies SET year = '$year' WHERE title = '$movie'";
            $result = mysqli_query($conn, $sql);
        }
        
        if(isset($_POST['description'])){
            $description = $_POST['edit_description'];
            $sql = "UPDATE movies SET description = '$description' WHERE title = '$movie'";
            $result = mysqli_query($conn, $sql);
        }
        
        if(isset($_POST['production'])){
            $production = $_POST['edit_production'];
            $sql = "UPDATE movies SET production = '$production' WHERE title = '$movie'";
            $result = mysqli_query($conn, $sql);
        }
        
        if(isset($_POST['runtime'])){
            $runtime = $_POST['edit_runtime'];
            $sql = "UPDATE movies SET runtime = '$runtime' WHERE title = '$movie'";
            $result = mysqli_query($conn, $sql);
        }
        
        if(isset($_POST['directors'])){
            $directors = $_POST['edit_directors'];
            $sql = "UPDATE movies SET directors = '$directors' WHERE title = '$movie'";
            $result = mysqli_query($conn, $sql);
        }
        
        if(isset($_POST['scenarist'])){
            $scenarist = $_POST['edit_scenarist'];
            $sql = "UPDATE movies SET scenarist = '$scenarist' WHERE title = '$movie'";
            $result = mysqli_query($conn, $sql);
        }
        
        if(isset($_POST['stars'])){
            $stars = $_POST['edit_stars'];
            $sql = "UPDATE movies SET stars = '$stars' WHERE title = '$movie'";
            $result = mysqli_query($conn, $sql);
        }
        
        if(isset($_POST['genres'])){
            $genres = $_POST['edit_genres'];
            $sql = "UPDATE movies SET genres = '$genres' WHERE title = '$movie'";
            $result = mysqli_query($conn, $sql);
        }

        if(isset($_POST['image'])){
            $image = $_POST['edit_image'];
            $sql = "UPDATE movies SET image = '$image' WHERE title = '$movie'";
            $result = mysqli_query($conn, $sql);
        }
    ?>