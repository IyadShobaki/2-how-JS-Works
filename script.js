// Hoisting in practice
// when start the browser window will point to the functions and you can use them
// before or after the declaration. But variables (also expression function) will be undefined until the real execution,
// so you cannot use them before the declaration


//functions
calculateAge(1965)

function calculateAge(year){
    console.log(2020 - year)
}

//retirment(1956) // will not work before the declaration

var retirment = function(year){
    console.log(65 - (2020 - year))
}
retirment(1990)


// Variables
console.log(age)  // undefined
var age = 23
console.log(age)

function foo(){
    console.log(age) // undefined
    var age = 65;
    console.log(age)
}
foo()
console.log(age)



var age1 = 22
var age2 = 44
boo()
function boo(){
    console.log(age1) // 22
    console.log(age2)  // undefined  // if the varibale declared inside the function will cancel the global variable
    var age2 = 55
    console.log(age2) // 55
}


// First scoping example
var a = 'Hello!'
first()

function first(){
    var b = 'Hi!'
    second()

    function second(){
        var c = 'Hey!'
        console.log(a + b + c)
        //var a = 'Hellllllloooo'    // this will make a in the previous line (undefined)
        third()
    }
}

function third(){
    var d = 'John'
    //console.log(c) // undefined error
    console.log(a + d) // Hello!John
}

// The this keyword

//console.log(this)  //this here is the window (main function)
calcAge(1985)
function calcAge(year){
    console.log(2020 - year)
    console.log(this) //this here is the window (main function) because its called inside regular funstion not a method
}


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this) // this is john object because its called inside a method for an object
        console.log(2020 - this.yearOfBirth)

        /*
        function innerFunction(){
            console.log(this)//this here is the window because innerFunction is a regualr function and not a method
        }
        innerFunction()
        */
    }
}
john.calculateAge()

var mike ={
    name: 'Mike',
    yearOfBirth: 1984
}

// borrow a method from another object
mike.calculateAge = john.calculateAge
mike.calculateAge()

