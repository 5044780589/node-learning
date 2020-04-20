const express = require('express')
//是一个express实例
const app = express();

const memberRouter = require('./member.router')
const skuRouter = require('./sku.router')
const models = require('../models')//模型对象
const bodyParser = require('body-parser')
//
//post请求时转换body中的参数，缺少此段代码req.body取不到数据
app.use(express.json());
app.use(express.urlencoded())
app.use(bodyParser.urlencoded({extended:true}))

function error_handler_middleware(err,req,res,next){
    if(err){
        res.status(500).json({
            message:err.message
        })
    }else{

    }
}

function log_middleware(req,res,next){
    console.log('开始请求')
    next();
}

function valid_name_middleware(req,res,next){
    let {name} = req.query;
    console.log(name)
    if(!name || !name.length){
        res.json({
            message:'缺少name关键字'
        })
    }else{
        next()
    }

}

function not_found_handler(req,res,next){
    res.json({
        message:'api不存在'
    })
}

app.get('/create',async (req,res)=>{
    try {
        let {name} = req.query;
        //promise user-->sequlize对象
        let user = await models.User.create({
            name
        })
        console.log(user);
        res.json({
            message:"创建成功"
        })
    } catch (error) {
        next(error)
    }
    
})

app.post('/list',async (req,res)=>{
    let {limit,pageNum,status} = req.body;
    let offset = (page-1)*limit;
    let list = await models.User.findAndCountAll({
        where:{
            status
        },
        offset,
        limit
    })
    res.json({
        list,
        message:'列表查询成功'
    })
})

app.post('/detail',async (req,res)=>{
    let {id} = req.body;
    let user = await models.User.findOne({
        where:{
            id
        }
    });
    res.json({
        user
    })
})

app.use('/member',memberRouter)
app.use('/sku',skuRouter)
app.use(log_middleware)
app.use(express.static('static',{
    extensions:['html','htm']
}))
// app.all('*',valid_name_middleware)
app.use(not_found_handler)
app.use(error_handler_middleware)
app.listen(3000,()=>{
    console.log('服务启动成功')
})