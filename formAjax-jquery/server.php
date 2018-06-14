<?php
    try {
        $conn = new PDO("mysql:host=localhost;dbname=formajax","root",'123456',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo 'Kết nối thất bại';
        return;
    }
    // $name = $_POST['username'];
    // $password = $_POST['password'];
    // $email = $_POST['email'];
    // $ngaysinh = $_POST['ngaysinh'];
    $st = $conn -> prepare('select username from user');
    $st -> execute();
    $st -> setFetchMode(PDO::FETCH_ASSOC);
    $result = $st->fetchAll();
    $text ='';
    // $arr = [];
    echo '<?xml version="1.0" encoding="UTF-8"?>';
    foreach($result as $value){
        $text ='<username>'. $value['username'] . '</username>';
    }
    echo $text;
    $xml = simplexml_load_string($text);
    print_r ($xml);
    // json_encode($arr);
    // echo(json_encode($arr)); //chuyển sang dạng json
    // foreach ($result as $value){
    //     if ($value['username'] == $name){
    //         echo 'trùng username';
    //         return;
    //     }
    // }
    // $st = $conn -> prepare('insert into user(username, password, email, birthday) 
    // values (:name, :password, :email, :birthday)');
    // $st -> bindParam(':name',$name);
    // $st -> bindParam(':password',$password);
    // $st -> bindParam(':email',$email);
    // $st -> bindParam(':birthday',$ngaysinh);
    // $st -> execute();
    // echo 'thêm thành công';
    $conn = null;
?>