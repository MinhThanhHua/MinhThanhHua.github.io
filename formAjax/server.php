<?php 
        try {
            $conn = new PDO("mysql:host=localhost;dbname=id3441080_user","id3441080_minhthanh",'123456',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Kết nối thất bại';
        }
        $userName = $_GET['username'];
        $password = $_GET['password'];
        $email = $_GET['email'];
        $ngaysinh = $_GET['birthday'];
        $stmt = $conn->prepare('select * from user');
        $stmt -> execute();
        $stmt -> setFetchMode(PDO::FETCH_ASSOC);
        $result = $stmt->fetchAll();
        foreach ($result as $item){
            if ($item['username'] === $userName){
                echo 'Tên này đã tồn tại';
                return 0;
            }
        }
        $sql = "insert into user(username, password, email, birthday) 
        values ( '$userName','$password','$email','$ngaysinh' )";
        $conn ->exec($sql);
        echo 'Thêm thành công';
        $conn = null;
?>