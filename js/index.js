;(function (){
    
    let nums = [1, 2, 3, 5, 10];
    let fives = [];
    //箭头函数
    nums.forEach( v => {
        if (v % 5 ===0)
        fives.push(v);
        console.log("this指向:" , this);
    });
    console.log("this指向:" , this);
    console.log(fives);

    //let 和 const 只在最近的一个{}中有效
    var name = "加菲猫";
    {
        let name = "哈士奇";
        console.log(name);

    }
    console.log(name);
    
    //Classes
    class Animal {
        constructor () {
            console.log('我是一个动物');
        }
    }

    class Person extends Animal {
        constructor (){
            super();
            console.log('我是一个程序猿');
        }
    }

    let aa = new Person();


})();