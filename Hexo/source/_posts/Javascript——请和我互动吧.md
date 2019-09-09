---
title: Javascript——请和我互动吧
date: 2018-10-13 01:55:09
tags: JavaScript
category: 前端
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/83034992](https://blog.csdn.net/qq_39110538/article/details/83034992)   
    
   ## Javascript-输出内容（document.write）

 用于直接向HTML输出流写内容，简而言之，就是直接在网页中输出内容。书写方法有四种：

 第一种：输出内容用“”括起，直接输出“”号内的内容。

 
```
 <script type="text/javascript">
    document.write("你好！欢迎来到shareclub博客！"); 
</script>
```
 第二种：通过变量输出内容。

 
```
 <script type="text/javascript">
    var hello = "你好！欢迎来到shareclub博客！";
    document.write(hello); 
</script>
```
 第三种：输出多项内容，内容之间通过+连接。

 
```
 <script type="text/javascript">
    var hello = "你好！";
    document.write(hello + "欢迎来到shareclub博客！"); 
</script>
```
 第四种：输出HTML标签，并起作用，标签使用“”括起来。

 
```
 <script type="text/javascript">
    document.write("<h1>你好！欢迎来到shareclub博客！</h1>"); 
</script>
```
 
## 

 
## Javascript-警告-消息对话框（document.alert）

 向网页中弹出对话框，在弹窗显示内容。

 
```
 <script type="text/javascript">
    
    var  hello = "你好！";
    alert(hello);   //输出变量
    alert("欢迎来到shareclub博客！");  //输出字符串
    
</script>
```
 注意：多个alert会按顺序执行，并且需按下确定后，才会执行下一个alert。消息对话框通常用于调试程序。

 

 
## Javascript-确认-消息对话框（document.confirm）

 用于允许用户做选择的动作。包括一个确定和一个取消按钮。

 
```
 var i = comfirm(str);

//str：在消息框显示的内容。

//返回值：Boolean值。
```
 实例：

 
```
 <script type="text/javascript">
    var i = confirm("你是帅哥？");
    if(i == true){
       document.write("你是一位帅哥");
    }else{
       document.write("你是一位美女");
    }
</script>
```
 

 
## Javascript-提问-消息对话框（document.prompt）

 弹出对话框，收集一些需要与用户交互的信息。包括（一个确认和一个取消，一个输入框）。

 
```
 prompt(str1, str2);

//str1是对话框显示的内容，不可修改
//str2是输入框默认的内容，可以修改
```
 点击确认，文本框中的内容会作为函数返回值返回。

 点击取消，返回null。

 
```
 <script type="text/javascript">
    var i = prompt("你的名字是：", "请输入你的名字");
    if(i != null){
        alert("你好！" + i);
    }else{
        alert("你好！" + "my friend");
    }
</script>
```
 Javascript-打开新窗口（window.open）

 open()方法可以查找一个已经存在或者新建的浏览器窗口。

 
```
 window.open([URL],[窗口名称],[参数字符串])

//URL:窗口显示的网页路径或网址，可选参数，不选则窗口不显示任何文档
//窗口名称：
//   _blank:在新窗口显示目标网页
//   _self:在当前窗口显示目标网页
//   _在框架的上部分显示目标网页



```
 参数字符串添用于添加其他属性，可直接在[http://www.w3school.com.cn/jsref/met_win_open.asp](http://www.w3school.com.cn/jsref/met_win_open.asp)上面查询。

 

 Javascript-关闭窗口（window.close）

 
```
 window.close();  //关闭本窗口
<窗口对象>.close();  //关闭指定窗口
```
 

   
 