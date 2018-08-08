var calculateChange = function(total, cash) {

    var denominations = {
        twenties: 2000,
        tens: 1000,
        fives: 500,
        toonies: 200,
        loonies: 100,
        quarters: 25,
        dimes: 10,
        nickels: 5,
        pennies: 1
    };
    var change = {
        twenties: 0,
        tens: 0,
        fives: 0,
        toonies: 0,
        loonies: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };

    var leftOver = cash - total;
    console.log("Total change: " + leftOver);

    var changeObj = {};

    var runningTotal = leftOver;
    for(var prop in denominations){
        for(var i = 0; runningTotal > denominations[prop] - 1; i++){
            runningTotal -= denominations[prop];
            change[prop] += 1;
        }
        if(change[prop] > 0){
            changeObj[prop] = change[prop];
        }
    }
    return changeObj;
}

    
  
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));