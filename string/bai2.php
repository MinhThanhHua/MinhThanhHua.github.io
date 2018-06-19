<?php
    // kiểm tra có phải string ko
    function checkString($str1, $str2)
    {
        $str = '';
        if (!is_string($str1)) {
            $str .= 1 . ', ';
        }
        if (!is_string($str2)) {
            $str .= 2;
        }
        return $str;
    }

    // tìm kiếm trong chuỗi
    function findStr($str1, $str2)
    {
        $checkStr = checkString($str1, $str2);
        if (strlen($checkStr) == 0) {
            $result = strpos($str1, $str2);
            if ($result) {
                echo 'true';
            } else {
                echo 'false';
            }
        } else {
            echo 'Invalid parameter: '. $checkStr;
        }
    }

    // 2 loại hiển thị
    function showStr() {
        echo 'Money$__$money <br>';
        echo "Money\$__\$money";
    }

    function checkBytes()
    {
        echo strlen('chao');
    }
    checkBytes();

    $str1 = "Xin chào mọi người";
    $str2 = "mọi";

    echo 'Bài 1 Xuất câu mẫu dưới 2 dạng: <br>';
    showStr();
    echo '<br>';

    echo 'Bài 2 Tìm kiếm trong string: <br>';
    findStr($str1, $str2);
    echo '<br>';

    echo 'Bài 3 Multiple bytes string: <br>';
    
    echo '<br>';
?>