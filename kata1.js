var repeatNumbers = function(data) {
  var repeated = "";

  if(data !== undefined && data.length > 0){
    for(var i = 0; i < data.length; i++){
      for(var n = 0; n < data[i][1]; n++){
        repeated += data[i][0];
      }
      if(i < data.length - 1){
        repeated += ", ";
      }
    }
  }else{
    repeated = undefined;
  }
  return repeated;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers());
