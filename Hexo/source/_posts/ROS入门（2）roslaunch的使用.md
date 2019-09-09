---
title: ROS入门（2）roslaunch的使用
date: 2019-01-11 11:53:28
tags: ROS入门
category: 计算机基础
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/86293893](https://blog.csdn.net/qq_39110538/article/details/86293893)   
    
   # 1、什么是roslaunch

 roslaunch可以用来启动定义在launch文件中的多个节点

 
# 2、使用roslaunch

 roslaunch需要在程序包中使用，所以需要进入你创建的程序包中，还没创建工作区和程序包可根据我上一篇文章创建[ROS入门（2）创建工作区、程序包](https://blog.csdn.net/qq_39110538/article/details/86290128)

 
## 1）进入程序包目录

 
```
 $ roscd beginner_tutorials
```
 
## 2）创建launch文件夹

 
```
 $ mkdir launch
$ cd launch
```
 
## 3）在launch文件夹中创建名为turtlemimic.launch文件（路径在/home/catkin_ws/src/beginner_tutorials/launch），并把下面代码粘贴到文件中

 
```
 <launch>
 
   <group ns="turtlesim1">
     <node pkg="turtlesim" name="sim" type="turtlesim_node"/>
   </group>
 
   <group ns="turtlesim2">
     <node pkg="turtlesim" name="sim" type="turtlesim_node"/>
   </group>
 
   <node pkg="turtlesim" name="mimic" type="mimic">
     <remap from="input" to="turtlesim1/turtle1"/>
     <remap from="output" to="turtlesim2/turtle1"/>
   </node>
 
</launch>
```
 
## 4）启动launch文件

 
```
 $ roslaunch beginner_tutorials turtlemimic.launch
```
 运行后就会启动两个turtlesim

 

   
 