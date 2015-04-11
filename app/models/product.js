var Product = function () {

  this.defineProperties({
    name: {type: 'string', required: true},
    quantity: {type: 'number', required : true},
    expiryDate: {type: 'date',required: true},
    isOrderPlaced: {type: 'boolean'},
    productId : {type : 'number'} ,
    lastBilledOn : {type: 'string'} ,
    lastBilledCount : {type : 'number'},
    category : {type : 'string'}
  });
  
  this.validatesWithFunction('quantity', function (quantity) {
    return quantity >= 0;
  }, {message: "Quantity must be greater than 0"});  

  this.validatesWithFunction('expiryDate', function (expiryDate) {
    return expiryDate >= new Date();
  }, {message: "Expiry Date must be in future"});

 };

Product = geddy.model.register('Product', Product);

