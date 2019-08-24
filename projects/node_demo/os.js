var os = require('os');

//操作系统默认临时文件夹
console.log(os.tmpdir());

//CPU的字节序
console.log(os.endianness());

//操作系统主机名
console.log(os.hostname());

//操作系统名
console.log(os.type());

//编译时的操作系统名
console.log(os.platform());

//CPU架构
console.log(os.arch());

//操作系统的发行版本
console.log(os.release());

//操作系统运行的时间
console.log(os.uptime());

//包含1、5、15分钟平均负载的数组
console.log(os.loadavg());

//系统内存总量
console.log(os.totalmem());

//操作系统空闲内存量
console.log(os.freemem());

//对象数组，包含CPU信息
console.log(os.cpus());

//网络接口列表
console.log(os.networkInterfaces());