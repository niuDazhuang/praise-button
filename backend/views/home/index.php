<?php

use \yii\helpers\Html;
use \yii\helpers\HtmlPurifier;

?>


<h1>id = <?= $user['id'];?></h1>

<h2>Hello <?= $user['name'];?>!~</h2>

<h3>my age is <?= $user['age'];?></h3>


<div class="article">

  <h1><?=Html::encode($article['title']);?></h1>

  <p><?=HtmlPurifier::process($article['content']);?></>

</div>


<?= $this->render('about', ['us' => 'DT']); ?>
