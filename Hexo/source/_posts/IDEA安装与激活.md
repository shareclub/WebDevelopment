---
title: IDEA安装与激活
date: 2018-10-02 13:33:20
tags: IDEA
category: IT资讯
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/82925465](https://blog.csdn.net/qq_39110538/article/details/82925465)   
    
   什么是IDEA?

 IDEA 全称IntelliJ IDEA，是用于java语言开发的集成环境（也可用于其他语言），IntelliJ在业界被公认为最好的java开发工具之一，尤其在智能代码助手、代码自动提示、重构、J2EE支持、Ant、JUnit、CVS整合、代码审查、 创新的GUI设计等方面的功能可以说是超常的。可以这么说，IDEA比Eclipse更好，更优化，更适合开发java程序。

 下载JDK

 下载JDK1.8 [http://download.oracle.com/otn-pub/java/jdk/8u181-b13/96a7b8442fe848ef90c96a2fad6ed6d1/jdk-8u181-windows-x64.exe?AuthParam=1538494807_c75a44178c9a0c66fa3e0e27e7eefbac](http://download.oracle.com/otn-pub/java/jdk/8u181-b13/96a7b8442fe848ef90c96a2fad6ed6d1/jdk-8u181-windows-x64.exe?AuthParam=1538494807_c75a44178c9a0c66fa3e0e27e7eefbac)

 安装JDK

 直接下一步，选择默认路径

 配置环境

 第一步：找到目录C:\Program Files\Java\jdk1.8.0_171\bin，复制此路径。

 ![](https://img-blog.csdn.net/20181002234944863?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 第二步：右击我的电脑->进入属性->高级系统设置->环境变量

 ![](https://img-blog.csdn.net/20181002234526157?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 ![](https://img-blog.csdn.net/20181002234605746?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 

 

 第三步：找到Path,编辑Path,把C:\Program Files\Java\jdk1.8.0_171\bin粘贴到最后，注意要用英文分号间隔。

 ![](https://img-blog.csdn.net/20181002234802968?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 ![](https://img-blog.csdn.net/20181002235335756?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 第四步：测试：win+R运行cmd打开命令行，分别输入javac和java -version，出现以下内容则安装成功。

 ![](https://img-blog.csdn.net/20181002235553739?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 ![](https://img-blog.csdn.net/20181002235604702?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 下载IDEA

 直接到官网下载：[http://www.jetbrains.com/idea/](http://www.jetbrains.com/idea/)

 安装及激活

 第一步：安装过程直接next....next，当然，不想装在c盘，可以自己设置其他盘。

 ![](https://img-blog.csdn.net/20181002131623813?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 

 第二步：找到这个目录C:\Windows\System32\drivers\etc下的hosts文件

 ![](https://img-blog.csdn.net/20181002132016954?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 第三步：把hosts文件拖到桌面，然后在桌面用记事本打开，在最后粘贴这串字符0.0.0.0 account.jetbrains.com

 ![](https://img-blog.csdn.net/20181002132223421?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 第四步：把修改好的hosts再拖回原来的目录中。

 第五步：运行IDEA，会弹出以下窗口。选择Activation code

 ![](https://img-blog.csdn.net/20181002132731968?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 第六步：浏览器打开[http://idea.lanyus.com/](http://idea.lanyus.com/) 获取注册码

 ![](https://img-blog.csdn.net/20181002132838157?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 ![](https://img-blog.csdn.net/20181002133000249?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 第七步：把注册码copy到刚刚的弹窗中，然后点击ok便可以运行。（注册码亲测可用）

 ![](https://img-blog.csdn.net/20181002133051785?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 ![](https://img-blog.csdn.net/20181002133157165?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

   
 