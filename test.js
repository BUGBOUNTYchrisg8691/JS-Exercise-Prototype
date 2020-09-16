const sayNameFunc = obj => {
    obj.sayName = function() {
        console.log(`hi, i am ${this.name}`);
        console.log(this);
    }
}

const me = { name: 'chris' };
const you = { name: 'douche' };

sayNameFunc(me);
sayNameFunc(you);

me.sayName();
you.sayName();