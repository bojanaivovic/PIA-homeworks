<?php require_once 'controllers.php'; ?>

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
        <form action="addMovieToBase.php" method="post">
            <div class="row">
            <div class="col-75">
                <input type="text"class="inputAddMovie" id="title" name="title" placeholder="Add title..."  required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="year" name="year" placeholder="Add year..." autocomplete="off" required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <textarea id="description" name="description" placeholder="Add description..."  style="height:200px" required></textarea>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="genres" name="genres" placeholder="Add genres..."  required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="directors" name="directors" placeholder="Add directors..."  required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="production" name="production" placeholder="Add production..."  required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="runtime" name="runtime" placeholder="Add runtime..."  required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="scenarist" name="scenarist" placeholder="Add scenarists..."  required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="rating" name="rating" placeholder="Add rating..."  required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="inputAddMovie" id="stars" name="stars" placeholder="Add stars..." required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="file" id="myFile" name="image" required>
            </div>
            </div>
            <div class="row" id="buttons">
                <input type="submit" id="buttonAddMovie" name='add' value="Add movie">
            </div>
        </form>
    </div>
</div>
</body>
</html>