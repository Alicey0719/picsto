<?php
    //うｐする処理
    $imgTmp  = $_FILES["dataFile"]["tmp_name"];
    $imgName = $_FILES["dataFile"]["name"];
    $imgSize = $_FILES["dataFile"]["size"];
    if($_FILES){
        if($imgTmp != "" and $imgSize <= 50000000){
            $FilePath = "./dl/"."file_".date("Ymdhis").".".GetExt($imgName);
            move_uploaded_file($imgTmp,$FilePath);
        }else{
            $size_error = "ERROR:Incorrect File";
        }
    }
    //拡張子はんてー
    function GetExt($FilePath){
        $f=strrev($FilePath); //ぎゃくにする
        $ext=substr($f,0,strpos($f,"."));
        return strrev($ext);
    }
?>