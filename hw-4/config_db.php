<?php

$host="localhost";
$user="root";
$password="";
$dbname="imdb";

$conn=new mysqli($host, $user, $password, $dbname) or die(mysqli_error($conn));

if($conn->connect_error){
    echo("Database error:" . $conn->connect_error);
    exit();
}

?>