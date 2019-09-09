---
title: ECMAScript6入门
date: 2018-11-16 00:49:23
tags: IDEA
category: 前端
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/84037467](https://blog.csdn.net/qq_39110538/article/details/84037467)   
    
   # ECMAScript6入门

 首先了解一下ECMAScript6的来源：

 
### js的组成部分有哪些？

 ECMA DOM BOM

 

 
### 什么是ECMA?

 ECMA是一种标准，js则是实现者

 

 
### 什么是ECMAScript?

 简写ECMA或者ES

 

 
### 目前版本：

 低级浏览器：支持ES3.1

 高级浏览器：ES5过渡到ES6

 

 
### ECMA的历史：

 1996年 ES1.0 js稳定 Netscape将js提交给ECMA组织，ES正式出现

 1998年 ES2.0 正式发布 

 1999年 ES3.0 被浏览器广泛支持

 2007年 ES4.0 过于激进，被废除了

 2008年 ES3.1 4.0退化成3.1， 代号 Harmony(和谐)

 2009年 ES5.0 ES5正式发布，同时公布JavaScript.next 也就是后来的6.0

 2011年 ES5.1 成为了ISO国际标准

 2013年.3月 ES6.0 颁布草案

 2013年12月 ES6.0 发布草案

 2015年 ES6.0 预计发布正式版，同时JavaScript.next指向ES7.0

 2018年 ES6.0 ES6比ES5的生成力更强，代码更整洁

 

 
### 兼容性：

 目前为止 ES5 ES6支持情况基本凑合

 node.js 用的是chrome内核，在node中可以使用ES5 ES6很多特性

 ES5和ES6已经逐渐沦为后台语言

 

 
### 在浏览器如何使用？

 需要用到编译工具：

 babel —— 让我们在当前的项目中随意的使用这些新最新的es6，甚至es7的语法

 traceur —— 由Google出的编译器，把ES6语法编译为ES5

 gulp

 webpack

 npm

 bootstrap 引导程序，跟css认识的bootstrap不一样

 

 在网页上使用：

 方法一：直接在<script></script>中使用

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        let a = 12;
        alert(a);
    </script>
</head>
<body>

</body>
</html>
```
 注意：如果浏览器无法编译，则需要在[https://github.com/aikar/traceur/tree/master/traceur/src](https://github.com/aikar/traceur/tree/master/traceur/src)下载traceur.js 和 bootstrap.js两个文件，然后引入到HTML文件中

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--插入一下代码引用两个js-->
    <script src="traceur.js"></script>
    <script src="bootstrap.js"></script>
    <script type="module">
        let a = 12;
        alert(a);
    </script>
</head>
<body>

</body>
</html>
```
 

 方法二：在线直接使用——主要用于测试

 [https://google.github.io/traceur-compiler/demo/repl.html](https://google.github.io/traceur-compiler/demo/repl.html#)

 [https://babeljs.io/repl/](https://babeljs.io/repl/#?babili=false&amp;browsers=&amp;build=&amp;builtIns=false&amp;spec=false&amp;loose=false&amp;code_lz=DYUwLgBAhhC8EEYBMBuIA&amp;debug=false&amp;forceAllTransforms=false&amp;shippedProposals=false&amp;circleciRepo=&amp;evaluate=false&amp;fileSize=false&amp;timeTravel=false&amp;sourceType=module&amp;lineWrap=true&amp;presets=es2015%2Creact%2Cstage-2&amp;prettier=false&amp;targets=&amp;version=6.26.0&amp;envVersion=)

 

 方法三：直接在node里面使用

 a)但直接用时，需要添加‘use strict’

 b)node --harmony_descructuring xxx.js

 实例：在webstrom创建一个test.js文件

 
```
 'use strict';
let a = 12;
console.log(a);
```
 ALT+f12快捷键打开webstrom的终端Terminal 输入node test.js 则可执行

 ![](https://img-blog.csdnimg.cn/20181114012858647.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 

 
## 新增功能

 
### 1、let——定义变量

 
```
 let a = 12;
```
 特点：

 1）let具有块级作用域：只能在{}包起来的代码块中使用，是有局部作用域的，而用var定义的变量无论在什么地方都是全局变量的。

 2）let不允许重复声明变量，而var声明的两个相同名的变量是不会报错的，后者会覆盖前者

 总结：其实let才是接近其他语言的变量

 用处：1）封闭空间变得更简洁

 实例1：

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        //ES5的写法
        (function(){
            var a = 12;
            alert(a);
        })();

        //ES6的写法
        {
            let a = 12;
            alert(a);
        }
    </script>
</head>
<body>

</body>
</html>
```
 实例2：

 
```
 <!DOCTYPE html>
<html lang="en">
<head>

    <script>
        window.οnlοad=function(){
            var aBtn = document.getElementsByTagName("input");
            //ES5封闭函数
            // for(var i=0; i<aBtn.length; i++){
            //     (function(i){
            //         aBtn[i].onclick = function(){
            //             alert(i);
            //         }
            //     })(i);
            //     }
            // };
            //ES6封闭函数
            for(let i=0; i<aBtn.length; i++){
                    aBtn[i].onclick = function(){
                        alert(i);
                    }
            }
            };
    </script>
</head>
<body>
<input type="button" value="aaa">
<input type="button" value="bbb">
<input type="button" value="ccc">
</body>
</html>
```
 总结：块级作用域，其实就是匿名函数立即调用

 

 
### const——定义常量，一旦赋值，就不能被修改

 
```
 const a = "shareclub";
a = 12; //报错
```
 注意：const必须给初始值，因为以后再也没法赋值了，所以声明的时候一定要有值，还不能重复声明。

 用途：为了防止意外修改变量，比如引入库名，组件名。

 
## 

 
### ${}字符串链接

 
```
 //ES5
'abc'+变量名+'ef'
//ES6
`abc${变量名}ef`  //反双引号，1键前面的按键
```
 

 
### 解构赋值

 
```
 var [a,b,c] = [12,5,101]; //a=12 b=5 c=101

var {a,b,c} = {b:5,a:12,c:101} //结合json使用，无论赋值顺序如何，a都等于12
```
 模式匹配：

 
```
 var [a,[b,c],d] = [12,[1,2],4];  //左边与右边模式一样

var [{a,e},[b,c],d] = [{e:'eeee',a:'aaa'},[1,2],4];  //与json结合
```
 用途——交互：数据解析

 
```
 var arr = [{title:'abc', href:'kkk', img:'img1'}];

var [{title,href,img}]=arr;

console.log(title,href,img);  //输出结果abc kkk img1
```
 解构赋值给默认值

 
```
 var {time=12, id=0}={}; //time默认为12， id默认为0
```
 

   
 