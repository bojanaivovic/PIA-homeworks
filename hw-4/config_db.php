<?php

$host="localhost";
$user="root";
$password="";
$dbname="registration";

$conn=new mysqli($host, $user, $password, $dbname);

if($conn->connect_error){
    echo("Database error:" . $conn->connect_error);
    exit();
}

?>