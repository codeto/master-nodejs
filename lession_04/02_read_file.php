<?php
    $file = fopen("data.txt", "r");
    $content = fread($file, 100000);
    echo $content;
?>