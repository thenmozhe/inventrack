var init = function(cb) {
  // Add uncaught-exception handler in prod-like environments
  if (geddy.config.environment != 'development') {
    process.addListener('uncaughtException', function (err) {
      var msg = err.message;
      if (err.stack) {
        msg += '\n' + err.stack;
      }
      if (!msg) {
        msg = JSON.stringify(err);
      }
      geddy.log.error(msg);
    });
  }
  cb();
    
      cartItems=[];
      report = [];
    
    /* Stub - To be pushed to DB for real-time */
    
    var productBrands1 = [{productId : '100001', productName : 'Sunsilk'},
                     {productId : '100002', productName : 'Dove'},
                     {productId : '100003', productName : 'Tresemme'},
                     {productId : '100004', productName : 'Garnier'},
                     {productId : '100005', productName : 'Pantene'}];
    
    productBrands = JSON.stringify(productBrands1);
    
        var billedItems1 = [
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/11/2015', quantity : 34},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/11/2015', quantity : 23},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/11/2015', quantity : 65},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/11/2015', quantity : 34},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/11/2014', quantity : 23},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/11/2014', quantity : 65},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/11/2014', quantity : 24},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/11/2014', quantity : 76},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/11/2014', quantity : 2},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/10/2014', quantity : 1},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/10/2014', quantity : 23},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/10/2014', quantity : 3},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/10/2014', quantity : 13},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/11/2014', quantity : 12},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/11/2014', quantity : 12},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/11/2014', quantity : 34},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/11/2014', quantity : 6},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/11/2014', quantity : 34},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/11/2014', quantity : 1},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/11/2014', quantity : 34},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/11014', quantity : 64},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/11/2014', quantity : 12},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/11/2014', quantity : 3},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/11/2014', quantity : 27},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/11/2014', quantity : 2},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/11/2014', quantity : 15},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/11/2014', quantity : 23},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/11/2014', quantity : 18},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/21/2014', quantity : 9},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/21/2014', quantity : 43},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/21/2014', quantity : 18},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '4/28/2014', quantity : 34},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/23/2014', quantity : 14},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/16/2014', quantity : 33},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/16/2014', quantity : 23},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/16/2014', quantity : 34},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/16/2014', quantity : 23},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/16/2014', quantity : 65},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2014', quantity : 24},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2014', quantity : 76},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2014', quantity : 2},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2014', quantity : 23},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2014', quantity : 32},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2014', quantity : 11},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2014', quantity : 18},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2014', quantity : 23},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2014', quantity : 23},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2014', quantity : 34},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2014', quantity : 17},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2014', quantity : 38},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2014', quantity : 18},
            
            {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/16/2015', quantity : 23},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/16/2015', quantity : 65},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2015', quantity : 24},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2015', quantity : 76},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2015', quantity : 2},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2015', quantity : 23},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2015', quantity : 32},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2015', quantity : 11},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2015', quantity : 18},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2015', quantity : 23},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2015', quantity : 23},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2015', quantity : 34},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2015', quantity : 17},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2015', quantity : 38},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2015', quantity : 18},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2015', quantity : 2},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2015', quantity : 23},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '1/29/2015', quantity : 32},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2015', quantity : 11},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2015', quantity : 18},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2015', quantity : 23},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '2/14/2015', quantity : 23},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2015', quantity : 34},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2015', quantity : 17},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2015', quantity : 38},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '3/30/2015', quantity : 18}
    ];
    
    
billedItems = JSON.stringify(billedItems1);
};


exports.init = init;