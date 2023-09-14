// console.log(this);

// function fn(){
//     console.log(this);
// }

// fn(); 

// let obj = {
//     name: 'Akanksha',
//     func: fn,
// }; 
// obj.func();  // self obj

function fn() {
    console.log(this);
    // function abc(){
    //     console.log(this);
    // }
    // let ret = abc.bind(this);
    // ret();
                                                        // bind function and arrow function
    abc=() =>{
        console.log(this);
    }
    abc();
}

let obj = {
    name: 'Akanksha',
    func : fn,
}

obj.func();