var router = new geddy.RegExpRouter();

router.get('/').to('Main.index');

router.resource('products');
router.match('/sendMail', 'GET').to({controller : 'Products', action: 'sendMail'});
router.match('/bill', 'GET').to({controller : 'Products', action: 'billProduct'});

exports.router = router;
