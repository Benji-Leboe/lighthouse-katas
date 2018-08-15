

function makeCase(input, caseInput){

    var output = "";
    function caseSwitcher(caseInput){
        switch(caseInput){
            case "camel":
                output += camelCase(input);
                break;
            case "pascal":
                output += pascalCase(input);
                break;
            case "snake":
                output += snakeCase(input);
                break;
            case "kebab":
                output += kebabCase(input);
                break;
            case "title":
                output += titleCase(input);
                break;
            case "vowel":
                output += vowelCase(input);
                break;
            case "consonant":
                output += consonantCase(input);
                break;
        }
    }
    if(caseInput[0] === "upper"){
        caseSwitcher(caseInput[1]);
        output = upperCase(output);
    }
    if(caseInput[0] === "lower"){
        caseSwitcher(caseInput[1]);
        output = lowerCase(output);
    }else{
        caseSwitcher(caseInput);
    }

    /*camel case*/
    function camelCase(input) {
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

    /*pascal case*/
    function pascalCase(input){
        var catString = "";
        for(i = 0; i < input.length; i++){
            if(i === 0){
                catString += input.charAt(0).toUpperCase();
            }
            if(input[i] === " "){
                catString += input.charAt(i + 1).toUpperCase();
            }else if(i !== 0 && input[i] !== " " && input[i - 1] !== " "){
                catString += input[i];
            }
        }
        return catString;
    };
    
    /*snake case*/
    function snakeCase(input) {
        var catString = "";
        for(i = 0; i < input.length; i++){
            if(input[i] === " "){
                catString += "_"
            }else if(input[i] !== " "){
                catString += input[i];
            }
        }
        return catString;
    };

    /*kebab*/
    function kebabCase(input) {
        var catString = "";
        for(i = 0; i < input.length; i++){
            if(input[i] === " "){
                catString += "-"
            }else if(input[i] !== " "){
                catString += input[i];
            }
        }
        return catString;
    };

    /*title case*/
    function titleCase(input) {
        var catString = "";
        for(i = 0; i < input.length; i++){
            if(i === 0 || input[i - 1] === " "){
                catString += input.charAt(i).toUpperCase();
            }else if(input[i - 1] !== " "){
                catString += input[i];
            }
        }
        return catString;
    };

    /*vowels*/
    function vowelCase(input){
        var catString = "";
        var vowels = ["a", "e", "i", "o", "u"];
        for(var i = 0; i < input.length; i++){
            for(var n = 0; n < vowels.length; n++){
                if(input[i] === vowels[n]){
                    catString += input.charAt(i).toUpperCase();
                    i += 1;
                }
            }
            catString += input[i];
            
        }
        return catString;
    }
    /*consonants*/
    function consonantCase(input){
        var catString = "";
    
        var vowels = ["a", "e", "i", "o", "u"];
        var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", 
                            "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    
        for(var i = 0; i < input.length; i++){
            for(var n = 0; n < consonants.length; n++){
                if(input[i] === consonants[n]){
                    catString += input.charAt(i).toUpperCase();
                }
            }
            for(var x = 0; x < vowels.length; x++){
                if(input[i] === vowels[x]){
                    catString += input[i];
                }
            }
            if(input[i] === " "){
                catString += input[i];
            }
            
            
        }
        return catString;
    }
    /*upper*/
    function upperCase(input){
        catString = "";
        catString += input.toUpperCase();
        return catString;
    }

    /*lower*/
    function lowerCase(input){
        catString = "";
        catString += input.toLowerCase();
        return catString;
    }

    return output;
};


console.log(makeCase("this is a string", "camel")) === "thisIsAString";
console.log(makeCase("this is a string", "pascal")) === "ThisIsAString";
console.log(makeCase("this is a string", "snake")) === "this_is_a_string";
console.log(makeCase("this is a string", "kebab")) === "this-is-a-string";
console.log(makeCase("this is a string", "title")) === "This Is A String";
console.log(makeCase("this is a string", "vowel")) === "thIs Is A strIng";
console.log(makeCase("this is a string", "consonant")) === "THiS iS a STRiNG";
console.log(makeCase("this is a string", ["upper", "snake"])) === "THIS_IS_A_STRING";
