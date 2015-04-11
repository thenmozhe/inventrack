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
    billedItems = [
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/4/2014', quantity : 34},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/4/2014', quantity : 23},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/4/2014', quantity : 65},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/4/2014', quantity : 24},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/4/2014', quantity : 76},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/4/2014', quantity : 2},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '10/4/2014', quantity : 1},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '10/4/2014', quantity : 23},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '10/4/2014', quantity : 3},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '10/4/2014', quantity : 13},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/3/2014', quantity : 12},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/3/2014', quantity : 12},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/3/2014', quantity : 34},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/3/2014', quantity : 6},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/3/2014', quantity : 34},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/2/2014', quantity : 1},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/2/2014', quantity : 34},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/2014', quantity : 64},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/2/2014', quantity : 12},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/2/2014', quantity : 3},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/1/2014', quantity : 27},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/1/2014', quantity : 2},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/1/2014', quantity : 15},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/1/2014', quantity : 23},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '11/1/2014', quantity : 18},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '21/3/2014', quantity : 9},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '21/1/2014', quantity : 43},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '21/1/2014', quantity : 18},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '28/4/2014', quantity : 34},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '23/3/2014', quantity : 14},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '16/2/2014', quantity : 33},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '16/2/2014', quantity : 23},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '16/2/2014', quantity : 34},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '16/2/2014', quantity : 23},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '16/2/2014', quantity : 65},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '29/1/2014', quantity : 24},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '29/1/2014', quantity : 76},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '29/1/2014', quantity : 2},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '29/1/2014', quantity : 23},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '29/1/2014', quantity : 32},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '14/2/2014', quantity : 11},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '14/2/2014', quantity : 18},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '14/2/2014', quantity : 23},
        {productId : '100004', productName : 'Garnier', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '14/2/2014', quantity : 23},
        {productId : '100001', productName : 'Sunsilk', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '30/3/2014', quantity : 34},
        {productId : '100005', productName : 'Pantene', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '30/3/2014', quantity : 17},
        {productId : '100003', productName : 'Tresemme', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '30/3/2014', quantity : 38},
        {productId : '100002', productName : 'Dove', categoryId : 'C0001', categoryName : 'Shampoo', dateSold : '30/3/2014', quantity : 18}
    ];
};

exports.init = init;