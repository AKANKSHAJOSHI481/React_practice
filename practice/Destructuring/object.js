let obj = {
    name: 'Akanksha',
    state: 'Telangana',
    country : 'India'
};

// let name = obj.name;
// let state = obj["state"];
// let {name, state, country} = obj;
// let {name, state, country, extra = "deafult"} = obj;
let {name:firstname, state, country, extra = "deafult"} = obj;
console.log(firstname, state, country, extra);