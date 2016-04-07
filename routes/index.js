var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.all('/news/findNews.json', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    var data = {
        "newsList": [
            {
                "id": 3,
                "title": "测试5",
                "sourceUrl": "news.html?id=3",
                "source": "测试5",
                "createTime": 1458089053000,
                "newsType": 1,
                "fdUserId": null
            },
            {
                "id": 2,
                "title": "测试4",
                "sourceUrl": "news.html?id=2",
                "source": "测试4",
                "createTime": 1458002630000,
                "newsType": 1,
                "fdUserId": null
            },
            {
                "id": 1,
                "title": "测试3",
                "sourceUrl": "news.html?id=1",
                "source": "测试3",
                "createTime": 1458002604000,
                "newsType": 1,
                "fdUserId": null
            }
        ]
    };
   
    res.json(data);
});

router.put('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.delete('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.patch('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.all('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
