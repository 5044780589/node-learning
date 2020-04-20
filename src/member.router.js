const express = require('express')

const router = express.Router();

function valid_login_middleware(req, res, next) {
    let {
        name,
        password
    } = req.query;
    console.log(name)
    if (!name || !password) {
        res.json({
            message: '登录信息校验失败'
        })
    } else {
        req.formdata = {
            name,
            password
        }
        next()
    }

}

router.use(function (req, res, next) {
    console.log('log from member router')
    next();
})

router.get('/list', [valid_login_middleware /** 中间件 */ ], (req, res) => {
    let {
        formdata
    } = req;
    res.json({
        formdata,
        message: 'list'
    })
})

module.exports = router