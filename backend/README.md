## xampp 配置本地域名

> http.conf
```
LoadModule rewrite_module modules/mod_rewrite.so
LoadModule vhost_alias_module modules/mod_vhost_alias.so
Include etc/extra/httpd-vhosts.conf
```

```
<Directory "/Applications/XAMPP/htdocs/yee/web">  
    Options Indexes FollowSymLinks Includes ExecCGI  
    AllowOverride All  
    Require all granted  
</Directory>
```

> /etc/hosts
127.0.0.1 yii.hd

## VC

> request

```
$req = \Yii::$app->request;
$req -> get('id', 8);
$req -> post('name', 'tom');
$req -> isGet;
$req -> isPost;
$req -> userIP;
```

> render

```
// 渲染父模板
$this.render('viewname', [datamap])

// 仅渲染自己
$this.renderPartial('viewname', [datamap])

// tips
compact('a', 'b') === ['a'=>$a, 'b'=>$b]

// 定义父模板
<?= $content; ?>
public $layout = 'home';

// 模板间相互调用
<?= $this->render('about', ['us' => 'DT']); ?>
```

## MySql
```
drop schema schemaname;
drop table schema.table;
then
run away fastly;
```
