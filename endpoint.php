<?php

?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js"></script>
</head>
<style>
    .result {
        margin : 0 auto;
    }
</style>
<body>
    <div class="result">
    <?php 
    foreach ($_POST as $key => $value) {
        echo "포스트 변수 키 : " . $key . "<hr> 값 : " . $value . "<hr>";
    };
    ?>
    </div>

    <script>

        // 전자서명 설정 - https://github.com/szimek/signature_pad 참고
        var canvas = document.querySelector("canvas");
        var signaturePad = new SignaturePad(canvas, {
            penColor: "rgb(0, 0, 0)",
            backgroundColor:"rgb(233, 233, 233)",
        });

        // 전자서명 깨짐 방지 코드
        function resizeCanvas() {
            var ratio =  Math.max(window.devicePixelRatio || 1, 1);
            canvas.width = canvas.offsetWidth * ratio;
            canvas.height = canvas.offsetHeight * ratio;
            canvas.getContext("2d").scale(ratio, ratio);
            signaturePad.clear(); // otherwise isEmpty() might return incorrect value
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        
    </script>
</body>
</html>