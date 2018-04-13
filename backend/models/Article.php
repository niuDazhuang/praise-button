<?php

namespace app\models;

use yii\base\Model;
use yii\db\ActiveRecord;

class Article extends ActiveRecord {
  
  public function getCategory ()
  {
    $category = $this->hasOne(Category::className(), ['id'=>'cate_id']);
    return $category;
  }

}