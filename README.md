## 启动命令
npm start

## web 服务 如何处理一个请求
url-->网络--》dns解析--》目标服务器
1.如何响应这个请求-->路由/规则
#请求的方法来区分
(1).get-->响应
(2).post -->post
#通过 uri -->路径
## 1.需要定义一个 api/路由 满足客户端无论使用什么请求方式(get/post/put/delete)都能得到响应
const express = require('express')
const app = express();
app.all('/demo',(req,res)=>[

])
app.use -->使用中间件

## 2.无论客户端使用任何的 uri 我们的服务都可以响应 --》日志

app.use -->使用中间件

## 3.如何做路由的拆分

express.Router

## 中间件完整的结构
## 1.是一个函数
## 2. err,req,res,next-->function

## 中间件
1.app级别使用
    1，注册的时候，一定是在最顶级
    2. app.use-->api去加载进来
2.router级别

## nodemon.json 监测修改的文件，可以根据命令rs重启局部重启系统
    

