---
title: Python-第一个程序
date: 2019-01-19 20:29:28
tags: Python
category: 后端
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/86533041](https://blog.csdn.net/qq_39110538/article/details/86533041)   
    
   # 源程序的基本概念

 
  1. 源程序就是一个文本文件，所以可以使用任何的文本编辑器做Python的开发 
  3. Python程序的文件扩展名通常都是.py 把以下代码复制到一个文本文件中，然后命名为后缀为.py的文件，在命令行找到文件的目录，使用python+程序文件名.py 命令来运行文件

 
```
 print("Hello world")
print("Welcome to shareclub")
```
 
# 编程中常见错误

 
  1. 一行代码写多条语句：这是错误的，因为Python是解析语言，代码时一行一行执行下来的，所以，建议不要把多条语句写在同一行，如果真的需要的话，则在多个语句间加  \n 
  3. 缩进错误：Python语言有优雅的特性，所以，具有严格的代码缩进检查，如果缩进不正确，就会报错，程序无法执行 
  5. python 2.x 默认不支持中文：Python 3.x 才支持中文，所以使用python 3.x 的解析器才能运行含有中文的程序， Python 2.x 的解析器名称是python，Python 3.x的解析器的名称是python3 
# Python 2.x 与 3.x 版本简介

 
  1. python 2.x 是过去的版本，python 3.x 是现在和未来的版本，所以现在学习就学习3.x版本的 
  3. python 3.x 是不向下兼容的，早期版本的python程序，是无法用python3解析器执行的 
  5. 为了照顾现有的程序，官方发布了一个过渡版本——python 2.6，但是python 2.7被确定为为2.x的最后一个版本  
     总结：建议最新开发的程序直接使用python 3.0 来开发，但如果遇到不兼容的第三方库，则先使用Python 3.0 版本进行开发，然后使用python 2.6 、 python 2.7 来执行，然后做一些兼容性的处理 
# 执行Python的方式

 
## 1. 解析器python/python3

 
```
 #使用python 2.x 解析器
$ python xxx.py

#使用python 3.x 解析器
$ python3 xxx.py
```
 其他解析器（因为Python解析器很多都是由c等其他语言编写的）

 
  * Cpython——C语言实现的 
  * Jython——可以运行在java平台的 
  * IronPython——可以运行在.NET和Mono平台的（这个我不太了解） 
  * PyPy——Python实现的（对，就是自己实现自己） 
## 2. 交互式运行Python程序

 
  * 直接在终端中运行解析器，不输入执行的文件名,在终端直接使用python 或 python 3就能打开解析器，运行后可以看到对应的版本号 
  * 直接在python的shell中输入python的代码，立即看到程序执行的结果 
  * 优点：适合学习、验证python语法和局部代码 
  * 缺点：代码不保存，不适合太大的程序 
  * 退出解析器命令 exit() 或者ctrl + d 除了使用默认的shell，还可以使用一个更强大的shell : IPython 比默认的shell好用，它有什么特性呢?

 
  * 支持自动补全 
  * 自动缩进 
  * 支持bash shell 命令（linux） 
  * 内置许多很有用的功能和函数 运行方法也是直接在终端中输入 ipython 命令打开解析器，退出直接输入 exit 或 Ctrl + d 就可以了

 
## 3. 集成开发环境（IDE）——PyCharm

 
  * 集成开发环境（IDE, Integrated Development Envionment）——集成了开发软件需要的所有工具 
      * 图形用户界面 
      * 代码编辑器 
      * 编译器/解析器 
      * 调试器（断点/单步） 
      * ...  
  * PyCharm介绍 
      * 可在Windows、Linux、macOS下使用 
      * 适合大型项目  
  * 对于PyCharm的安装和使用我在这就不整理出来的，可以自己去百度谷歌一下    
 