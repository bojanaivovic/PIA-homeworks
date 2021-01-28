<?php
session_start();

require 'config_db.php';
$name="";
$username="";
$email="";
$admin="admin";

$errors=array();

if(isset($_POST['register'])){
    $name=$_POST['name'];
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password1=$_POST['password1'];
    $password2=$_POST['password2'];


    if(strlen($username)<5){
        array_push($errors, "Username must be at least 5 characters..");
    }
    if(strlen($password1)<8){
        array_push($errors, "Passwords must be at least 8 characters..");
    }
    if($password1 !== $password2){
        array_push($errors, "The two password do not match");
    }


    $check="SELECT*FROM users  WHERE username=? or email=? LIMIT 1";
    $stmt=$conn->prepare($check);
    $stmt->bind_param('ss', $username, $email); 
    $stmt->execute();
    $result=$stmt->get_result();
    $user=$result->fetch_assoc();

    if($user){
       if($username===$user['username']){
           array_push($errors, "Username already exists.");
        } 
        if($email===$user['email']){
            array_push($errors, "Email already exists.");
         } 
    }

    if(count($errors)===0){
        $password1=password_hash($password1,PASSWORD_DEFAULT);

        $sql="INSERT INTO users(name, username, email, password) VALUES (?,?,?,?)";
        $stmt=$conn->prepare($sql);
        $stmt->bind_param('ssss', $name, $username, $email, $password1);
        
        
        if ($stmt->execute()){
            $user_id=$conn->insert_id;
            $_SESSION['id']=$user_id;
            $_SESSION['name']=$name;
            $_SESSION['username']=$username;
            $_SESSION['email']=$email;
            header('location: login.php');
            exit();
        }
        else{
            array_push($errors, "Database error: failed to register.");
        }

    }
}

if(isset($_POST['signIn'])){
    $username=$_POST['username'];
    $password1=$_POST['password1'];

    if(strlen($username)<5){
        array_push($errors, "Username must be at least 5 characters..");
    }
    if(strlen($password1)<8){
        array_push($errors, "Passwords must be at least 8 characters..");
    }

    if(count($errors)===0){  
        $sql="SELECT * FROM users WHERE email=? OR username=? LIMIT 1";
        $stmt=$conn->prepare($sql);
        $stmt->bind_param('ss', $username, $username);
        $stmt->execute();
        $result=$stmt->get_result();
        $user=$result->fetch_assoc();

        if($user){  
            if(password_verify($password1, $user['password'])){
                $_SESSION['id']=$user['id'];
                $_SESSION['username']=$user['username'];
                $_SESSION['email']=$user['email'];
                if($_SESSION['admin']=$user['admin']){
                    header('location: adminPage.php');
                }
                else{
                    header('location: index.php');
                }
                exit();
            }
            else{
                array_push($errors, "Wrong password");
            }
        }
        else{
            array_push($errors, "Username or email not exists.");
        }
    }
}

if(isset($_GET['logout'])){
    session_destroy();
    unset($_SESSION['id']);
    unset($_SESSION['name']);
    unset($_SESSION['username']);
    unset($_SESSION['email']);
    header('location: login.php');
    exit();
}

?>