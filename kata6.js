
var multiplicationTable = function(maxValue) {
    /* maxVal for adding border dashes */ 
    var maxVal = "";

    /* set max num length */
    maxVal += maxValue * maxValue;

    /* counter for number rows */
    var rowCountNum = 0;

    /* number row generator */
    function numberRow(multiple){
    
        var numberLine = "";

        rowCountNum += 1;

        var rowMax = multiple * rowCountNum;

        for(var i = rowCountNum; i <= rowMax; i += rowCountNum){
            numberLine += "| " + i;
            if(i.toString().length < maxVal.length){
                for(var n = 0; n < maxVal.length - i.toString().length + 1; n++){
                    numberLine += " ";
                }
            }else{
                numberLine += " ";
            } 
            if(i === multiple * rowCountNum){
                numberLine += "|";
            }
        }
        return numberLine;
    }

    /* border row generator */
    function borderRow(length){
        var borderLine = "";
        for(var i = 0; i < length; i++){
            borderLine += "+-";
            for(n = 0; n <= maxVal.length; n++){
                borderLine += "-";
            }
            if(i === length - 1){
                borderLine += "+";
            }
        }
        return borderLine;
    }

    /* final grid output */
    var grid = "";

    if(maxValue !== 0){
        for(var x = 0; x < maxValue; x++){
            grid += borderRow(maxValue) + "\n";
            grid += numberRow(maxValue) + "\n";
        }
        grid += borderRow(maxValue);
    }else{
        grid += "You cannot multiply by zero!"
    }

    return grid;
};

console.log(multiplicationTable(0));
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));