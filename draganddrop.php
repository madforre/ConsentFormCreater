<?php
  header('Content-Type: text/html; charset=UTF-8');
  $contents = $_POST["ir1"];
?>
  <head>
    <meta charset="utf-8">
    <title>cms</title>
  </head>
  <body>
    <div id="app"></div>
    <script> 
      var contents = `<?php echo $contents;?>`;
    </script>
    <script src="./dist/build.js"></script>
  </body>
</html>