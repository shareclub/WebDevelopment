---
title: Javascript读取本地txt文件
date: 2018-10-26 11:32:22
tags: JavaScript
category: 前端
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/83098474](https://blog.csdn.net/qq_39110538/article/details/83098474)   
    
   以下代码实现javascript读取本地文件打印到浏览器中

 
```
 function load(name) {
    let xhr = new XMLHttpRequest(),
        okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', name, false);
    xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
    xhr.send(null);
    return xhr.status === okStatus ? xhr.responseText : null;
}
 
let text = load("文件名.txt");  

console.log(text);  //输出到浏览器控制器中

//document.write(text);  //打印在网页中

//document.write("<pre>"+text+"<pre/>");  //解决txt的换行无法打印到网页上的问题
```
 

   
 