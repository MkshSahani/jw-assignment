console.log("js load success"); 

var hourElement = document.getElementById("hour"); 
var minuteElement = document.getElementById("minute"); 
var secondElement = document.getElementById("second"); 

var dateData = new Date(); 
var hour = dateData.getHours(); 
var minute = dateData.getMinutes(); 
var second = dateData.getSeconds(); 

console.log(dateData.getHours()); 
console.log(dateData.getMinutes()); 
console.log(dateData.getSeconds());

hourElement.innerHTML = hour 
minuteElement.innerHTML = minute 
secondElement.innerHTML = second 


setInterval(
    () => {
        second += 1; 
        if(second % 60 == 0) {
            minute += 1; 
            if(minute % 60 == 0) {
                hour += 1; 
            }
        } 

        second = second % 60; 
        minute = minute % 60; 
        hour = hour % 24; 

        hourElement.innerHTML = hour 
        minuteElement.innerHTML = minute 
        secondElement.innerHTML = second 

    }, 1000 
)