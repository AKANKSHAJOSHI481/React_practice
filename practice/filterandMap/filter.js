let arr = ['akanksha', 'joshi', 'watermelon', 'orange'];
let arr2 =[];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i].length > 6){
//         arr2.push(arr[i]);
//     }
// }

arr2 = arr.filter(function(fruit){
    return fruit.length>6;
})
console.log(arr);
console.log(arr2);