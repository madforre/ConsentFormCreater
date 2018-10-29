<?php

?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php 
    foreach ($_POST as $key => $value) {
        echo "포스트 변수 키 : " . $key . "<hr> 값 : " . $value . "<hr>";
    };
    ?>
</body>
</html>