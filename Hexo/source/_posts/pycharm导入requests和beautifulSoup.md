---
title: pycharm导入requests和beautifulSoup
date: 2019-02-07 09:47:12
tags: Pycharm
category: 后端
---
   1、在pycharm界面 ,  
 File -> Setting或(Ctrl + Alt + S)  
 进入 setting 界面

 ![](https://img-blog.csdnimg.cn/20190207094305867.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)  
 2、进入 Project Interpreter界面

 ![](https://img-blog.csdnimg.cn/20190207094323857.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 3、安装bs4

 ![](https://img-blog.csdnimg.cn/2019020709440847.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)  
 若是出现如下错误

 ![](https://img-blog.csdnimg.cn/20190207094541751.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)  
 那你别在这里整了，  
[这里是中文版的官网安装bs4教程](https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/)

 

 直接进cmd命令，输入pip install beautifulsoup4

 ![](https://img-blog.csdnimg.cn/20190207094621267.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 4、安装requests库  
 cmd命令行：pip install requests

 ![](https://img-blog.csdnimg.cn/20190207094636525.png)

 cmd命令行：pip install requests -i http://pypi.douban.com/simple --trusted-host pypi.douban.com

 其他源总结：  
 阿里云 http://mirrors.aliyun.com/pypi/simple/

 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

 豆瓣(douban) http://pypi.douban.com/simple/

 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/

 中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/

 使用方法很简单，直接 -i 加 url 即可！如下：

 关于requests的安装pip源

 原文：https://blog.csdn.net/qq_15028305/article/details/86076363   
 

   
 