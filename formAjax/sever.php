<?php 
    if (empty($_GET['username']) ||  strlen($_GET['username']) < 8 ){
        echo 'Username length min 8 letter';
    }  else {
        $userName = $_GET['username'];
    }
    if (empty($_GET['email']) || strlen($_GET['email']) < 8 ){
        echo 'Email wrong format';
    } else{
        echo($_GET['email']);
    }
    if (empty($_GET['password']) || strlen($_GET['password']) < 8  ){
        echo 'Password length min 8 letter';
    } else{
        echo($_GET['password']);
    }
    if (empty($_GET['ngaysinh'])){
        echo "<p>Chưa nhập ngaysinh</p>";
    } else{
        echo($_GET['ngaysinh']);
    } 
?>