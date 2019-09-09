---
title: Win10装双系统Ubuntu16.04+EasyBCD
date: 2018-11-30 23:30:01
tags: win10
category: IT资讯
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/84576199](https://blog.csdn.net/qq_39110538/article/details/84576199)   
    
   最近需要搞一个机器人项目，使用的是ROS机器系统，而这个系统需要安装在linux系统上，所以就要安装个linux系统。思考了一下，用虚拟机虽然简单方便，但速度太慢，而且不稳定，然后就想装个双系统吧。

 参考自：[https://blog.csdn.net/yucicheung/article/details/72844727](https://blog.csdn.net/yucicheung/article/details/72844727)

 工具：

 1.[Ubuntu 16.04.5 LTS (Xenial Xerus)](http://releases.ubuntu.com/16.04/?_ga=2.58913454.2037263812.1543234661-194306974.1543234661)

 2.[EasyBCD ](http://sqdownb.onlinedown.net/down/EasyBCD2.3.zip)

 3.[分区助手](https://www.disktool.cn/)

 教程：

 [1.windows硬盘分区](#1.windows%E7%A1%AC%E7%9B%98%E5%88%86%E5%8C%BA)

 [ ](#%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0)

 [2.EasyBCD设置NeoGrub引导](#2.EasyBCD%E8%AE%BE%E7%BD%AENeoGrub%E5%BC%95%E5%AF%BC)

 [ ](#%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0)

 [3.Ubuntu16.04安装](#3.Ubuntu16.04%E5%AE%89%E8%A3%85)

 [ ](#%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0%20%C2%A0)

 [4.利用EasyEasyBCD引导Ubuntu启动](#4.%E5%88%A9%E7%94%A8EasyEasyBCD%E5%BC%95%E5%AF%BCUbuntu%E5%90%AF%E5%8A%A8)

 [ ](#%C2%A0%20%C2%A0%C2%A0)

 
--------

## 1.windows硬盘分区

 分区就是为了给Ubuntu系统一个空闲的空间，所以需要压缩卷腾出一个大约是50G-100G的空间，至于多少，由你自己的硬盘大小而定，我就设置了100G的（注意：压缩卷后显示未分配即可，不需新建简单卷），我这里使用的是分区助手，也可以右击电脑标志，选择管理->磁盘管理，然后分区

 ![](https://img-blog.csdnimg.cn/20181130220138753.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 
## 2.EasyBCD设置NeoGrub引导

 下载好EasyBCD后，直接解压安装打开即可，个人使用是免费的。选择添加新条目，右边选择NeoGrub,点击“安装”

 ![安装NeoGrub选项](https://img-blog.csdn.net/20170605145427384?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 安装完成后，会在C盘目录下创建一个名为“NeoGrub”的文件。

 点击配置，然后把下面文本复制到NeoGrub文件中的后面

 
```
 title Install Ubuntu
root (hd0,0)
kernel (hd0,0)/vmlinuz.efi boot=casper iso-scan/filename=/ubuntu-16.04.1-desktop-amd64.iso ro quiet splash locale=zh_CN.UTF-8
initrd (hd0,0)/initrd.lz
```
 （hd0,0） 这里代表的是C盘的位置，hd0表示磁盘的序号，后面的0代表该磁盘上由左往右（从0开始）C盘分区所在的位置。

 filename=/后面跟你下载的iso文件名，我的是 ubuntu-16.04.1-desktop-amd64.iso 

 配置好后，保存退出即可

 将一开始下载的Ubuntu镜像文件复制到c盘根目录下，然后打开镜像文件，把casper文件夹打开，然后将其中的文件“initrd.lz" 和 “vmlinuz.efi” 拷贝到c盘根目录下

 ![](https://img-blog.csdnimg.cn/20181130232918411.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 最后c盘目录下多出来的文件如下，这样做就是从c盘引导安装

 ![](https://img-blog.csdnimg.cn/2018113023293072.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 准备工作都做好后，接下来就可以重启电脑进行Ubuntu安装了

 
## 

 
## 3.Ubuntu16.04安装

 重启后，需要点时间，然后就会出现“NeoGrub引导加载器”

 ![开机引导出现NeoGRub选项](https://img-blog.csdn.net/20170604235404410?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 点击后，可以看见“Install Ubuntu”

 ![Install Ubuntu 选项](https://img-blog.csdn.net/20170604235839687?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 点击后，进入Ubuntu桌面，左上角有个“安装Ubuntu16.04LTS”程序

 ![安装Ubuntu图标](https://img-blog.csdn.net/20170605003052840?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 点击图标后，进行语言选择，到最后选择“中文（简体）”

 ![语言设置](https://img-blog.csdn.net/20170605003328093?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 下一步，勾选第二项，可以省去很多配置步骤

 ![语言设置](https://img-blog.csdn.net/20170605003328093?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 下一步，“安装类型”，选择“其他选项”，自己来分配硬盘分区 ![安装类型](https://img-blog.csdn.net/20170605222609958?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 
### 分区过程（非常非常非常重要） 选择之前分出来的空闲的空间，点击左下角“+”号，按下面的方案进行分区（当然分区方式有很多种，之前我就尝试了其他的安装教程，他们的分区方式就跟这个不一样，不过按下面的方案就可以了）

 ![](https://img-blog.csdnimg.cn/20181130222804597.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 注意：按参考资料分区会有个错误，就是分了主分区后，空闲空间就变得不可用了，上网百度有的人认为先“主分区“后”逻辑分区“，但我这样做的话确实是出错的，不过先”逻辑分区“后”主分区“却是可以的，所以如果你的电脑也出错了可以使用后者方案。

 /home 可以用剩余的空间减去 / 分区的空间得到，当然分区大小只是估算的，不用那么准确的，大概就可以了。

 
     挂载点   | 分区大小   | 新分区类型 | 新分区位置  | 用于        
     ----- | ------ | ----- | ------ | ---------- 
     不设置   | 2048M  | 逻辑分区  | 空间起始位置 | 交换空间      
     /boot | 800M   | 逻辑分区  | 空间起始位置 | EXT4日志文件系统
     /home | 剩余所有   | 逻辑分区  | 空间起始位置 | EXT4日志文件系统
     /     | 22000M | 逻辑分区  | 空间起始位置 | EXT4日志文件系统


## 

 
## 

 
## 

 
## 

 
## 

 设置好后，将”安装启动引导器的设备“改变为”/boot"所在的设备

 ![](https://img-blog.csdnimg.cn/20181130223035816.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 
### 注意：在安装之前，打开终端（快捷键Ctrl+Alt+T），输入sudo umount -l /isodevice，将该挂载点卸载，然后再重装。

 点击“现在安装”，选择位置“shanghai"

 ![地理位置](https://img-blog.csdn.net/20170605223104179?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 选择“键盘布局”

 ![键盘布局](https://img-blog.csdn.net/20170605223115930?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 填写“信息”用户名和密码就是你登陆电脑用的，所以要记住

 ![](https://img-blog.csdnimg.cn/20181130223457755.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 继续后开始安装

 ![支持包安装](https://img-blog.csdn.net/20170605223153554?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 安装完成后重启，进入的是windows系统，下面设置引导

 

 
## 4.利用EasyEasyBCD引导Ubuntu启动

 打开EasyBCD，点击添加新条目，选择Linux/BSD

 ![](https://img-blog.csdnimg.cn/201811302247529.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 这时候在启动引导项中会多了一项启动Ubuntu系统的条目，默认就是开机时不手动设置就自动选择默认系统，看自己哪个比较常用的，就选哪个吧。

 ![重启后目录](https://img-blog.csdn.net/20170605000447072?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 重启后就会看到三个选项，第三个才是安装好的Ubuntu系统

 ![Neosmart Linux](https://img-blog.csdn.net/20170605150218225?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 Ubuntu开机选项选择第一个，输入密码就可以进入系统

 ![Ubuntu启动成功](https://img-blog.csdn.net/20170605150251679?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXVjaWNoZXVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 到这恭喜你已成功安装Ubuntu系统！！！

 感谢源文章的教程，部分图由于安装过程没有截图，故引用源博文的。

 
### 出现故障：

 
### 安装好的Ubuntu系统突然无法启动了（左上角一直有个_闪烁）

 原因分析：是引导项出问题了，导致无法找到驱动项

 解决方法：

 方法一：

 1.在编辑引导菜单，把原来的NeoSmart Linux删除

 ![](https://img-blog.csdnimg.cn/20181206204224132.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 2.在添加新条目，linux/BSD重新添加引导文件，注意驱动器必须是/boot分区（分区/boot是800Mb）

 ![](https://img-blog.csdnimg.cn/20181206204216771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 方法二：在BCD备份/修复中执行重新创建/修复引导文件

 ![](https://img-blog.csdnimg.cn/20181206204230746.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 

   
 