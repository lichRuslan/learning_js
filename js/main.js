// var id = setInterval('myFunct_1()', 1000);
var counter = 0;

function myFunct_1(params) {
    // counter++;
    document.write(counter++);
}

function timer() {
    counter++;
    document.getElementById('count').innerHTML= counter;
    setTimeout('timer()', 1000);
}