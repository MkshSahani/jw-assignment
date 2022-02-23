// if multiple of 3 print Hello, if multiple of 5 print World, if multiple of both 3 and 5 print Hello, World 

for(var i = 1; i < 100; i++) {
    var flag = false; 
    var output_string = ""; 

    if(i % 3 == 0) {
        output_string += "Hello "; 
        flag = true; 
    } 
    
    if(i % 5 == 0) {
        output_string += "World"; 
        flag = true; 
    }

    if(flag) {
        console.log(output_string); 
    } else {
        console.log(i); 
    }
}  