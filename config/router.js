var router = new geddy.RegExpRouter();

router.get('/').to('Main.index');

router.resource('products');
router.match('/sendMail', 'GET').to({controller : 'Products', action: 'sendMail'});
router.match('/bill', 'GET').to({controller : 'Products', action: 'billProduct'});
router.match('/addCart', 'GET').to({controller : 'Products', action: 'addCart'});
router.match('/finish', 'GET').to({controller : 'Products', action: 'finish'});
router.match('/genReport', 'GET').to({controller : 'Products', action: 'genReport'})

exports.router = router;
