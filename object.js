/*var person ={
    nama:'fayyat',
    age:17,
    warnaFav:'Navy',
    tinggi:173,
    berat:61,
}
console.log(person);*/


/*var course ={name: "sampoernamild", chapter:1}
onsole.log(course.name.length)*/

//lesson 26
//imstance of object (new)
/*
function person(name, age, color){
    this.name = name;
    this.age = age;
    this.favColor = color;
}
var p1 = new person("John", 37, "red")
var p2 = new person("Jordi", 27, "pink")

console.log(p1.name);
console.log(p2.name);
*/

/*function makan(status, food){
    this.status = status
    this.food = food
    this.changestatus = function(status){
        this.staus = status
    }
}

var p1 = new makan('berdoa', 'mie');
p1.changestatus('sedang')
console.log(p1.status+" makan "+p1.food);
*/

function bilangan(x, y) {
    this.x = x,
    this.y = y,
     this.jumlah = function jumlah (x,){
        c=x+y;
        return c;
     }
    
}
let b =new bilangan(3,1)
var a =b.jumlah(b.x,b.y)
console.log(a);


