
var Products = function () {

  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];
    
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
        geddy.model.Product.all(function(err, products) {
          if (err) {
            throw err;
          }
          self.respondWith(products, {type:'Product'});
        });

    };

    this.finish = function(req, resp, params){
     
       var self = this;
        
        var prs = [];

        var len = cartItems.length;

        console.log("SDfsdf ******************"+cartItems)
        console.log(cartItems);

        
          geddy.model.Product.all(function(err, products) {
            if (err) {
              throw err;
            }
            for(var i=0; i < len; i++){
              for(var j=0;j<products.length;j++){
                if(cartItems[i].id == products[j].id){
                  console.log("product $$$$$$$$$$$"+products[j]);
                  
                  params.quantity = cartItems[i].quantity;

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
                      cartItems = [];
                      self.respondWith(prs,{type:'Product'});
                    });
                  }
                  break;
                }
              }
            }
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
          console.log("length &&&&&&&&&&& "+cartItems.length);
          cartItems[cartItems.length]=addedProduct;
          console.log("geddy cart items::::::" + cartItems);
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
