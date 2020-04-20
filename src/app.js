const http = require('http')
const server = http.createServer((req,res)=>{
    res.end('hello world')
}).listen(3000,'127.0.0.1',()=>{
    console.log('server 启动成功')
})


//配置nodemon
//1. npm install nodemon -d
//2. 修改 package.json 中的启动命令 
//3. 通过增加 nodemon.json 配置 指定 特殊 watch 文件