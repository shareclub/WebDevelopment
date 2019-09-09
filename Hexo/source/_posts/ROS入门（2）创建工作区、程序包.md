---
title: ROS入门（2）创建工作区、程序包
date: 2019-01-11 10:47:21
tags: ROS入门
category: 计算机基础
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/86290128](https://blog.csdn.net/qq_39110538/article/details/86290128)   
    
   # 1、什么是工作空间

 工作空间时存放工作项目开发相关文件的文件夹

 src：代码空间（source space）

 build：编译空间（build space）

 devel：开发空间（development space）

 install：安装空间（install space）

 

 
# 2、创建步骤

 
## 1）创建工作空间

 
```
 $ mkdir -p ~/catkin_ws/src
```
 
## 2）编译空间

 这个工作空间还是空的，但我们还是可以编译它

 
```
 $ cd ~/catkin_ws/
$ catkin_make
```
 这时候，catkin_ws目录中就会多了“build”和“devel”两个文件夹，src中也出现了一个CMakeList.txt文件

 
## 3）配置工作环境

 
```
 $ source devel/setup.bash
```
 这样子只能在当前终端生效，所以我们可以通过修改~/.bashrc文件来配置环境变量，使用vi或gedit打开~/.bashrc

 
```
 $ gedit ~/.bashrc
```
 将如下语句添加到文末，保存退出

 
```
 $ source opt/ros/kinetic/setup.bash
$ source ~/catkin_ws/devel/setup.bash

```
 在终端让其生效

 
```
 $ source ~/.bashrc
```
 
## 4）测试工作环境变量

 
```
 $ echo $ROS_PACKAGE_PATH
```
 输出结果如下，则配置成功

 
```
 /home/shareclub/catkin_ws/src:/opt/ros/kinetic/share
```
 

 
# 3、什么是ROS程序包

 程序包是ROS中组织软件的主要形式，可以编写代码并进行编译、执行等操作，相当于一个project。一个程序包一般包含程序文件（src文件夹中的.cpp和.py文件）、编译描述文件（package.xml）和配置文件（CMakeList.txt）等。

 

 
# 4、创建程序包

 程序包存放的路径都是在src文件目录中，所以先进去src中，然后通过catkin_create_pkg创建程序包，语法结构是：

 
```
 $ cd ~/catkin_ws/src
$ catkin_create_pkg beginner_tutorials std_msgs rospy roscpp
//语法结构：catkin_create_pkg 包名称 依赖1 依赖2 依赖3
```
 执行完后，就会在src中多了一个beginner_tutorials文件夹和CMakeList.txt文件，当然也可以自己自定义程序包，这里就不说了

 
# 5、编译程序包

 回到工作区目录

 
```
 $ cd ~/catkin_ws/
```
 如果只编译一个程序包则

 
```
 $ catkin_make beginner_tutorials
//语法结构：catkin_make 包名称
```
 如果编译整个工程

 
```
 $ catkin_make
```
 

   
 