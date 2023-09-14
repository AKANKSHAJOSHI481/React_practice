let obj1 = {
    name : 'akanksha',
    number : 1,
    location : {
        flat : 502,
        add : {
            city : 'hyd',
            pincode : 500067,
        }
    },
};
// let obj2 = {...obj1} --> shalow copy
let obj2 = {...obj1, location : {...obj1.location, add: {...obj1.location.add}}};     // deep copy

let obj3 = JSON.parse(JSON.stringify(obj1)); //short cut
obj2.name = 'akanksha Joshi';
obj2.location.flat = 109;
obj2.location.add.city = 'hyderabad';
console.log(obj1);
console.log(obj2);
obj3.name = 'nimmi';
obj3.location.add.pincode = 5000000;
console.log(obj3);