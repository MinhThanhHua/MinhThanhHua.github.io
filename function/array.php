<?php
    // demo các hàm hỗ trợ arr trong php
    function demo() 
    {
        $arr = ['a' => 4,'b' => 5,'c' => 5];
        $arr0 = ['a' => 1,'e' => 2,'f' => 3];
        $a = $arr+$arr0;
        $b = array_merge($arr, $arr0);
        $b = array_merge_recursive($arr, $arr0);
        var_dump($a);
        echo '<br>';
        var_dump($b);
    }

    function helloWorld($name, $age)
    {
        echo 'Xin chào tôi tên là: '.$name.' '.$age.' tuổi<br>';
    }

    //array map
    function demo1()
    {
        $name = ['a'=>'Phúc','b'=>'Lộc', 'Thọ'];
        $age = [1900, 2000, 3000];
        array_map('helloWorld', $name, $age);
    }

    function info($value, $key)
    {
        echo "Ông $key tên là: $value";
    }
    
    //arr walk
    function demo2()
    {
        $name = ['a'=>'Phúc','b'=>'Lộc','c' =>'Thọ'];
        array_walk($name, 'info');
    }

    //demo();
    //demo1();
    //demo2();
?>