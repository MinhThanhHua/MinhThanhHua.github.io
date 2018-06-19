<?php
    // kiểm tra 3 parameter truyền vào có phải arr ko
    function checkArray($arr1, $arr2, $arr3)
    {
        $arr = '';
        if (!is_array($arr1)) {
            $arr .= 1 . ', ';
        }
        if (!is_array($arr2)) {
            $arr .= 2 . ', ';
        }
        if (!is_array($arr3)) {
            $arr .= 3;
        }
        return $arr;
    }

    // tìm số 1 trong arr1
    function findNumber($arr1, $arr2, $arr3) 
    {   
        $checkArr = checkArray($arr1, $arr2, $arr3);
        if (strlen($checkArr) == 0) {
            $number = in_array('1', $arr1);
            if ($number == 1) {
                echo 'Found';
            } else {
                echo 'Not found';
            }
        } else {
            echo('Invalid parameter ' . $checkArr);
        }
    }

    // cộng 2 arr và xóa giá trị trùng
    function xoaTrungLap($arr1, $arr2, $arr3)
    {
        $checkArr = checkArray($arr1, $arr2, $arr3);
        if (strlen($checkArr) == 0) {
            $mergeArr = array_merge($arr2, $arr3);
            $arrUnique = array_unique($mergeArr);
            return $arrUnique;
        } else {
            return 'Invalid parameter ' . $checkArr;
        }
    }

    // từ mảng (*) lấy giá trị chia hết cho 2
    function chiaHetCho2($arr1, $arr2, $arr3)
    {
        $arrAll = xoaTrungLap($arr1, $arr2, $arr3);
        $arrFilter = array_filter($arrAll, function($value) {
            return $value % 2 == 0;
        });
        return $arrFilter;
    }

    //in va value tăng dần cua arr 1 mà có trùng giá trị với arrAll arr(*)
    function sapXepArr1($arr1, $arr2, $arr3)
    {
        $arrAll = xoaTrungLap($arr1, $arr2, $arr3);//=>arr(*)
        $arrIntersect = array_intersect($arr1, $arrAll);
        sort($arrIntersect);
        return $arrIntersect;
    }

    // các số giảm dần của arr1 khác key với arr(*)
    function sapXepGiamArr1($arr1, $arr2, $arr3)
    {
        $arrAll = xoaTrungLap($arr1, $arr2, $arr3);
        $arrKeyArr1 = array_keys($arr1);// lấy key của arr1
        $keyArr1 = array_diff($arrKeyArr1, $arrAll); // lấy value của key không trùng
        $lengthKeyArr1 = count($keyArr1);
        for ($i = 0; $i < $lengthKeyArr1; $i++) {
            echo($arr1[$keyArr1[$i]]);
        } 
    }

    // danh sách mảng
    $arr1 = [9, 1, 3];
    $arr2 = [1, 2];
    $arr3 = [7, 2, 9];
    
    echo 'Arr1: ['.implode(', ',$arr1).']<br>';
    echo 'Arr2: ['.implode(', ',$arr2).']<br>';
    echo 'Arr3: ['.implode(', ',$arr3).']<br>';

    echo 'Bài 1 Tìm giá trị 1 trong arr1:';
    findNumber($arr1, $arr2, $arr3);
    echo '<br>';
    
    echo 'Bài 2 Merge array (2, 3) và xóa trùng => arr(*): ';
    $arrAll = xoaTrungLap($arr1, $arr2, $arr3);
    echo implode(', ', $arrAll);
    echo '<br>';

    echo 'Bài 3 In ra các số trong (*) chia hết cho 2: ';
    $arrBai3 = chiaHetCho2($arr1, $arr2, $arr3);
    echo implode(', ',$arrBai3);
    echo '<br>';

    echo 'Bài 4 Các số tăng dần của arr1 có cùng giá trị trong (*): ';
    echo implode(', ',sapXepArr1($arr1, $arr2, $arr3));
    echo '<br>';   

    echo 'Bài 5 Các số giảm dần của arr1 khác key với (*): ';
    sapXepGiamArr1($arr1, $arr2, $arr3);
    echo '<br>';  
?>