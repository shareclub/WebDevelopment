---
title: ROS 入门 （1）
date: 2018-11-28 12:19:29
tags: ROS入门
category: 计算机基础
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/84578577](https://blog.csdn.net/qq_39110538/article/details/84578577)   
    
   # ROS简介

 ROS(Robot Operating System）是一个机器人软件平台，它能为异质计算机集群提供类似操作系统的功能。

 ROS提供一些标准操作系统服务，例如硬件抽象，底层设备控制，常用功能实现，进程间消息以及数据包管理。ROS是基于一种图状架构，从而不同节点的进程能接受，发布，聚合各种信息（例如传感，控制，状态，规划等等）。目前ROS主要支持Ubuntu。

 ROS可以分成两层，低层是上面描述的操作系统层，高层则是广大用户群贡献的实现不同功能的各种软件包，例如定位绘图，行动规划，感知，模拟等等。

 ROS（低层）使用BSD许可证，所有是开源软件，并能免费用于研究和商业用途。而高层的用户提供的包则可以使用很多种不同的许可证。

 ROS是一个机器人系统，它要在Linux系统中才能运行，所以相当于是Linux的次级系统，而ROS对Ubuntu系统的兼容性是最好的，所以一般都安装ROS在Ubuntu中，但是两个的版本是有对应的，一定要按以下规则安装

 
     ROS发布日期 | ROS版本                | 对应的Ubuntu版本                        
     ------- | -------------------- | ----------------------------------- 
     2016.3  | ROS Kinetic Kame     | Ubuntu 16.04(Xenial)/Ubuntu 15.10  
     2015.3  | ROS Jade Turtle      | Ubuntu 15.04(Wily)/Ubuntu LTS 14.04
     2014.7  | ROS Indigo Igloo     | Ubuntu 14.04(Trusty)               
     2013.9  | ROS Hydro Medusa     | Ubuntu 12.04 LTS(Precise)          
     2012.12 | ROS Groovy Galapagos | Ubuntu 12.04(Precise)              
     ...     | ...                  | ...                                


# 

 

 

 

 

 

 

 
# ROS安装配置（本博文使用版本Ubuntu 16.04 + ROS Kinetic)

 
### 1.软件中心配置

 Ubuntu桌面右上角设置->系统设置->软件和更新，按下图全部勾选（确保”restricted" “universe" 和 ”multiverse"都勾选了），关闭更新即可

 ![](https://img-blog.csdnimg.cn/20181128105907304.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 
### 2.添加源

 打开控制台（Ctrl + Alt + T ），输入如下指令：

 
```
 $ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
```
 设置密钥：

 
```
 $ sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key 0xB01FA116
```
 
### 3.安装ROS

 更新系统软件，保证是最新版

 
```
 $ sudo apt-get update
```
 ROS kinetic有很多版本，工业版，基础版，高级版，豪华版，至尊豪华...学习ROS，当然是安装自尊豪华全功能版本

 
```
 $ sudo apt-get install ros-kinetic-desktop-full
```
 打完代码，你就可以进入漫长的等待状态（网速好的可能会快点，可恶的是我一直没搞定Ubuntu连接校园网的问题，只能开着手机wifi，网速最快几百k，最慢达到pb级别...汗颜...然后挂了一个晚上才安装好，幸运的是，安装十分顺利，没有任何小虫子(bug)的骚扰）

 安装完成后，使用下面的命令查看可使用的包：

 
```
 $ apt-cache search ros-kinetic
```
 
### 4.初始化ROS

 初始化rosdep

 
```
 $ sudo rosdep init
$ rosdep update
```
 初始化环境变量(非常重要)

 
```
 $ echo "source /opt/ros/kinetic/setup.bash" >> ~/.bashrc
$ source ~/.bashrc
```
 安装常用的插件

 
```
 $ sudo apt-get install python-rosinstall
```
 
### 5.测试ROS

 启动ROS

 
```
 $ roscore
```
 看看有没有显示started core service [/rosout]，有则测试成功，恭喜你！！！

 

 另外说说：

 每次打开终端，都需要初始化环境，然后在启动ROS，会比较麻烦，不过下面的方法可以解决这个问题

 
### 6.Ubuntu开机自启动roscore命令，自动打开终端执行脚本命令

 新建一个脚本文件，名字为 autoLoad.sh （存放的地方随便，home是你个人文件目录，所以可以放在这里）

 把以下代码复制到文件中，ROS版本修改为自己的ROS版本，保存

 
```
 #！ /bin/bash
source /opt/ros/ROS版本/setup.bash
roscore
```
 打开终端，执行gnome-session-properties,弹出一个“启动应用程序首选项”的菜单，点击添加

 ![](https://img-blog.csdnimg.cn/20181128121403771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 名称、注释随便填

 命令：gnome-terminal -X autoLoad所在目录路径/autoLoad.sh

 示例：我的autoLoad.sh 路径为 /home/shareclub/Ros/mecAGV/autoLoad.sh

 则命令为：gnome-terminal -X /home/shareclub/Ros/mecAGV/autoLoad.sh

 点击添加即可

 

 
# ROS初级使用

 
### ROS文件系统介绍

 1.文件系统工具

 rospack

 允许你获取软件包的有关信息，使用rospack中的find参数选项，可以返回软件包的路径信息

 用法：

 
```
 $ rospack find [包名称]
```
 示例：

 
```
 $ rospack find roscpp
```
 输出：

 
```
 YOUR_INSTALL_PATH/share/roscpp
```
 roscd

 roscd是rosbash命令集中的一部分，允许你直接切换（cd）工作目录到某个软件包或软件包集中。

 用法：

 
```
 # roscd [本地包名称[/子目录]]
```
 示例：

 
```
 $ roscd roscpp
```
 验证输出：

 
```
 $ pwd

//输出 YOUR_INSTALL_PATH/share/roscpp
```
 注意：roscd智能切换到那些路径已经包含在ROS_PACKAGE_PATH环境中的软件包，要查找ROS_PACKAGE_PATH中包含的路径可输入

 
```
 $ echo $ROS_PACKAGE_PATH
```
 使用roscd也可以切换到一个软件包或软件包集的子目录中

 示例：

 
```
 $ roscd roscpp/cmake
$ pwd
```
 输出：

 
```
 YOUR_INSTALL_PATH/share/roscpp/cmake
```
 

 roscd log

 可以切换到ROS保存日志文件的目录下，需注意的是，如果你没有执行过任何ROS程序，系统会报错说该目录不存在

 示例：

 
```
 $ roscd log
$ pwd
```
 输出：

 
```
 /home/YOUR_NAME/.ros/log
```
 rosls

 rosls是rosbash命令集中的一部分，允许直接按软件包的名称而不是绝对路径执行ls命令

 用法：

 
```
 # rosls [本地包名称[/子目录]]
```
 示例：

 
```
 $ rosls roscpp_tutorials
```
 输出：

 
```
 cmake launch package.xml srv
```
 Tab自动完成输入

 当要输入一个完整的软件包名称时会变得比较繁琐，在之前的例子中roscpp tutorial是相当长的名称，但是，一些ROS工具支持TAB自动完成输入的功能。

 示例：

 
```
 # roscd roscpp_tut<<现在按TAB键>>
```
 按下TAB键后，命令行中会自动补充剩余部分

 
```
 $ roscd turtle
```
 但是，如果有多个软件包有同一个开头，按下TAB键后会罗列出所有以同个开头的ROS软件包，这是，只需在列出来的软件包中在输入有差异的部分再按TAB键就会自动补全

 示例：在上一个示例的情况下有多个软件包以turtle开头，当再按TAB键后会罗列出所有yiturtle开头的ROS软件包

 
```
 turtle_actionlib/ turtlesim/ turtle tf/ turtle)tf2/
```
 如果你需要的是第一个软件包则

 
```
 $ roscd turtle_a<<再次按TAB键>>
```
 命令行自动补全：

 
```
 $ roscd turtle_actionlib
```
 

   
 