---
title: MySql二次重装问题解决
date: 2018-10-04 21:05:53
tags: MySQL
category: 计算机基础
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/82940421](https://blog.csdn.net/qq_39110538/article/details/82940421)   
    
   如果想要重装MySQL，那么卸载后就必须清除所有与MySQL有关的文档。具体内容如下：

 1、在控制面板卸载MySQL

 ![](https://img-blog.csdn.net/20181004205543973?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 2、然后找到mysql安装目录（一般为C:/Program Files）将MySQL文件夹全部删掉，即使是空的文件夹也要删掉。

 ![](https://img-blog.csdn.net/20181004205731838?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 3、打开C:\ProgramData，找到MySQL文件夹，并将其删除（最关键的一步），C:\ProgramData这个目录默认是隐藏的，不能直接看到这个目录，可以直接在c盘的搜索框中复制C:\ProgramData这个路径找到MySQL文件夹删掉。

 ![](https://img-blog.csdn.net/20181004205856944?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 4、win+R运行cmd打开窗口，输入regedit，然后回车，打开注册表，在注册表(regedit)查询mysql，全部删除；

 可能在以下目录，请都去查看是否有MySQL文件，然后删除。

 1.HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\Eventlog\Application\MySQL 目录  
 2.HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\Eventlog\Application\MySQL 目录（）  
 3.HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\Application\MySQL 目录

 5 删除完之后重启电脑（如果有时间建议再次查看是否删除完后再重启电脑）

 6重新安装一次

   
 