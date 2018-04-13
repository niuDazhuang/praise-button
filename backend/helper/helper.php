<?php

// print
function p ($d) {
  echo '<pre>';
  print_r($d);
  echo '</pre>';
}

// print and die
function dd ($d) {
  echo '<pre>';
  var_dump($d);
  echo '</pre>';
  die;
}
