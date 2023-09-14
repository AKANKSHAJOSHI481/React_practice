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

let {name} = obj1;
console.log(name);

let {location:{flat}} = obj1;
console.log(flat);

let {location:{add:{city:cname}}} = obj1;
console.log(cname);