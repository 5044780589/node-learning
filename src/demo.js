// //d读取系统的CPU的信息
// const os = require('os');
// const cpus = os.cpus();
// console.log(cpus.length)

// //获取内存信息

// const total = os.totalmem();//单位byte   
// console.log(total/1024/1024/1024);//单位GB

// const free = os.freemem();
// console.log(free/1024/1024/1024);//单位GB

// web 服务

// ajax-->api-->web server(nodejs)

const http = require('http')
const server = http.createServer((req,res)=>{
    res.end('hello')
}).listen(3000,'127.0.0.1',()=>{
    console.log('服务启动成功')
})
