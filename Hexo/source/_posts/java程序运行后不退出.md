---
title: java程序运行后不退出
date: 2018-12-11 22:05:22
tags: java
category: 后端
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/84962676](https://blog.csdn.net/qq_39110538/article/details/84962676)   
    
   在main中的最后加入以下代码

 
```
 System.out.println("\n是否退出程序：Y/N");
Scanner input = new Scanner(System.in);
String Y_N = input.nextLine();
if(Y_N.equals('Y')||Y_N.equals('y')){
    System.exit(0);
}
```
 

   
 