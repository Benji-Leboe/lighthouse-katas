var talkingCalendar = function(date) {

    var firstSlash = date.indexOf("/");
    var lastSlash = date.lastIndexOf("/");    
    var year = date.slice(0, firstSlash);
    var month = date.slice(firstSlash + 1, lastSlash);
    var day = date.slice(lastSlash + 1);

    var monthName = (function(month){
        switch(month){
            case "01": 
                return "January";
            case "02": 
                return "February";
            case "03": 
                return "March";
            case "04": 
                return "April";
            case "05": 
                return "May";
            case "06": 
                return "June";
            case "07": 
                return "July";
            case "08": 
                return "August";
            case "09": 
                return "September";
            case "10": 
                return "October";
            case "11": 
                return "November";
            case "12": 
                return "December";
            default: console.log("Please enter a valid month");
        };
    })(month);
    var dayNew = "";

    if(day === "01"){
        dayNew = day.substr(1) + "st";
    }else if(day.substr(1) === "1" && day !== "11"){
        dayNew = day + "st";
    }else if(day === "02"){
        dayNew = day.substr(1) + "nd";
    }else if(day.substr(1) === "2" && day !== "12"){
        dayNew = day + "nd";
    }else if(day === "03"){
        dayNew = day.substr(1) + "rd";
    }else if(day.substr(1) === "3" && day !== "13"){
        dayNew = day + "rd";
    }else if(day.substr(0) === "0"){
        dayNew = day.substr(1) + "th";
    }else{
        dayNew = day + "th";
    }

    return monthName + " " + dayNew + " " + year;
    
};
  
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/23"));
console.log(talkingCalendar("1987/08/22"));
console.log(talkingCalendar("2018/03/31"));
console.log(talkingCalendar("1991/02/28"));


