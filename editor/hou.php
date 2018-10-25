<?php

    header('Content-Type: text/html; charset=UTF-8');

    // foreach ($_SERVER as $key => $value) {
    //     echo "서버 변수 키 : " . $key . " 값 : " . $value . "<hr>";
    // };

    echo "hi";

    foreach ($_POST as $key => $value) {
        echo "포스트 변수 키 : " . $key . " 값 : " . $value . "<hr>";
    };