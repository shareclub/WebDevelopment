---
title: Matlab Simulink模块
date: 2019-03-23 16:11:08
tags: Matlab
category: 计算机基础
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/88762814](https://blog.csdn.net/qq_39110538/article/details/88762814)   
    
   # ![](https://img-blog.csdnimg.cn/20190323161054354.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 
# **Simulink**

 
  * 基本模块 
      * 1、输入信号源模块库（Source） 
          * Constant 恒值常数，可设置数值 
          * Step 阶跃信号 
          * Ramp 线性增加或减少的信号 
          * Sine Wave 正弦波输出 
          * Signal Generator 信号发生器，可产生正弦、方波、锯齿波和随机波信号 
          * From File 从文件获取数据 
          * From Workspace 从当前工作空间定义的矩阵读数据 
          * Clock 仿真时钟，输出每个仿真步点的时间 
          * In 输入模块  
      * 2、接收模块库（Sinks) 
          * Scope 显示器，显示实时信号 
          * Display 实时数据显示 
          * XY Graph 显示X-Y两个信号的关系图 
          * To File 把数据保存文件 
          * To Workspace 把数据写成矩阵输出到工作空间 
          * Stop Simulation 输入不为零时终止仿真，常与关系模块配合使用 
          * Out 输出模块  
      * 3、连续系统模块库（Continuous) 
          * Integrator 积分环节 
          * Denvative 微分环节 
          * State-Space 状态方程模型 
          * Transfer Fcn 传递函数模型 
          * Zero-Pole 零一极点增益模型 
          * Transport Delay 把输入信号按给定的时间做延时  
      * 4、离散系统模块库(Discrete) 
          * Discrete Tranfer Fcn 离散传递函数模型 
          * Discrete Zero-Pole 离散零极点增益模型 
          * Discrete Filter 离散滤波器 
          * Zero-Order Hold 零阶保持器 
          * First-Order Hold 一阶保持器 
          * Unit Delay 采样保持，延迟一个周期      
 