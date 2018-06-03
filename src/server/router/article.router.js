const model = require('../model/index.model')

const articleRouter = (Router) => {

    Router.post('/article', (req, res) => {
        const Record = model.getModel('record')
        const { pageNo = 0, pageSize = 10 } = req.body
        Record.find({}, { content: 0 }, (err, doc) => {
            if (err) {
                res.json({ code: '500', message: '服务器内部错误，请稍后重试' })
            }
            else {
                res.json({ code: '000', data: doc })
            }
        })
            .limit(10)
            .skip(pageNo * pageSize)
    })
}

module.exports = {
    articleRouter
}