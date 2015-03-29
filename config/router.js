


var router = new geddy.RegExpRouter();

router.get('/').to('Main.index');

router.resource('products');
router.match('/sendMail', 'GET').to({controller : 'Products', action: 'sendMail'});
exports.router = router;
