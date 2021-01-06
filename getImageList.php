<?php
    $path = "./dl"; 
    $dir = dir($path);
    $count = 0;

    while($fl=$dir->read()) {
        $timeList[] = filemtime($path."/".$fl);
        $arrayDir[] = $path."/".$fl;
    }
    array_multisort($timeList,SORT_DESC,$arrayDir);
    foreach($arrayDir as $fl){
      if($fl!="$path/.." && $fl!="$path/." ) {
        $pickup = "onclick='imgPickup(this)'";
        echo "<div class='thumbnail'><img src='{$fl}' width='100%' style='padding-top: 20px;' class='img' id='img$count' $pickup title='$fl' /></div>";
        $count ++;
      } 
    }
    $dir->close();
?>