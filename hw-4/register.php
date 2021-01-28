<?php require_once 'controllers.php'; ?>
<!DOCTYPE html>
<html>
<!-- Domaci 4 (PIA 2020) -->

<head>
<title>PIA HW - IMDB </title>
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
</head>
<body>
<div class="registration" >
        <section class="Form my-4 mx-5">
            <div class="container">
                <div class="row g-0">
                    <div class="col-lg-5">
                        <img src="images/films.jpg" class="img-fluid" alt=""> 
                    </div>
                    <div class="col-lg-7 px-5">
                        <i class="fa fa-imdb" style="font-size:60px; color:#ff980f"></i>  
                        <h1 class="font-weight-bold">Create account</h1>
                        <?php if(count($errors)>0): ?>  
                            <div class="alert alert-warning col-lg-7 py-2">
                                <?php foreach($errors as $error): ?>
                                    <li><?php echo $error;?></li>
                                <?php endforeach; ?>
                            </div> 
                        <?php endif; ?>
                        <form method="post" action="register.php">
                            <div class="form-row">
                                <div class="col-lg-7">
                                    <input type="text" name="name" value="<?php echo $name; ?>" placeholder="Your name" class="form-control my-3" required>
                                </div>
                            <div>
                            <div class="form-row">
                                <div class="col-lg-7">
                                    <input type="text" name="username" value="<?php echo $username; ?>" placeholder="Enter username" class="form-control my-4"  required>
                                </div>
                            <div>
                            <div class="form-row">
                                <div class="col-lg-7">
                                    <input type="email" name="email" value="<?php echo $email; ?>" placeholder="Enter email" class="form-control my-4"  required>
                                </div>
                            <div>
                            <div class="form-row">
                                <div class="col-lg-7">
                                    <input type="password" name="password1" placeholder="Password" class="form-control my-4" required>
                                </div>
                            <div>
                            <div class="form-row">
                                <div class="col-lg-7">
                                    <input type="password" name="password2" placeholder="Confirm password" class="form-control my-3" required>
                                </div>
                            <div>
                            <div class="form-row">
                                <div class="col-lg-7">
                                    <button type="submit" name="register" class="logovanje mt-3 mb-4">Create your IMDb account</button>
                                </div>
                            <div>
                            <a href="login.php">Already have an account?</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>
</html>