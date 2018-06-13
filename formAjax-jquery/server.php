<?php
    try {
        $conn = new PDO("mysql:host=localhost;dbname=formajax","root",'123456',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo 'Kết nối thất bại';
        return;
    }
    $name = $_POST['name'];
    $st = $conn -> prepare('select username from user');
    $st -> execute();
    $st -> setFetchMode(PDO::FETCH_ASSOC);
    $result = $st->fetchAll();
    // $arr = [];
    // foreach($result as $value){
    //     $arr[] = ($value['username']);
    // }
    // json_encode($arr);
    // echo(json_encode($arr)); chuyển sang dạng json
    foreach ($result as $value){
        if ($value['username'] == $name){
            echo 'trùng username';
            return;
        }
    }
    $st = $conn -> prepare('insert into user(username) values (:name)');
    $st -> bindParam(':name',$name);
    $st -> execute();
    echo 'thêm thành công';
    $conn = null;
?>