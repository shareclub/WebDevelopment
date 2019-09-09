---
title: Java常用工具类
date: 2018-10-26 11:35:15
tags: java
category: 后端
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/82667617](https://blog.csdn.net/qq_39110538/article/details/82667617)   
    
   ## 异常处理

 
### 什么是异常？

 有异于常态，和正常状态不一样，有错误出现，阻止当前方法或作用域等等都称之为异常。

 
### 有什么常见异常？

 ![](https://img-blog.csdn.net/20180912201518650?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 
### 处理异常

 try-catch

 
```
 try{
   //一些会抛出异常的方法
}catch(Exception e){
   //处理该异常执行的代码块
}
```
 多重异常处理

 注意顺序问题：先子类后父类

 
```
 try{
   //一些会抛出异常的代码块
}catch(Exception e){
   //处理该异常的代码块
}catch(Exception 2){
   //处理Exception 2的代码块
}..(n个Exception){   
}
```
 try-catch-finally

 
```
 try{
   //可能会抛出异常的代码
}catch(Exception e){
   //处理该异常的代码块
}finally{
   //最终要执行的代码
}
```
 
### 自定义异常

 Java异常数据库中存在了许多常见的异常，但是有时候我们需要一些在异常库中没有的异常怎么办呢？那就需要用到自定义异常。

 自定义异常定义时要么跟数据库中的异常类似，要么就直接继承Exception类。

 
### 异常链

 应用程序通常会通过抛出另一个异常来响应异常。 实际上，第一个异常引起第二个异常。 它可以是非常有助于用户知道什么时候一个异常导致另一个异常。 “异常链（Chained Exceptions）”帮助程序员做到这一点。

   
 