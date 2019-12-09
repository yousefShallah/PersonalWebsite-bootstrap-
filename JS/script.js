// var name = " yousef";
// window.alert('hi')

// document.getElementById('header').innerHTML = `<div> ${name} </div>`

function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("header").innerHTML = txt;
}

console.log("test");

