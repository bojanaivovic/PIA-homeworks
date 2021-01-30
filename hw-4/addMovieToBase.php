<?php
    include_once 'config_db.php';

        $genres= mysqli_real_escape_string($conn,$_POST['genres']);
        $title= mysqli_real_escape_string($conn,$_POST['title']);
        $year= mysqli_real_escape_string($conn,$_POST['year']);
        $description= mysqli_real_escape_string($conn,$_POST['description']);
        $directors= mysqli_real_escape_string($conn,$_POST['directors']);
        $production= mysqli_real_escape_string($conn,$_POST['production']);
        $scenarist= mysqli_real_escape_string($conn,$_POST['scenarist']);
        $runtime= mysqli_real_escape_string($conn,$_POST['runtime']);
        $rating= mysqli_real_escape_string($conn,$_POST['rating']);
        $stars= mysqli_real_escape_string($conn,$_POST['stars']);
        $image= mysqli_real_escape_string($conn,$_POST['image']);
        $sql="INSERT INTO movies (title, year, description, genres, directors, production, scenarist, runtime, rating, stars, image) VALUES ('$title', '$year', '$description', '$genres', '$directors', '$production', '$scenarist', '$runtime', '$rating', '$stars', '$image')";
        $res=mysqli_query($conn, $sql);
        if($res){
            header('location: adminPage.php');
        }

?>