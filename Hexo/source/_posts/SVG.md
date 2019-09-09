---
title: SVG
date: 2018-10-27 09:40:49
tags: SVG
category: 前端
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/83422474](https://blog.csdn.net/qq_39110538/article/details/83422474)   
    
   # 俗话说得好：最好的学习方法是兴趣引导的学习，在学习SVG之前，先给你们看看一些实例，让你们领略一下SVG的强大，看看能不能激发出你们的学习兴趣。 [https://www.html5tricks.com/tag/svg/](https://www.html5tricks.com/tag/svg/)

 感觉怎么样呢？是不是非常想学习SVG，做一个属于自己的作品出来啊？那就开始学习吧。

 **目录**

 [SVG入门](#SVG%E5%85%A5%E9%97%A8)

 [SVG简介](#SVG%E7%AE%80%E4%BB%8B)

 [位图和矢量图](#%E4%BD%8D%E5%9B%BE%E5%92%8C%E7%9F%A2%E9%87%8F%E5%9B%BE)

 [使用方式](#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F)

 [SVG的图形和基本属性](#SVG%E7%9A%84%E5%9B%BE%E5%BD%A2%E5%92%8C%E5%9F%BA%E6%9C%AC%E5%B1%9E%E6%80%A7)

 [基本图形](#%E5%9F%BA%E6%9C%AC%E5%9B%BE%E5%BD%A2)

 [基本属性](#%E5%9F%BA%E6%9C%AC%E5%B1%9E%E6%80%A7)

 [基本操作API](#%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9CAPI)

 [创建图形](#%E5%88%9B%E5%BB%BA%E5%9B%BE%E5%BD%A2)

 [添加图形](#%E6%B7%BB%E5%8A%A0%E5%9B%BE%E5%BD%A2)

 [设置/获取属性：](#%E8%AE%BE%E7%BD%AE%2F%E8%8E%B7%E5%8F%96%E5%B1%9E%E6%80%A7%EF%BC%9A)

 [通过以上属性制作的svgEditor](#%E9%80%9A%E8%BF%87%E4%BB%A5%E4%B8%8A%E5%B1%9E%E6%80%A7%E5%88%B6%E4%BD%9C%E7%9A%84svgEditor)

 [SVG的坐标系统和坐标变换](#SVG%E7%9A%84%E5%9D%90%E6%A0%87%E7%B3%BB%E7%BB%9F%E5%92%8C%E5%9D%90%E6%A0%87%E5%8F%98%E6%8D%A2)

 [SVG的世界、视野、视窗概念](#SVG%E7%9A%84%E4%B8%96%E7%95%8C%E3%80%81%E8%A7%86%E9%87%8E%E3%80%81%E8%A7%86%E7%AA%97%E6%A6%82%E5%BF%B5)

 [SVG中的图形分组](#SVG%E4%B8%AD%E7%9A%84%E5%9B%BE%E5%BD%A2%E5%88%86%E7%BB%84)

 [坐标系统概述](#%E5%9D%90%E6%A0%87%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%BF%B0)

 [四个坐标系](#%E5%9B%9B%E4%B8%AA%E5%9D%90%E6%A0%87%E7%B3%BB)

 [坐标变换](#%E5%9D%90%E6%A0%87%E5%8F%98%E6%8D%A2)

 [SVG颜色、渐变和笔刷](#SVG%E9%A2%9C%E8%89%B2%E3%80%81%E6%B8%90%E5%8F%98%E5%92%8C%E7%AC%94%E5%88%B7)

 [RGB和HSL](#RGB%E5%92%8CHSL)

 [线性渐变和径向渐变](#%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98%E5%92%8C%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98)

 [path高级教程](#path%E9%AB%98%E7%BA%A7%E6%95%99%E7%A8%8B)

 [Path概述](#Path%E6%A6%82%E8%BF%B0)

 [移动和直线命令](#%E7%A7%BB%E5%8A%A8%E5%92%8C%E7%9B%B4%E7%BA%BF%E5%91%BD%E4%BB%A4)

 [弧线命令](#%E5%BC%A7%E7%BA%BF%E5%91%BD%E4%BB%A4)

 [贝塞尔曲线](#%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF)

 [SVG文本](#SVG%E6%96%87%E6%9C%AC)

 [和 创建文本](#%3Ctext%3E%20%E5%92%8C%20%3Ctspan%3E%20%E5%88%9B%E5%BB%BA%E6%96%87%E6%9C%AC)

 [垂直居中问题](#%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%E9%97%AE%E9%A2%98)

 [让文本在制定路径上排序](#%3CtextPath%3E%E8%AE%A9%E6%96%87%E6%9C%AC%E5%9C%A8%E5%88%B6%E5%AE%9A%E8%B7%AF%E5%BE%84%E4%B8%8A%E6%8E%92%E5%BA%8F)

 [插入超链接]()

 [图形的引用、裁切和蒙版](#%E5%9B%BE%E5%BD%A2%E7%9A%84%E5%BC%95%E7%94%A8%E3%80%81%E8%A3%81%E5%88%87%E5%92%8C%E8%92%99%E7%89%88)

 [标签创建图形引用](#%3Cuse%3E%E6%A0%87%E7%AD%BE%E5%88%9B%E5%BB%BA%E5%9B%BE%E5%BD%A2%E5%BC%95%E7%94%A8)

 [标签裁切图形](#%3Cclip%3E%20%E6%A0%87%E7%AD%BE%E8%A3%81%E5%88%87%E5%9B%BE%E5%BD%A2)

 [标签创建蒙版](#%3Cmask%3E%20%E6%A0%87%E7%AD%BE%E5%88%9B%E5%BB%BA%E8%92%99%E7%89%88)

 [SVG动画](#SVG%E5%8A%A8%E7%94%BB)

 [动画原理](#%E5%8A%A8%E7%94%BB%E5%8E%9F%E7%90%86)

 [创造并使用动画](#%E5%88%9B%E9%80%A0%E5%B9%B6%E4%BD%BF%E7%94%A8%E5%8A%A8%E7%94%BB)

 [SMIL for SVG](#SMIL%20for%20SVG)

 
--------

# SVG入门

 
## SVG简介

 使用XML描述的矢量文件

 

 
### 位图和矢量图

 位图：基于颜色的描述（BMP、PNG、JPG等），图片是像素型，清晰度较低

 矢量图：基于数学的描述（SVG、AI等），图片曲线圆滑，清晰度较高

 

 
### 使用方式

 浏览器直接打开

 SVG矢量图文件后缀为 .svg 

 ![](https://img-blog.csdnimg.cn/20181027003508403.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_27,color_FFFFFF,t_70)

 

 在HTML中使用<img>标签引用

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>在HTML中使用img引用</title>
</head>
<body>
    <p><img src="SVG.svg">原始大小</p>
    <p><img src="SVG.svg" width="50" height="50">50　Ｘ　50</p>   //可直接设置大小
    <p><img src="SVG.svg" width="400" height="400">400 X 400</p>

</body>
</html>
```
 可爱又机智的笑脸

 ![](https://img-blog.csdnimg.cn/20181027004058694.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_27,color_FFFFFF,t_70)

 直接在HTML中使用SVG标签

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>smile-SVG</title>
</head>
<body>
    <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <!--Face-->
            <circle cx="100" cy="100" r="90" fill="#39F"/>
            <!--Eyes-->
            <circle cx="70" cy="80" r="20" fill="white"/>
            <circle cx="130" cy="80" r="20" fill="white"/>
            <circle cx="65" cy="75" r="10" fill="black"/>
            <circle cx="125" cy="75" r="10" fill="black"/>
            <!--Smile-->
            <path d="M 50 140 A 60 60 0 0 0 150 140"
                  stroke="white" stroke-width="3" fill="none"/>
        </svg>
    </p>
</body>
</html>
```
 

 作为CSS背景

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>在css使用SVG</title>
    <style>
        body{
            background-color: #efefef;
        }
        #bg{
            width: 400px;
            height: 400px;
            background: white url("SVG.svg") repeat;
            box-shadow:rgba(0,0,0,.5) 2px 3px 10px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>Hello SVG with CSS</h1>
    <div id="bg"></div>
</body>
</html>
```
 ![](https://img-blog.csdnimg.cn/20181027082039946.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_27,color_FFFFFF,t_70)

 

 
## SVG的图形和基本属性

 
### 基本图形

 <rect> 矩形

 x y 横坐标和纵坐标（矩形左上角的位置）

 width 宽

 height 高

 rx ry 圆角大小 （只设置rx或ry，则两者的值相同，只有分别设置了不同的值才会各自显示不同的大小）

 

 <circle>圆形  
 cx cy 横坐标和纵坐标（圆形的中心点）

 r 半径

 

 <ellipse>椭圆

 cx cy 横坐标和纵坐标

 rx ry 横向半径和纵向半径

 

 <line> 线段

 x1 y1 端点坐标

 x2 y2 端点坐标  
 

 <polyline>折线

 points="x1 y1 x2 y2 x3 y3.."

 多少个节点就设置多少个x y 值

 .

 

 <polygon>多边形

 points="x1 y1 x2 y2 x3 y3.."

 多少个节点就设置多少个x y 值，第一个节点和最后一个节点会自动连接在一起

 

 
### 基本属性

 fill = “#FFB3AE” 填充颜色

 stroke = #971817 描边颜色

 stroke-width = 10 描边的粗细

 transform = "rotate(30)" 旋转变形

 

 
## 基本操作API

 
### 创建图形

 document.createElementNS(ns, tagName) 

 ns是必须设置的，因为svg是单独的xml文件，在html中没有svg的命名空间。tagName指的是基本图形cicle line等

 

 
### 添加图形

 element.appendChild(childElement)

 

 
### 设置/获取属性：

 element.setAttribute(name, value)

 element.getAttribute(name)

 

 
### 通过以上属性制作的svgEditor

 
```
 <!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>SVG 编辑器</title>
    <style>
        #toolbox {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 250px;
            border-right: 1px solid #CCC;
        }

        #toolbox h2 {
            margin: 0;
            padding: 0;
            background: #EEE;
            font-size: 16px;
            height: 24px;
            line-height: 24px;
            padding: 5px 10px;
        }

        #toolbox form {
            padding: 10px;
        }

        #canvas {
            position: absolute;
            left: 260px;
            top: 10px;
            bottom: 10px;
            right: 10px;
            box-shadow: 2px 2px 10px rgba(0,0,0,.4);
            border-radius: 5px;
        }

        label {
            display: inline-block;
            width: 80px;
            text-align: right;
        }
    </style>
</head>
<body>
    <div id="toolbox">
        <h2>创建</h2>
        <form id="create-shape">
            <button type="button" create="rect">Rect</button>
            <button type="button" create="circle">Circle</button>
            <button type="button" create="ellipse">Ellipse</button>
            <button type="button" create="line">Line</button>
        </form>
        <h2>形状</h2>
        <form id="shape-attrs">
            请先创建图形
        </form>
        <h2>外观和变换</h2>
        <form id="look-and-transform" disabled="disabled">
            <p>
                <label style="display: inline;">填充</label>
                <input id="fill" type="color" value="#ffffff" />
            </p>
            <p>
                <label style="display: inline;">描边</label>
                <input id="stroke" type="color" value="#ff0000" />
                <input id="strokeWidth" type="range" value="1" />
            </p>
            <p>
                <label>translateX</label>
                <input id="translateX" type="range" min="-400" max="400" value="0" />

                <label>translateY</label>
                <input id="translateY" type="range" min="-400" max="400" value="0" />

                <label>rotate</label>
                <input id="rotate" type="range" min="-180" max="180" value="0" />

                <label>scale</label>
                <input id="scale" type="range" min="-1" max="2" step="0.01" value="1" />
            </p>
        </form>
    </div>
    <div id="canvas"></div>
</body>
<script>
    var SVG_NS = 'http://www.w3.org/2000/svg';

    // 图形及对应默认属性
    var shapeInfo = {
        rect: 'x:10,y:10,width:200,height:100,rx:0,ry:0',
        circle: 'cx:200,cy:200,r:50',
        ellipse: 'cx:200,cy:200,rx:80,ry:30',
        line: 'x1:10,y1:10,x2:100,y2:100'
    };

    // 默认公共属性
    var defaultAttrs = {
        fill: '#ffffff',
        stroke: '#ff0000'
    };

    var createForm = document.getElementById('create-shape');
    var attrForm = document.getElementById('shape-attrs');
    var lookForm = document.getElementById('look-and-transform');

    var svg = createSVG();
    var selected = null;

    createForm.addEventListener('click', function(e) {
        if (e.target.tagName.toLowerCase() == 'button') {
            create(e.target.getAttribute('create'));
        }
    });

    attrForm.addEventListener('input', function(e) {
        if (e.target.tagName.toLowerCase() != 'input') return;
        var handle = e.target;
        selected.setAttribute(handle.name, handle.value);
    });

    lookForm.addEventListener('input', function(e) {
        if (e.target.tagName.toLowerCase() != 'input') return;
        if (!selected) return;
        selected.setAttribute('fill', fill.value);
        selected.setAttribute('stroke', stroke.value);
        selected.setAttribute('stroke-width', strokeWidth.value);
        selected.setAttribute('transform', encodeTranform({
            tx: translateX.value,
            ty: translateY.value,
            scale: scale.value,
            rotate: rotate.value
        }));
    });

    function createSVG() {
        var svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        canvas.appendChild(svg);

        svg.addEventListener('click', function(e) {
            if (e.target.tagName.toLowerCase() in shapeInfo) {
                select(e.target);
            }
        });
        return svg;
    }

    function create(name) {
        var shape = document.createElementNS(SVG_NS, name);
        svg.appendChild(shape);
        select(shape);
    }

    function select(shape) {
        var attrs = shapeInfo[shape.tagName].split(',');
        var attr, name, value;

        attrForm.innerHTML = "";

        while(attrs.length) {
            attr = attrs.shift().split(':');
            name = attr[0];
            value = shape.getAttribute(name) || attr[1];
            createHandle(shape, name, value);
            shape.setAttribute(name, value);
        }

        for (name in defaultAttrs) {
            value = shape.getAttribute(name) || defaultAttrs[name];
            shape.setAttribute(name, value);
        }
        selected = shape;

        updateLookHandle();
    }

    function createHandle(shape, name, value) {
        

        var label = document.createElement('label');
        label.textContent = name;

        var handle = document.createElement('input');
        handle.setAttribute('name', name);
        handle.setAttribute('type', 'range');
        handle.setAttribute('value', value);
        handle.setAttribute('min', 0);
        handle.setAttribute('max', 800);

        attrForm.appendChild(label);
        attrForm.appendChild(handle);
    }

    function updateLookHandle() {
        fill.value = selected.getAttribute('fill');
        stroke.value = selected.getAttribute('stroke');
        var t = decodeTransform(selected.getAttribute('transform'));
        translateX.value = t ? t.tx : 0;
        translateY.value = t ? t.ty : 0;
        rotate.value = t ? t.rotate : 0;
        scale.value = t ? t.scale : 1;
    }

    function decodeTransform(transString) {
        var match = /translate\((\d+),(\d+)\)\srotate\((\d+)\)\sscale\((\d+)\)/.exec(transString);
        return match ? {
            tx: +match[1],
            ty: +match[2],
            rotate: +match[3],
            scale: +match[4]
        } : null;
    }

    function encodeTranform(transObject) {
        return ['translate(', transObject.tx, ',', transObject.ty, ') ',
            'rotate(', transObject.rotate, ') ',
            'scale(', transObject.scale, ')'].join('');
    }

</script>
</html>
```
 
# SVG的坐标系统和坐标变换

 
### SVG的世界、视野、视窗概念

 视野（viewBox）是观察世界的一个矩形区域（坐井观天中，井口就是你的视野）

 视窗 是浏览器开辟出来的用于渲染SVG的区域

 preserveAspectRatio-控制视野（视野和视窗不一致的情况使用）

 世界 是SVG定义的，无穷大的

 下面是我对三者关系画的图，希望帮助大家理解。

 ![](https://img-blog.csdnimg.cn/20181028145856149.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_27,color_FFFFFF,t_70)

 对视野、视窗、还有preserveAspectRatio的属性的使用做出来的实例，大家可在浏览器打开操作一下。

 
```
 <!DOCTYPE html>
<html>
    <head>
        <title>ViewBox 使用演示</title>
        <style>
            body {
                background: #eee;
            }
            svg {
                position: absolute;
                border: 1px solid green;
                width: 300px;
                height: 200px;
                left: 50%;
                top: 50%;
                margin-top: -100px;
                margin-left: -150px;
                background: white;
            }
            input[type=number] {
                width: 50px;
            }
        </style>
    </head>
    <body>
        <h1>ViewBox 演示</h1>
        <form id="form">
            <fieldset>
                <legend>viewBox</legend>
                <label>x: <input id="vx" type="number" value="0"></label>
                <label>y: <input id="vy" type="number" value="0"></label>
                <label>width: <input id="vw" type="number" value="300"></label>
                <label>height: <input id="vh" type="number" value="200"></label>
            </fieldset>
            <fieldset>
                <legend>preserveAspectRatio</legend>
                <label>align: <select id="align">
                    <option value="none">none</option>
                    <option value="xMinYMin">xMinYMin</option>
                    <option value="xMidYMin">xMidYMin</option>
                    <option value="xMaxYMin">xMaxYMin</option>
                    <option value="xMinYMid">xMinYMid</option>
                    <option value="xMidYMid" selected>xMidYMid</option>
                    <option value="xMaxYMid">xMaxYMid</option>
                    <option value="xMinYMax">xMinYMax</option>
                    <option value="xMidYMax">xMidYMax</option>
                    <option value="xMaxYMax">xMaxYMax</option>
                </select></label>
                <label>meetOrSlice: <select id="meetOrSlice">
                    <option value="meet">meet</option>
                    <option value="slice">slice</option>
                </select></label>
            </fieldset>
        </form>
        <p>
            <svg id="svg" xmlns="http://www.w3.org/2000/svg">
                <!--Face-->
                <circle cx="100" cy="100" r="90" fill="#39F" />
                <!--Eyes-->
                <circle cx="70" cy="80" r="20" fill="white" />
                <circle cx="130" cy="80" r="20" fill="white" />
                <circle cx="65" cy="75" r="10" fill="black" />
                <circle cx="125" cy="75" r="10" fill="black"/>
                <!--Smile-->
                <path d="M 50 140 A 60 60 0 0 0 150 140" 
                    stroke="white" stroke-width="3" fill="none" />
                <rect id="viewBoxIndicator" stroke="red" stroke-width="3.5" fill="none" />
            </svg>
        </p>
        <script>
            function update() {
                var viewBox =  [vx.value, vy.value, vw.value, vh.value].join(' ');
                var preserveAspectRatio = [align.value, meetOrSlice.value].join(' ');
                svg.setAttribute('viewBox', viewBox);
                svg.setAttribute('preserveAspectRatio', preserveAspectRatio);

                var rect = viewBoxIndicator;
                rect.setAttribute('x', vx.value);
                rect.setAttribute('y', vy.value);
                rect.setAttribute('width', vw.value);
                rect.setAttribute('height', vh.value);
            }
            form.addEventListener('input', update);
            update();
        </script>
    </body>
</html>
```
 
### SVG中的图形分组

 <g>标签来创建分组

 一种整体思维，对多个事物合成分组，然后整体设置其属性

 属性继承

 transfrom属性定义坐标变换

 可以嵌套使用

 

 
### 坐标系统概述

 笛卡尔直接坐标系

 原点

 互相垂直的两条数轴

 角度定义：正反向是指顺时针方向

 ![](https://img-blog.csdnimg.cn/20181028152341260.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_27,color_FFFFFF,t_70)

 

 
### 四个坐标系

 用户坐标系（User Coordinate）：世界的坐标系，SVG原始坐标系，其他坐标系都是从用户坐标系产生的

 自身坐标系（Current Coordinate）：每个图形元素或分组独立与生俱来的

 前驱坐标系（Previous Coordinate）：父容器的坐标系

 参考坐标系（Reference Coordinate）：使用其他坐标系来考究自身的情况时使用的，常用于图形之间的对齐

 以下是对各种坐标系之间的关系做的图，希望有助于大家理解

 ![](https://img-blog.csdnimg.cn/20181028162133873.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_27,color_FFFFFF,t_70)

 
### 坐标变换

 定义

 数学上，是指采用一定的数学方法将一个坐标系的坐标变换成另一个坐标的坐标的过程。

 SVG中，是指自身坐标系通过坐标变换后得到的新的自身坐标系的描述。

 transform属性

 定义前驱坐标系到自身坐标系的线性变换

 语法：

 rotate(<deg>) 定义元素的旋转

 translate(<x>,<y>) 定义元素的平移

 scale(<sx>,<sy>)  定义元素的x方向和y方向缩放

 matrix(<a>,<b>,<c>,<d>,<e>,<f>)  定义变化矩阵，其实以上三种语法的本质原理就是改变matrix的值实现的变换，只是上面的表达更容易让人理解。

 顺便讲一下matrix这个重点

 矩阵的书写

 ![矩阵参数与矩阵对应关系 张鑫旭-鑫空间-鑫生活](http://image.zhangxinxu.com/image/blog/201206/css-transforms-matrix3.gif)

 矩阵实现变换的原理

 ![CSS3中矩阵位置计算公式 张鑫旭-鑫空间-鑫生活](http://image.zhangxinxu.com/image/blog/201206/css-transforms-matrix5.gif)

 例：matrix(1, 0, 0, 1, 30, 30) //a=1, b=0, c=0, d=1, e=30, f=30

 假设原中心点为（0,0）即x=0,y=0, 则x的坐标ax+cy+e=1*0+0*0+30 = 30 ; y的坐标bx+dy+f=0*0+1*0+30 = 30

 所以是原中心点变为了（30,30），元素实现了平移，不知道这么说大家对matrix会不会有一定的了解，如果还不懂则去百度一下吧

 

 以下有一个关于transform的实例，大家可以操作一下，加深对transform属性的了解。

 注：t 100 100 r30（先平移后旋转） 和 r30 t 100 100 （先旋转后平移）是不一样的，大家可以去操作理解一下

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>transform属性</title>
    <style media="screen">
        svg{
            background-color: #fcfcfc;
            display: block;
            margin: 20px auto;
            border: 1px solid #ccc;
        }
        #transform{
            width: 300px;
        }
    </style>
</head>
<body>
<fieldset>
    <legend>设置</legend>
    <label for="">分组：
        <select id="group">
            <option value="a">a</option>
            <option value="b">┗b</option>
            <option value="c">&nbsp;&nbsp;&nbsp;┗c</option>
            <option value="d">┗d</option>
        </select>
    </label>
    <label for="">变换：
        <input type="text" id="tc" />
        <span id="ts"></span>
    </label>
    <p>
        分组：选择相应的坐标系进行变换<br>
        变换：<br>
              旋转 r 100 <=>  rotate(100)<br>
              平移 t 100 100 <=> translate(100, 100)<br>
              缩放 s 3 3 <=> scale(3, 3)<br>
              集合 m a b c d e f <=> matrix(a, b, c, d, e, f)
    </p>
</fieldset>
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="-200.5 -100.5 1000 600">
    <defs>
        <g id="coord">
            <line x1="0" y1="0" x2="300" y2="0"/>
            <line x1="0" y1="0" x2="0" y2="300"/>
            <circle cx="0" cy="0" r="2"/>
            <circle cx="100" cy="0" r="2"/>
            <circle cx="200" cy="0" r="2"/>
            <circle cx="0" cy="100" r="2"/>
            <circle cx="0" cy="200" r="2"/>
        </g>
    </defs>

    <use xlink:href="#coord" stroke="black" fill="black"/>
    <text fill="black" x="5" y="20">World</text>

    <g id="a" stroke="red" fill="red">
        <use xlink:href="#coord"/>
        <text x="5" y="20">a</text>

        <g id="b" stroke="blue" fill="blue">
            <use xlink:href="#coord"/>
            <text x="5" y="20">b</text>

            <g id="c" stroke="green" fill="green">
                <use xlink:href="#coord"/>
                <text x="5" y="20">c</text>
            </g>

        </g>

        <g id="d" stroke="pink" fill="pink">
            <use xlink:href="#coord"/>
            <text x="5" y="20">d</text>
        </g>

    </g>
</svg>
<script>
    function target() {
        return document.getElementById(group.value);
    }
    // 把变换命令转换为字符串
    // 't 10 10 r 30 s 1.3'  => 'translate(10, 10) rotate(30) scale(1.3)'
    function tc2ts(tc) {
        var arr = (tc || '').split(' ');
        var ts = '';
        var elem, lastElemType;
        var cmd = {
            't': 'translate(',
            'r': 'rotate(',
            's': 'scale(',
            'm': 'matrix('
        };

        while ( elem=arr.shift() ) {
            if ( cmd[elem] ) {
                if ( lastElemType=='number' ) ts += ') ';
                ts += cmd[elem];
                lastElemType = 'command';
            } else {
                if ( lastElemType=='number' ) ts += ', ';
                ts += elem;
                lastElemType = 'number';
            }
        }
        if ( ts.length ) ts += ')';
        return ts;
    }

    group.oninput = function() {
        tc.value = target().tc || '';
        ts.innerHTML = tc2ts(tc.value);
    };

    tc.oninput = function() {
        target().tc = tc.value;
        target().setAttribute('transform', ts.innerHTML = tc2ts(tc.value));
    };
</script>
</body>
</html>
```
 
# SVG颜色、渐变和笔刷

 
### RGB和HSL

 RGB

 红色、绿色、蓝色三个量值

 表示方式有rgb(r, g, b) 或#rrggbb

 每个分量取值范围：[0, 255]

 优势：显示器容易解析，故比较常用

 劣势：不符合人类描述颜色的习惯，修改颜色，暗度，亮度时需要改多个值。

 

 HSL

 颜色、饱和度、亮度三个分量

 格式：hsl(h, s%, l%)

 取值范围：h:[0, 359] s,l: [0, 100]

 优势：符合人类描述颜色的习惯，顺便附上一个酷酷的hsl配色网站 [http://paletton.com/](http://paletton.com/#uid=11Q0u0krZwkEXm9DJo-gQB-e-G1)

 

 透明度

 rgba(r, g, b, a) 和 hsla(h, s%, l%, a) 表示带透明度的颜色

 opacity属性表示元素的透明度

 a和opacity的取值范围：[0, 1]

 使用方法：

 
```
 <rect fill="rgb(255,0,0)" opacity="0.5"/>
<rect stroke="hsla(0, 50%, 60%, 0.5)"/>
```
 

 
### 线性渐变和径向渐变

 线性渐变

 <linearGradient> 和 <stop>

 定义方向

 关键点位置及颜色

 gradientUnits用两个属性：

 objectBoundingBox 这是默认属性，使用x1=0, y1=0, x2=1, y2=1分别表示图形的最左端（0）， 最上端（0）， 最右端（1）， 最低端 （1）

 userSpaceOnUse 位置坐标使用世界坐标系，单位是px

 注释：如没有设置gradientUnits属性，则默认使用objectBoundingBox

 使用方法：

 
```
 <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <defs>
        <!--objectBoundingBox属性-->
        <linearGradient id="grad1" gradientUnits="objectBoundingBox"
                        x1="0" y1="0" x2="1" y2="1">
        <!--userSpaceOnUse属性-->
        <!--<linearGradient id="grad1" gradientUnits="userSpaceOnUse"-->
                        <!--x1="100" y1="100" x2="150" y2="150">-->
            <stop offset="0" stop-color="#1497FC"/>
            <stop offset="0.5" stop-color="#A469BE"/>
            <stop offset="1" stop-color="#FF8C00"/>
        </linearGradient>
    </defs>
    <rect x="100" y="100" fill="url(#grad1)" width="200" height="150"/>
</svg>
```
 

 径向渐变

 <radialGradient> 和 <stop>

 定义方向 

 关键点位置及颜色 cx 和 cy 

 gradientUnits

 焦点位置 fx 和 fy

 实例：

 
```
 <svg xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="grad2" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5" >
            <stop offset="0" stop-color="rgb(20, 151, 252)"/>
            <stop offset="0.5" stop-color="rgb(164, 105, 190)"/>
            <stop offset="1" stop-color="rgb(255, 140, 0)"/>
        </radialGradient>
    </defs>
    <rect x="100" y="100" width="200" height="150" fill="url(#grad2)"></rect>
</svg>
```
 

 <stop> 

 定义渐变上的颜色坡度，可以是<linearGradient>线性渐变或<radialGradient>径向渐变的子元素

 offset 定义颜色百分比，取值范围：[0, 100%]

 stop-color 定义渐变颜色

 stop-opacity 定义渐变透明度

 

 使用笔刷

 绘制文理

 <pattern>标签

 patternUnits 和 patternContentUnits 

 objectBoundingBox 这是默认属性，使用x1=0, y1=0, x2=1, y2=1分别表示图形的最左端（0）， 最上端（0）， 最右端（1），最低端 （1）

 userSpaceOnUse 位置坐标使用世界坐标系，单位是px

 
```
 <svg xmlns="http://www.w3.org/2000/svg">
    <defs>
        <pattern id="grad2" x="0" y="0" width="0.25" height="0.25" patternUnits="
objectBoundingBox" patternContentUnits="objectBoundingBox">
            <circle cx="0.1" cy="0.1" r="0.1" fill="red"></circle>
        </pattern>
    </defs>
    <rect x="100" y="100" width="800" height="300" fill="url(#grad2)" stroke="blue"></rect>
</svg>
```
 

 
# 

 ![](https://img-blog.csdnimg.cn/20181031005948243.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 首先问大家一个问题，你觉得以上图片是怎么画出来的？画板绘制？no，手绘？no.这是用path工具画出来的，怎么样？是不是瞬间觉得path很强大，那赶紧一起学习吧。

 

 
# path高级教程

 
### Path概述

 表示路径，一个强大的绘图工具

 基本命令

 M = moveto 移动当前位置

 L = lineto 从当前位置绘制线段到指定位置

 H = horizontal lineto 从当前位置绘制水平线到达指定地x坐标

 V = vertical lineto 从当前位置绘制竖直线到达指定地y坐标

 C = curveto 从当前位置绘制三次贝塞尔曲线到指定位置

 S = smooth curveto 从当前位置光滑绘制三次贝塞尔曲线到指定位置

 Q = quadratic Belzier curve 从当前位置绘制二次贝塞尔曲线到指定位置

 T = smooth quadratic Belzier curveto 从当前位置光滑绘制二次贝塞尔曲线到指定位置

 A = elliptical Arc 从当前位置绘制弧线到指定位置

 Z = closepath 关闭路径

 注释：

 以上的翻译不一定是正确的，最好是自己使用一下属性然后理解一下它们的用处和原理

 大写表示坐标参数为绝对定位，小写表示相对定位（相对上一次画笔所在位置）。

 最后参数表示最终要到达的位置

 命令可以重复参数表示重复执行同一条命令

 例：复制一下文件，创建一个svg格式的文件，然后在浏览器中打开。

 此例子定义了一条路径，开始于位置250 150， 到达位置150 350，然后再到350 350， 最后在250 150 关闭路径

 
```
 <?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<path d="M250 150 L150 350 L350 350 Z" />

</svg>
```
 效果图

 
### ![](https://img-blog.csdnimg.cn/20181029232948852.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 

 

 
### 移动和直线命令

 M (x, y) + 移动画笔，一般是设置画笔开始位置，如果后面有重复参数则会当做L命令处理

 L (x, y) + 绘制直线到指定位置

 H (x) + 绘制水平线到指定的x位置

 V (y) + 绘制竖直线到指定的y位置

 如果使用小写 m、l、h、v 则是使用相对位置绘制

 注：使用绝对坐标时，方便我们对图形整体（宏观）的把握，而使用相对坐标时，则有助于我们对图形的细节（微观）的把握，所以，按具体情况选择合适的命令格式。

 

 
### 弧线命令

 A(rx, ry, xr, laf, sf, x, y) ——绘制弧线

 rx - (radius-x) 弧线所在椭圆的x半轴长

 ry - (radius-y) 弧线所在椭圆的y半轴长

 xr - (xAxis-rotation) 弧线所在椭圆的长轴角度

 laf - (large-arc-flag) 是否选择弧长较长的那一段弧 取值0（短弧） 或 1（长弧）

 sf - (sweep-flag) 是否选择逆时针方向的那一段弧 取值0（顺时针） 或 1（逆时针）

 x, y - 弧的终点位置

 ![](https://img-blog.csdnimg.cn/20181031004427949.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 实例：

 
```
 <svg xmlns="http://www.w3.org/2000/svg">
        <path d="M 300 300 A 300 300 0 0 1 500 500" stroke="red" stroke-width="1" fill="none"/>
    
</svg>
```
 解释：下图可能画得有点杂乱，但你们那么强大，一眼就能看明白的。这是最为简单的一种画法，可以跟其他命令混合使用，如果设计感强的，可以利用这些命令制作出很精美的图片。

 ![](https://img-blog.csdnimg.cn/20181031005604294.png)

 效果图

 ![](https://img-blog.csdnimg.cn/20181031005211365.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 有兴趣的可以画一下下面这张图

 ![](https://img-blog.csdnimg.cn/20181031005916181.png)

 

 
### 贝塞尔曲线

 SVG只能画二次贝塞尔曲线和三次贝塞尔曲线：

 二次贝塞尔曲线 P0和P2是起始结点和终结点，而P1是P0和P2之外的点。绿线是由P0到P1时的结点和P1到P2时的结点产生，曲线由起始结点画线到终结点。

 ![](https://img-blog.csdnimg.cn/20181031093552515.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 三次贝塞尔曲线 P0和P3是起始结点和终结点，而P1，P2是P0和P3之外的点。

 ![](https://img-blog.csdnimg.cn/20181031094026235.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 

 二次贝塞尔曲线绘制命令

 起始点

 结束点

 控制点

 控制线

 
```
 M x0 y0 Q x1 y1 x y
```
 ![](https://img-blog.csdnimg.cn/20181031094306388.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 

 三次贝塞尔曲线绘制命令

 
```
 M x0 y0 C x1 y1 x2 y2 x y
```
 ![](https://img-blog.csdnimg.cn/20181031094553500.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 介绍一个牛人做的网站 [http://myst729.github.io/bezier-curve/](http://myst729.github.io/bezier-curve/) 可以在线看到贝塞尔曲线的画线过程

 

 光滑贝塞尔曲线

 -T:Q的光滑版本

 C1是上一段曲线的控制点关于当前曲线起始点的镜像位置

 -S:C的简化版本

 C1是上一段曲线的控制点2关于当前起始点的镜像位置

 ![](https://img-blog.csdnimg.cn/20181101135030702.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 

 
# SVG文本

 
### <text> 和 <tspan> 创建文本

 x和y属性 - 定位标准

 
```
 <svg xmlns="http://www.w3.org/2000/svg">
       <text x="100" y="100"  style="font-size:50px " >ABCDE</text>
</svg>
```
 ![](https://img-blog.csdnimg.cn/20181101140301939.png)

 dx和dy属性 - 字形偏移

 
```
 <svg xmlns="http://www.w3.org/2000/svg">
       <text x="100" y="100" dx="20 20 20 20 20" dy="20 20 20 20 20" style="font-size:50px " >ABCDE</text>
</svg>
```
 ![](https://img-blog.csdnimg.cn/20181101140232474.png)

 style属性 - 设置样式

 直接对text元素设置属性

 实例：以下一个动图，可自行下载到html文件中，在浏览器打开。

 
```
 <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>svg</title>
</head>
<body>
<svg width="1200" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0,0H20V20" stroke-width="1" stroke="#f0f0f0" fill="none"/>
        </pattern>
    </defs>
    <rect x="0" y="0" width="1200" height="1000" fill="url(#grid)" stroke="" stroke-width=""/>
    <text x="100" y="150" font-size="14px" font-family="Microsoft YaHei">ABCDEFGHIJKLMNOPQRSTUVWXYZ</text>
    <path d="M100,0V200M0,100H200" stroke="red" fill="none" transform=translate(0,50) ></path>

</svg>
<script type="text/javascript">
    var n = 26;
    var x = [];
    var y = null;
    var  i = n;
    var s = 100;
    var w = 0.02;
    var t = 0.2;
    var sintext = document.getElementsByTagName('text')[0];
    while(i--) x.push(20);
    function arrange(t) {
        y = [];
        var ly = 0;
        var cy;
        for(i=0;i<n;i++){
            cy = -s * Math.sin(w * i * 20 + t);
            y.push(cy - ly);
            ly = cy;
        }
    }
    function render() {
        sintext.setAttribute("dx",x.join(' '));
        sintext.setAttribute("dy",y.join(' '));
    }
    function frame() {
        t += 0.01;
        arrange(t);
        render();
        requestAnimationFrame(frame);
    }
    frame();
</script>
</body>
</html>
```
 ![](https://img-blog.csdnimg.cn/2018110114480283.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 tspan为文本添加样式

 
```
 <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>svg</title>
</head>
<body>
<svg width="1200" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0,0H20V20" stroke-width="1" stroke="#f0f0f0" fill="none"/>
        </pattern>
    </defs>
    <rect x="0" y="0" width="1200" height="1000" fill="url(#grid)" stroke="" stroke-width=""/>
    <text x="100" y="150" font-size="20px" font-family="Microsoft YaHei"></text>
    <path d="M100,0V200M0,100H200" stroke="red" fill="none" transform=translate(0,50) ></path>

</svg>
<script type="text/javascript">
    var NS = 'http://www.w3.org/2000/svg';
    var text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var n = text.length;
    var x = [];
    var y = null;
    var  i = n;
    var s = 100;
    var w = 0.02;
    var t = 0.2;
    var sintext = document.getElementsByTagName('text')[0];
    while(i--) {
        x.push(20);
        var tspan = document.createElementNS(NS,'tspan');
        tspan.textContent = text[n - i - 1];
        sintext.appendChild(tspan);
        var h = Math.round(360 / 26 * i);
        tspan.setAttribute('fill','hsl(' + h + ', 100%, 80%)');
    }
    function arrange(t) {
        y = [];
        var ly = 0;
        var cy;
        for(i=0;i<n;i++){
            cy = -s * Math.sin(w * i * 20 + t);
            y.push(cy - ly);
            ly = cy;
        }
    }
    function render() {
        sintext.setAttribute("dx",x.join(' '));
        sintext.setAttribute("dy",y.join(' '));
    }
    function frame() {
        t += 0.01;
        arrange(t);
        render();
        requestAnimationFrame(frame);
    }
    frame();
</script>
</body>
</html>
```
 ![](https://img-blog.csdnimg.cn/20181101222157470.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 
### 垂直居中问题

 text-anchor - 水平居中属性

 dominant-baseline 属性

 

 
### <textPath>让文本在制定路径上排序

 使用方法

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>textPath路径文本</title>
</head>
<body>
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
        <path id="path1" d="M 100 200 Q 200 100 300 200 T 500 200" stroke="rgb(0, 255, 0)" fill="none"/>
        <text style="font-size:14px;">
            <textPath xlink:href="#path1">
                欢迎来到shareclub！！！欢迎来到shareclub！！！欢迎来到shareclub！！！
            </textPath>
        </text>
    </svg>
</body>
</html>
```
 ![](https://img-blog.csdnimg.cn/20181101224316841.png)

 

 布局原理

 浏览器从字体表中查出此字体的宽度，然后在曲线中找到相同的宽度，然后找一个中心点画出垂直坐标，然后把字体的基线对其到法线上。

 ![](https://img-blog.csdnimg.cn/20181101223218823.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 最后一个点作为第二个字的第一个起点，然后以相同原理对齐

 ![](https://img-blog.csdnimg.cn/20181101223612922.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 

 

 

 定位属性

 x / dx：控制字体沿着曲线前后移动，超出曲线部分会被截取不显示

 y：y对于文本没有任何作用

 dy：在法线方向上下移动文本

 text-anchor：

 -start 以字符串开头第一个字母为焦点对齐

 -middle 以字符串中间的字母为焦点对齐

 -end 以字符串最后一个字母为焦点对齐

 startOffset：设置起始点

 

 脚本控制

 setAttributeNS() 方法设置xlink:href属性

 把文本节点替换为<textpath>节点

 

 

 

 
### <a>插入超链接

 可以添加到任何的图形上

 xlink:href 指定连接地址

 xlink:title 指定连接提示

 target 指定打开目标

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>a超链接</title>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg">
    <a xlink:href="http://www.baidu.com" xlink:title="百度" target="_blank">
        <rect
                x="100"
                y="100"
                width="100"
                height="100"
                fill="rgba(255, 0, 0, 0.5"
                stroke="red"
                stroke-width="3">
        </rect>
    </a>
</svg>
</body>
</html>
```
 
# 

 
# 图形的引用、裁切和蒙版

 
### <use>标签创建图形引用

 实例：满天星星

 
### <clip> 标签裁切图形

 实例：绘制灯塔的光线

 
### <mask> 标签创建蒙版

 实例：绘制月牙及湖面倒影

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>starsky</title>
    <style>
        html,body{
            margin:0;
            padding:0;
            width:100%;
            height:100%;
            background:#001122;
            line-height:0;
            font-size:0;
        }
    </style>
</head>
<body>
    <svg width="100%" height="100%"
        viewBox = "-400 -300 800 600"
        perserveAspectRatio="xMidYMid slice">

        <!--星星绘画：先画出一个星星，然后使用use画出同样形状，但不同大小的星星-->
        <defs>
            <polygon id="star" points="0 -10 2 -2 10 0 2 2 0 10 -2 2 -10 0 -2 -2" fill="white"></polygon>
        </defs>

        <!--真实事物-->、
        <g id="real">
            <!--星星-->
            <g id="star-group"></g>  <!--使用group的好处：后期可以随之整体调整位置-->
            <!--月亮-->
            <g id="moon-group">
                <mask id="moon-mask">  <!--月亮绘制：定义一个蒙版，然后通过蒙版设置能够通过蒙版的图形部分-->
                    <circle cx="-250" cy="-150" r="100" fill="white"></circle>
                    <circle cx="-200" cy="-200" r="100" fill="black"></circle>
                </mask>
                <circle cx="-250" cy="-150" r="100" fill="yellow" mask="url(#moon-mask)"></circle>
            </g>
            <!--灯塔-->
            <g id="light-tower" transform="translate(255, 0)">
                <defs>
                    <linearGradient id="tower" x1="0" y1="0" x2="1" y2="0">  <!--设置灯塔渐变-->
                        <stop offset="0" stop-color="#999"></stop>
                        <stop offset="1" stop-color="#333"></stop>
                    </linearGradient>

                    <radialGradient id="light" cx="0.5" cy="0.5" r="0.5">  <!--设置灯光渐变-->
                        <stop offset="0" stop-color="rgba(255, 255, 255,.8"></stop>
                        <stop offset="1" stop-color="rgba(255, 255, 255, 0)"></stop>
                    </radialGradient>

                    <clipPath id="light-clip">   <!--clip裁剪路径-->
                        <polygon points="0 0 -400 -15 -400 15"
                                 fill="rgba(255,0,0,.5)">
                            <!--动画效果-->
                            <animateTransform 
                                    attributeName="transform" 
                                    attributeType="XML" 
                                    type="rotate" 
                                    from="0" 
                                    to="360" 
                                    dur="10s" 
                                    repeatCount="indefinite">
                            </animateTransform>
                        </polygon>
                        <circle cx="0" cy="0" r="2"></circle>
                    </clipPath>
                </defs>
                <polygon points="0 0 5 50 -5 50" fill="url(#tower)"></polygon>

                <!--光线绘画:先画一个椭圆，再画一个三角形，然后使用三角形对椭圆裁剪-->
                <ellipse cx="0" cy="0" rx="300" ry="100"
                         fill="url(#light)"
                         clip-path="url(#light-clip)"></ellipse>  <!--调用裁剪路径，用三角形裁剪椭圆，形成光线-->
            </g>
        </g>
        <!--湖面镜像-->
        <g id="reflact" transform="translate(0 50)" mask="url(#fading)">
            <defs>
                <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="rgba(255,255,255,.3)"></stop>
                    <stop offset="0.5" stop-color="rgba(255,255,255,0)"></stop>
                </linearGradient>
                <mask id="fading">
                    <rect x="-400" y="0" width="800" height="300" fill="url(#fade)"></rect>
                </mask>
            </defs>

            <use xlink:href="#real" transform="scale(1, -1) translate(0 -50)" />

        </g>


    </svg>
    <script>
        var SVG_NS = 'http://www.w3.org/2000/svg';
        var XLINK_NS = 'http://www.w3.org/1999/xlink';
        var paper = document.querySelector('svg');

        renderStar();

        function use(origin){  //使用use可以快速绘画多种相同的图形
            var _use = document.createElementNS(SVG_NS, 'use');
            _use.setAttributeNS(XLINK_NS, 'xlink:href', '#' + origin.id);
            return _use;
        }

        function random(min, max){
            return min + (max - min) * Math.random();
        }

        function renderStar(){
            var starRef = document.getElementById('star');
            var starGroup = document.getElementById('star-group');
            var starCount = 500;

            var star;
            while(starCount--){
                star = use(starRef);
                star.setAttribute('opacity',random(0.1, 0.4));
                star.setAttribute('transform',
                    'translate(' + random(-400, 400) + ',' + random(-300, 50) + ')'
                    + 'scale(' + random(0.1, 0.6) + ')');
                starGroup.appendChild(star);
            }

        }
    </script>
</body>
</html>
```
 

 
# SVG动画

 
### 动画原理

 动画原理

 SVG的动画原理跟flash的原理是一样的（以前有玩过flash的就知道了），在不同的帧设置不同的值，这样图形就会随着时间碎片的增加而产生动画效果。比如一个矩形，通过时间的差值，一帧一帧的改变设置某一个值比如x值，让其到达最终值，就会使矩形产生水平移动效果。

 值-时间关系图

 from 开始值

 to 最终值

 duration 动画时长

 timing-function 动画曲线

 frame 帧（1s切成24块，即24帧/s，人眼看到的就是一个连续的动画，如果要流畅的话，就60帧/s以上）

 interpolation 动画差值

 ![](https://img-blog.csdnimg.cn/20181103190158877.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 
### 创造并使用动画

 内部资源标识符定位，即元素的id或class

 
```
 <animate xlink:href="url(#rect1)"></animate>
```
 包含在目标元素中 

 
```
 <rect x="0" y="0" width="100" height="200">
    <animate></animate>
</rect>
```
 

 
### SMIL for SVG

 参考资料：

 [https://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/](https://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/)

 [https://www.w3.org/TR/SVG/animate.html](https://www.w3.org/TR/SVG/animate.html)

 动画标签：

 <animate>基本动画

 -attributeName 可以是元素名，或者样式名

 -attributeType 代表动画是对XML属性（比如元素的位置变化） 还是 CSS样式（比如元素的颜色变化）

 -from 从开始值

 -to 到最终值

 -dur 设置动画时间

 -repeatCount 属性值可以是数值（比如设置为100，则重复操作100次），也可以是indefinite，则一直循环操作

 -fill 属性值freeze代表动画结束时保存最终值，不会变成开始值，即留在最后的位置；属性值remove代表动画结束时删除最终值，然后变回开始值，即返回开始位置

 -begin 定义动画的开始时间，可以是数值，表达式

 -calcMode

 注：动画是可以叠加的（比如既可以设置移动，也可以设置颜色变化）

 
```
 <animate
    attributeType="XML" 
    attributeName="x"
    from="10"
    to="100"
    dur="3s">
</animate>
```
 

 <animateTransform>变换动画

 -type rotate旋转 或 scale缩放

 -from 从开始值

 -to 到最终值

 -dur 动画时间

 注：不支持多个动画重叠

 
```
 <svg viewBox="-400 -400 800 800">
        <rect  x="0" y="0" width="100" height="100" fill="red">
        <animateTransform id="rotate"
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0"
            to="360"
            dur="3s"
        >
        </animateTransform>
        </rect>
</svg>
```
 

 <animateMotion>轨迹移动

 -path 运动轨迹

 -dur 动画时间

 -rotate auto 根据路径的切线变化而旋转

 
```
 <svg viewBox="-400 -400 800 800">
        <rect  x="0" y="0" width="40" height="40" fill="red">
        <animateMotion
            path="M 0 0L 100 100A 200 200 0 1 0 0 -100"
            dur="5s"
            rotate="auto"
        >
        </animateMotion>
        </rect>
        <path id="motion-path" d="M 0 0L 100 100A 200 200 0 1 0 0 -100"
             stroke="red" fill="none"></path>
</svg>
```
 另一种添加路径方法 mpath

 
```
 <svg viewBox="-400 -400 800 800">
        <rect  x="0" y="0" width="40" height="40" fill="red">
        <animateMotion
            dur="5s"
            rotate="auto"
        >
            <mpath xlink:href="#motion-path"></mpath>
        </animateMotion>
        </rect>
        <path id="motion-path" d="M 0 0L 100 100A 200 200 0 1 0 0 -100"
             stroke="red" fill="none"></path>
</svg>
```
 

 脚本动画

 requestAnimationFrame(update) 通过脚本在每一个时间帧对当前元素属性的更新

 实例：力导向图（存在引力和排斥力）

 ![](https://img-blog.csdnimg.cn/20181103201740492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 实例源代码：

 HTML代码：

 
```
 <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>力导向图</title>
	<style type="text/css">
		html,body,svg{
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
		}
	</style>
</head>
<body>
	<svg viewBox="-400 -400 800 800">
		<path d="" stroke="gray" fill="none" id="links"></path>
	</svg>
	<script type="text/javascript" src="vector.js"></script>
	<script type="text/javascript">
		var points = 'a,b,c,d,e,f,g'.split(",").map(function (name,index,arr) {
			return { 
				name : name,
				color : 'hsl(' + (360 * index / arr.length) + ", 100%, 60%)"
			};
		});
		var relation = 300;
		var k = 0.05;
		var svg = document.querySelector("svg");
		var Vector = window.Vector;

		function random(min,max) {
			return Math.round(min + (max - min) * Math.random());
		}

		points.forEach(function (point) {
			var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
			var x = random(-200,200);
			var y = random(-200,200);
			circle.setAttribute('cx',x);
			circle.setAttribute('cy',y);
			circle.setAttribute('r',10);
			circle.setAttribute('fill',point.color);

			svg.append(circle);

			point.circle = circle;
			point.s = new Vector(x,y);
			point.v = new Vector();
			point.a = new Vector();
		});
		// 上一帧时间 +new Date() 相当于 (new Date()).getTime(); 
		var lastFrameTime = +new Date();

		function update() {
			// 当前帧时间
			var frameTime = +new Date();
			var t = frameTime - lastFrameTime;
			// 对时间t进行缩放
			t /= 100;
			console.log(t);
			//点位置更新
			points.forEach(function (pa) {
				var f = new Vector();
				//计算合力
				points.forEach(function (pb) {
					if (pa == pb) return;
					// x为一个矢量
					var x = Vector.fromPoints(pa.s ,pb.s);
					// 弹性形变长度
					var delta = x.length() - relation;

					// f = k * x;
					f = f.add(x.normalize(delta * k));
				});

				pa.a = f;
				pa.v = pa.v.add(pa.a.multipy(t)).multipy(0.98);
				pa.s = pa.s.add(pa.v.multipy(t));

				pa.circle.setAttribute('cx',pa.s.x);
				pa.circle.setAttribute('cy',pa.s.y);
			});


			//连线更新
			var linkPath = [];
			points.forEach(function (pa) {
				var sa = pa.s;
				points.forEach(function (pb) {
					if (pa == pb) return;
					var sb = pb.s;	
					linkPath = linkPath.concat([
							"M",sa.x,sa.y,
							"L",sb.x,sb.y,
						]);
				});
			});
			document.getElementById('links').setAttribute('d',linkPath.join(' '));
			lastFrameTime = frameTime;
			window.requestAnimationFrame(update);
		}

		window.requestAnimationFrame(update);
	</script>
</body>
</html>
```
 js代码：

 
```
 ;(function () {
	function Vector(x,y) {
		this.x = x || 0;
		this.y = y || 0;
	}
	Vector.prototype = {
		constructor: Vector,
		square : function () {
			return this.x * this.x + this.y * this.y;
		},
		length : function () {
			// 返回平方根
			return Math.sqrt(this.square()); 
		},
		add : function (q) {
			return new Vector(this.x + q.x,this.y + q.y);
		},
		minus : function (q) {
			return new Vector(this.x - q.x,this.y - q.y);
		},
		multipy : function (scale) {
			return new Vector(this.x * scale,this.y * scale);
		},
		normalize : function (length) {
			if (length === undefined) {
				length = 1;
			}
			return this.multipy(length / this.length());
		}
	};
	Vector.fromPoints = function (p1,p2) {
		return new Vector(p2.x - p1.x, p2.y - p1.y);
	};
	window.Vector = Vector;
})()
```
 效果图

 ![](https://img-blog.csdnimg.cn/20181103203349442.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTEwNTM4,size_16,color_FFFFFF,t_70)

 

 本文内容是我自学的知识整理，其中的一些理解不一定正确，希望大家还是能够自己学习一下然后有自己的见解，如果与我的理解不一致，也希望能够留言指正。

 附学习网址：

 w3school [http://www.w3school.com.cn/svg/index.asp](http://www.w3school.com.cn/svg/index.asp)

 慕课网 [https://www.imooc.com/learn/143](https://www.imooc.com/learn/143)

   
 