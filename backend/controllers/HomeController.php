<?php

namespace app\controllers;

use yii\web\Controller;
use app\models\Article;
use app\models\Category;

class HomeController extends Controller {

  public $layout = 'home';
  
  public function actionIndex()
  {
    $req = \Yii::$app->request;
    $id = $req->get('id', 8);
    $name = $req->post('name', 'woody');
    $ip = $req->userIP;
    $isg = $req->isGet;
    $isp = $req->isPost;

    $user = [
      'id'   => $id,
      'name' => $name,
      'age'  => 26
    ];

    $article = [
      'title'   => '2018国产动画春夏导视<script>alert(1)</script>',
      'content' => '<script>alert(1)</script><h1>hey!!!</h1>全职高手特别篇，我家大师兄脑子有坑（独家），凸变英雄LEAF(独家)，迷域行者（独家）'
    ];

    return $this->renderPartial('index', ['user'=>$user, 'article'=>$article]);
    // return $this->render('index', compact('user', 'article'));
  }

  public function actionAbout ()
  {
    $req = \Yii::$app->request;
    $id = $req->get('id', 1);
    $sql = "select * from article where id=:id";
    $rs = Article::findBySql($sql, [':id' => $id])->all();

    $rs1 = Article::find()->all();

    $rs2 = Article::find()->where(['id'=>5])->all();

    $rs3 = Article::find()->where(['>', 'id', 3])->all();

    $rs4 = Article::find()->where(['between', 'id', 2, 5])->all();

    $rs5 = Article::find()->where(['like', 'title', 'b'])->all();
    
    $rs6 = Article::find()->where(['id'=>5])->one();

    $rs7 = Article::findOne(14);

    $rs8 = Article::findAll([1,2,3]);



    $rs9 = Article::find()->asArray()->all();

    foreach (Article::find()->batch(2) as $ars) {
      echo count($ars), '-';
      $rs10[] = $ars;
    }

    dd($rs7);
    // return json_encode($rs7);
    // return $this->render('about', ['us' => 'wm']);
  }

  public function actionInsert ()
  {
    $ac = new Article();
    $ac -> title = 'node.js单线程,是不是就不用消息队列了啊';
    $ac -> content = '如果你的系统是一台服务器，一个进程，自然不会有并发冲突的问题。消息队列在这种情况下确实没有必要。但如果你是多个进程，甚至多台机器分布式系统呢？消息队列的威力就发挥出来了';
    $ac -> num = 150;
    // $rs = $ac->insert();
    $rs = $ac->save();

    $back = $ac->attributes['id'];

    dd($back);
    return $this->render('save');
  }

  /**
   * 更新操作
   */
  public function actionUpdate ()
  {
    $ac = Article::findOne(12);
    $ac -> title = '了啊';
    $ac -> content = '如果';
    $ac -> num = 0;
    // $rs = $ac->update();
    $rs1 = $ac->save();

    $rs2 = $ac->updateAllCounters(['num' => 1], ['id' => 10]);

    dd($rs2);
    return $this->render('save');
  }

  public function actionDelete ()
  {
    // $ac = Article::findOne(2);
    // $rs1 = $ac->delete();

    // $rs2 = Article::deleteAll(['id' => 16]);

    // $rs3 = Article::deleteAll('id=:id', [':id' => 17]);

    $rs4 = Article::deleteAll('id>:id And num<:num', [':id' => 17, ':num' => 100]);

    dd($rs4);
    return $this->render('save');
  }

  /**
   * 一对多查询
   */
  public function actionSearch ()
  {
    $category = Category::findOne(2);

    // $acs = Article::find()->where(['cate_id'=>$category->attributes['id']])->all();
    // $acs = $category->hasMany(Article::className(), ['cate_id'=>'id'])->all();

    // $acs = $category->getArticles();
    $acs = $category->articles;

    // $acs = $category->localename;

    dd($acs);
  }

  /**
   * 一对一查询
   */
  public function actionCategory ()
  {
    $articles = Article::find()->with('category')->asArray()->all();
    dd($articles);
  }

  /**
   * list
   */
  public function actionList ()
  {
    $rs = Article::find()->asArray()->all();
    return json_encode([
      'errcode' => 0,
      'errmsg' => 'success',
      'data' => [
        'total' => 1000,
        'size' => 10,
        'list' => $rs
      ]
    ]);
  }
  /**
   * 点赞加1
   */
  public function actionIncrement ()
  {
    $id = \Yii::$app->request->get('id');
    $effect = Article::updateAllCounters(['num' => 1], ['id' => $id]);
    if ($effect === 1) {
      $rs = Article::findOne($id)->attributes['num'];
      return json_encode([
        'errcode' => 0,
        'errmsg' => 'success',
        'data' => [
          'num' => $rs
        ]
      ]);
    } else {
      return json_encode([
        'errcode' => 4000006,
        'errmsg' => 'fail'
      ]);
    }
  }
}