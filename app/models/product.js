var Product = function () {

  this.defineProperties({
    name: {type: 'string', required: true},
    quantity: {type: 'number'},
    expiryDate: {type: 'date',required: true},
    isOrderPlaced: {type: 'boolean'},
    productId : {type : 'number'}     
  });
    
    this.validatesWithFunction('expiryDate', function(value, params){
        console.log(value);
        var e = new Date(value.toString());
        console.log(e);
        return true;
    });
    
    this.isExhausting = function(){
        return this.quantity < 10 ? true: false;
    };
    
    this.isNearingExpiry = function(){
        var currentDate = new Date();
        if(this.expiryDate > currentDate){
            if(Math.abs(this.expiryDate.getTime() - currentDate.getTime())/(1000*3600*24) <= 5)
                return true;
        }
        return false;
    };
    
    this.hasExpired = function(){
        var currentDate = new Date();
        if(this.expiryDate < currentDate){
            return true;
        }
        return false;
    };
  };

Product = geddy.model.register('Product', Product);

Product.on('beforeSave',function(data){
    var self = this;
   geddy.model.Product.all(function(err, products) {
     data.productId = 100000 +(products.length+1);
     self.respondWith(products);
    });
});

