var camelCase = function(input) {
    var catString = "";
    for(i = 0; i < input.length; i++){
        if(input[i] === " "){
            catString += input.charAt(i + 1).toUpperCase();
        }else if(input[i] !== " " && input[i - 1] !== " "){
            catString += input[i];
        }
    }
    return catString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
