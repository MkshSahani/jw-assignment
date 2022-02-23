//  sort them base on age
var object_list_1 = [
    {
        name : 'xyz', 
        age : 10
    }, 
    {
        name : 'pyz', 
        age : 4
    }, 
    {
        name : 'xz', 
        age : 45
    }, 
    {
        name : 'dyz', 
        age : 56
    }
]

var object_list_2 = [

    {
        name : 'fccde', 
        age : 32 
    }, 
    {
        name : 'tire', 
        age : 1 
    }, 
    {   
        name : 'fddf', 
        age : 3 
    }, 
    {
        name : 'xshs', 
        age : 15     
    }

]
// merge list, 
object_list_1.forEach((array) => {
    object_list_2.push(array); 
})
console.log(object_list_2); 
sortAscending(object_list_2); 
console.log("-----------------------------------------"); 
console.log(object_list_2);


function compareCondition(object_1, object_2) {
    if(object_1.age >= object_2.age) {
        return true; 
    } else {
        return false; 
    }
}

function sortAscending(object_list) {

    for(let i = 0; i < object_list.length; i++) {
        let min_index  = getMinAgeIndex(object_list_2, i); 
        let temp = object_list_2[i]; 
        object_list_2[i] = object_list_2[min_index]; 
        object_list_2[min_index] = temp; 
    }
}

// get index of targed list with min age.   
function getMinAgeIndex(object_list, start_index) {
    let min_index = start_index; 
    for(let index = start_index + 1; index < object_list.length; index++) {
        if(compareCondition(object_list[min_index], object_list[index])) {
            min_index = index; 
        }
    }
    return min_index; 
}

// get index of targeted list with max age. 
function getMaxAgeIndex(object_list, start_index) {
    let max_index = start_index; 
    for(let index = start_index + 1; i < object_list.length; i++) {
        if(!(compareCondition(object_list[min_index], object_list[index]))) {
            max_index = index; 
        }
    }
    return max_index; 
}


