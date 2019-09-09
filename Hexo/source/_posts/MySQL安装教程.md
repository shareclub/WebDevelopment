---
title: MySQL安装教程
date: 2018-10-04 21:28:21
tags: MySQL
category: 计算机基础
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/82940547](https://blog.csdn.net/qq_39110538/article/details/82940547)   
    
   下载网址：[https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)

 安装流程，默认直接下一步的过程我在这不显示出来，只说需要注意的地方。

 1、同时最大的链接数选择20以上

 ![](https://img-blog.csdn.net/20181004211120918?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 2、端口设置，3306是默认端口，全世界通用，生产环境中最好不要使用此端口，因为大多数人都知道默认的，如果知道了你的电脑ip和数据库名，就很容易入侵你的数据库。不过如果是测试环境用的，可以不更改。然后添加到防火墙。

 ![](https://img-blog.csdn.net/20181004211726273?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 3、编码格式选择第三个，选择utf8，否则插入中文数据会出现编码错误。

 ![](https://img-blog.csdn.net/20181004212218395?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 4、添加path中，就可以不用手动配置环境变量的path

 ![](https://img-blog.csdn.net/20181004212307621?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 5、用户密码，以后登录数据库用到的密码。

 ![](https://img-blog.csdn.net/20181004212533284?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 6、最后一步，关键时刻，如果最后4个都打勾了，则安装成功，如果不是，则安装失败，解决方案[MySql二次重装问题解决](https://blog.csdn.net/qq_39110538/article/details/82940421)

 ![](https://img-blog.csdn.net/20181004212620179?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

   
 