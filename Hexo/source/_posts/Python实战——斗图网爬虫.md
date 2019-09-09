---
title: Python实战——斗图网爬虫
date: 2019-02-07 13:23:47
tags: Python
category: 后端
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/86771215](https://blog.csdn.net/qq_39110538/article/details/86771215)   
    
   # 导入的包

 
  * ## request
    
      一个很实用的python HTTP客户端库，编写爬虫和测试服务器响应数据时经常会用到

 语法实例：

 
```
 import requests

r = requests.get('https://api.github.com/events')
```
 
## 

 
  * ## bs4
    
      全名BeautifulSoup，是编写python爬虫常用库之一，主要用来解析html标签

 语法实例：

 
```
 from bs4 import BeautifulSoup

soup = BeautifulSoup("<html>A Html Text</html>","html.parser")

# 第一个参数是要解析的html文本，第二个参数是使用哪种解析器
```
 
## request 和 bs4 的安装方法[https://blog.csdn.net/qq_39110538/article/details/86770501](https://blog.csdn.net/qq_39110538/article/details/86770501)

 

 
  * ## os
    
      包含普遍的操作系统功能，如果希望程序能够与平台无关的话，os允许一个程序编写后不需要任何改动，也不会发生任何问题，就可以在Linux和Windows下运行

 教程：[https://www.cnblogs.com/mufenglin/p/7676160.html](https://www.cnblogs.com/mufenglin/p/7676160.html)

 

 
  * ## threading
    
      为了提升程序的执行速度，经常会使用到多线程，threading就是使你的程序能够以多线程的方式去执行

 教程：[https://www.cnblogs.com/xiaobeibei26/p/6481707.html](https://www.cnblogs.com/xiaobeibei26/p/6481707.html)

 

 
  * ## urllib
    
      urllib提供了一系列用于操作URL的功能

 教程：[https://www.cnblogs.com/ifso/p/4707135.html](https://www.cnblogs.com/ifso/p/4707135.html)

 

 
### os threading urllib 在python中已经自带的，直接使用import导入即可，如果使用过程中发现缺少了，就可以使用一下方法安装导入

 [https://blog.csdn.net/qq_39110538/article/details/86770501](https://blog.csdn.net/qq_39110538/article/details/86770501)

 
## 

 
## 生产者消费者模式

 某个模块负责产生数据，这些数据由另一个模块来负责处理。产生数据的模块，就形象地称为生产者；而处理数据的模块，就称为消费者。

 该模式还需要有一个缓冲区处于生产者和消费者之间，作为一个中介。生产者把数据放入缓冲区，而消费者从缓冲区取出数据

 ![](https://images2017.cnblogs.com/blog/627667/201710/627667-20171030184113496-367918903.jpg)

 

 程序源码：

 
```
 # 导入包
import urllib
import requests
from bs4 import BeautifulSoup
import os
import threading

# 所有页面
BASE_PAGE_URL = 'http://www.doutula.com/photo/list/?page='
PAGE_URL_LIST = []  # 页面的url
FACE_URL_LIST = []  # 所有表情的url
gLock = threading.Lock()  # 全局锁
for x in range(1,870):
    url = BASE_PAGE_URL + str(x)
    PAGE_URL_LIST.append(url)

# 生产者，抓取网页url
def producer():
    while True:
        gLock.acquire()
        if len(PAGE_URL_LIST) == 0:
            gLock.release()
            break
        else:
            page_url = PAGE_URL_LIST.pop()
            gLock.release()
            response = requests.get(page_url)
            content = response.content
            soup = BeautifulSoup(content, 'lxml')
            img_list = soup.find_all('img', attrs={'class': 'img-responsive lazy image_dta'})
            gLock.acquire()
            for img in img_list:
                url = img['data-original']
                if not url.startswith('http'):
                    url = 'http' + url
                FACE_URL_LIST.append(url)
            gLock.release()

# 消费者下载图片
def customer():
    while True:
        gLock.acquire()
        if len(FACE_URL_LIST) == 0:
            gLock.release()
            continue
        else:
            face_url = FACE_URL_LIST.pop()
            gLock.release()
            split_list = face_url.split('/')
            filename = split_list.pop()
            path = os.path.join('images', filename)
            urllib.request.urlretrieve(face_url, filename=path)


def main():
    # 创建两个多线程作为生产者，去爬取表情的url
    for x in range(2):
        th = threading.Thread(target=producer)
        th.start()
    # 创建4个多线程作为消费者，去把表情下载下来
    for x in range(4):
        th = threading.Thread(target=customer())
        th.start()

if __name__ == "__main__":
    main()
```
 
### 

   
 