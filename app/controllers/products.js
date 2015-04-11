
var Products = function () {

  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

    this.getFastMovingItem = function(products){
        var today = new Date();
        var todaysDate = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
        var fastMovingItem = null;
        var pLen = products.length;
        for(var i=0; i<pLen; i++){
          if(products[i].lastBilledOn == todaysDate){
            fastMovingItem = products[i];
            if(fastMovingItem.lastBilledCount <= products[i].lastBilledCount){
              fastMovingItem = products[i];
            }
          }
        }
        return fastMovingItem;
    };

    this.getSlowMovingItem = function(products){
        var today = new Date();
        var todaysDate = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
        var pLen = products.length;
        if(pLen > 1){
          var slowMovingItem = null;
          for(var i=0; i<pLen; i++){
            if(products[i].lastBilledOn == todaysDate){
              slowMovingItem = products[i];
              if(slowMovingItem.lastBilledCount >= products[i].lastBilledCount){
                console.log(products[i].productId);
                slowMovingItem = products[i];
              }
            }
          }
        }
        return slowMovingItem;
    }

    this.genReport = function(req, res, params){
      var self = this;
      geddy.model.Product.all(function(err, products) {
        if (err) {
          throw err;
        }
        report.fastMovingItem = self.getFastMovingItem(products);
        report.slowMovingItem = self.getSlowMovingItem(products);
      });
      self.respond(report);
    };
    
    this.sendMail = function(req, resp,pms){
      var self = this;
      console.log("Initiating mail...");
      console.log('Message sent...');

      geddy.model.Product.first(pms.id, function(err, product) {
        if (err) {
          throw err;
        }
        
      pms.isOrderPlaced = true;
        product.updateProperties(pms);

        if (!product.isValid()) {
          self.respondWith(product);
        }
        else {
          product.save(function(err, data) {
            if (err) {
              throw err;
            }
            self.respondWith(product);
          });
        }
      });
    };
    
    this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Product.all(function(err, products) {
      if (err) {
        throw err;
      }
      self.respondWith(products, {type:'Product'});
    });
  };

  this.add = function (req, resp, params) { 
    var self = this;
      self.respond({params: params});
   
  };

    this.billProduct = function(req, resp, params){
       var self = this;
       self.respond({params: params});
    };

    this.updateLastBill = function(lastBilledOn,lastBilledCount,billedCount){
      var today = new Date();
      var todaysDate = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
      if(lastBilledOn == null){
        return {'lastBilledDate':todaysDate,'lastBilledCount':billedCount};
      }
      else{
        console.log(lastBilledOn == todaysDate);
        console.log(todaysDate);
        if(lastBilledOn == todaysDate){
          console.log("days match");
          return {'lastBilledDate':todaysDate,'lastBilledCount': (lastBilledCount+billedCount)};
        }
        else{
          console.log("no ,atch");
          return {'lastBilledDate':todaysDate,'lastBilledCount':billedCount};
        }
      }
    }

    this.finish = function(req, resp, params){
     
       var self = this;
        
        var prs = [];

        var len = cartItems.length;

          geddy.model.Product.all(function(err, products) {
            if (err) {
              throw err;
            }
            for(var i=0; i < len; i++){
              for(var j=0;j<products.length;j++){
                console.log(cartItems)
                if(cartItems[i].id == products[j].id){
                  
                  params.quantity = cartItems[i].quantity;

                  var lastBillDetails = self.updateLastBill(products[j].lastBilledOn,products[j].lastBilledCount,(products[j].quantity-cartItems[i].quantity));

                  params.lastBilledOn =  lastBillDetails.lastBilledDate;
                  params.lastBilledCount = lastBillDetails.lastBilledCount;

                  prs[prs.length] = products[j];

                  products[j].updateProperties(params);

                  if (!products[j].isValid()) {
                    self.respondWith(products[j]);
                  }
                  else {
                    products[j].save(function(err, data) {
                      if (err) {
                        throw err;
                      }
                      
                    });
                  }
                  break;
                }
              }
            }
            cartItems = [];
            self.respondWith(prs,{type:'Product'});
          });
    };
    
    this.addCart = function(req, resp, params){
        var self = this;
        var addedProduct = null;
        geddy.model.Product.all(function(err, products) {
          if (err) {
            throw err;
          }
          for(var i=0;i<products.length;i++){
            if(products[i].productId == params.id){
              addedProduct = products[i];
              break;
            }
          }
          addedProduct.billQuantity = params.quantity;
          addedProduct.quantity = addedProduct.quantity - params.quantity;
          
          cartItems[cartItems.length]=addedProduct;          
          self.respondWith(cartItems,{type:'Product'});
        });
        
    };
    
    this.deduct = function(req, resp, params){
       var self = this;
        console.log("Billing product");
        geddy.model.Product.all(function(err, products) {
          if (err) {
            throw err;
          }
          self.respondWith(products, {type:'Product'});
        });

    };
    
  this.create = function (req, resp, params) {
    var self = this;
    var product = geddy.model.Product.create({
        name : params.name,
        quantity : params.quantity,
        expiryDate : params.expiryDate
      });

    if (!product.isValid()) {
      this.respondWith(product);
    }
    else {
      geddy.model.Product.all(function(err, products) {
     params.productId = 100000 +(products.length+1);
     product.productId = params.productId;
      console.log("Create product id::::::::"+params.productId);
     
      product.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(product, {status: err});
      });

    });

      
    }
    
    
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Product.first(params.id, function(err, product) {
      if (err) {
        throw err;
      }
      if (!product) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(product);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Product.first(params.id, function(err, product) {
      if (err) {
        throw err;
      }
      if (!product) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(product);
      }
    });
  };

  this.update = function (req, resp, params) {
    console.log("update");
    var self = this;
      
    geddy.model.Product.first(params.id, function(err, product) {
      if (err) {
        throw err;
      }
      product.updateProperties(params);

      if (!product.isValid()) {
        self.respondWith(product);
      }
      else {
        product.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(product, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Product.first(params.id, function(err, product) {
      if (err) {
        throw err;
      }
      if (!product) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Product.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(product);
        });
      }
    });
  };
    
};

exports.Products = Products;
