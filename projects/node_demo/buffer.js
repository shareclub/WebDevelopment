/*创建Buffer缓冲区 */
// const buf = Buffer.from('shareclub', 'ascii');

// console.log(buf.toString('hex'));

// console.log(buf.toString('base64'));

/*写入数据 */
// buf = Buffer.alloc(256);

// len = buf.write('1');

// console.log('写入字节数:' + len);

/*缓冲区合并*/
var buf1 = Buffer.from('welcome');
var buf2 = Buffer.from('shareclub');
var buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());

/*缓冲区比较*/
// var buffer1 = Buffer.from('abcd');
// var buffer2 = Buffer.from('abcd');
// var result = buffer1.compare(buffer2); //长度比较，小于返回-1，相同返回0，大于返回1

// console.log(result);

// if (result < 0) {
//     console.log(buffer1 + '在' + buffer2 + '之前');
// } else if (result == 0) {
//     console.log(buffer1 + '与' + buffer2 + '相同');
// } else if (result > 0) {
//     console.log(buffer1 + '在' + buffer2 + '之后');
// }

/*拷贝缓冲区 */
// var buffer1 = Buffer.from('abcdefasdf');
// var buffer2 = Buffer.from('ABCDEF');

// buffer2.copy(buffer1, 3); //拷贝会覆盖原buffer上的元素，且长度较短的写在前

// console.log(buffer1.toString());

/*裁剪缓冲区 */
// var buffer1 = Buffer.from('shareclub');

// var buffer2 = buffer1.slice(1,3);  //第一个下标为0，表示返回下标为1,2的元素

// console.log(buffer2.toString());