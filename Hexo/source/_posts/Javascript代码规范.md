---
title: Javascript代码规范
date: 2018-11-13 11:05:43
tags: JavaScript
category: 前端
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/qq_39110538/article/details/84025222](https://blog.csdn.net/qq_39110538/article/details/84025222)   
    
   # Javascript代码规范

 
## 变量名

 变量名推荐使用驼峰法命名（calmelCase）

 
```
 firstName = "shareClub";
```
 
## 空格与运算符

 通常运算符（ = + - * / ）前后需要添加空格

 
```
 var x = y + z;
```
 
## 代码缩进

 通常用4个空格符号缩进代码块（不要使用tab键，因为在不同的平台可能显示不一致）

 
```
 function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
```
 
## 语法规则

 简答语句的通用规则：一条语句通常以分号作为结束符。

 
```
 var values = ["Volvo", "Saab", "Fiat"];

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```
 复杂语句的通用规则：

 

 
  1. 将左花括号放在第一行的结尾。 
  3. 左花括号前添加一空格 
  5. 将右花括号独立放在一行 
  7. 不要以分号结束一个复杂的声明 
```
 //函数
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

//循环
for (i = 0; i < 5; i++) {
    x += i;
}

//条件语句
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
```
 
## 对象规则

 对象定义的规则:

 
  1. 将左花括号与类名放在同一行。 
  3. 冒号与属性值间有个空格。 
  5. 字符串使用双引号，数字不需要。 
  7. 最后一个属性-值对后面不要添加逗号。 
  9. 将右花括号独立放在一行，并以分号作为结束符号。 
```
 var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```
 短的对象代码可以直接写成一行:

 
```
 var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```
 
## 每行代码字符小于 80

 为了便于阅读每行字符建议小于数 80 个。

 如果一个 JavaScript 语句超过了 80 个字符，建议在 运算符或者逗号（不破坏语义的地方）后换行。

 
```
 document.getElementById("demo").innerHTML =
    "Hello Runoob.";
```
 
## 命名规则

 一般很多代码语言的命名规则都是类似的，例如:

 
  1. 变量和函数为小驼峰法标识, 即除第一个单词之外，其他单词首字母大写（ **lowerCamelCase**） 
  3. 全局变量为大写 (**UPPERCASE **) 
  5. 常量 (如 PI) 为大写 (**UPPERCASE **) HTML 载入外部 JavaScript 文件

 使用简洁的格式载入 JavaScript 文件 ( type 属性不是必须的):

 
```
 <script src="myscript.js">
```
 

 

 

   
 