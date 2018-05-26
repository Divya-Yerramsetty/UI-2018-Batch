//Data types
var x = 9;
document.writeln(x);
console.log(x);

document.write("\n");

var message="Hello JS";
document.writeln(message);

//Post and pre increment

var a =[1,2,3,4];
for (var i=0; i<4; i++){
    console.log(a[i]);
}

//Objects (dot notation and property notation) 

var x = {
    firstName: "Div",
    lastName: "Ya",
    y: {
        age: 24,
        z: {
        degree: "bachelors"
        }
    }
};

console.log(x.firstName);
console.log(x.y.age);

x.firstName = "Divya";
x.y.age = 25;

console.log(x.firstName);
console.log(x.y.age);

x.y.z["degree"]= "Masters";

console.log(x.y.z.degree);

