var number = 100;

function MyFunc() {

    //var number = 200;
    this.number = 200;
    console.log(number);   //1)local variable 200  2)100
    console.log(this.number); //1)undefied  2)200
}

//MyFunc();

var obj = new MyFunc();
console.log(obj.number);