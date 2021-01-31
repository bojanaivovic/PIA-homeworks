<?php 
include_once 'config_db.php';
session_start();

        $title=$_GET['title'];
        $sql = "DELETE FROM movies WHERE title='$title'";
        $result = mysqli_query($conn, $sql);
        if($result){
            header("location: adminPage.php");
            exit();
        }
?>