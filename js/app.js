'use strict';
alert('Welcome to my "About Me" demo.')
var myName = 'Smitty';
  console.log(myName);
var user = prompt("What is your name?");
  console.log(user);
  alert("Hello " + user + ", my name is" + myName);

//if the user's name starts with an _
if (user[0].toLowerCase() === 's') {
  alert(user + ", you slay")
} else {
  alert(user + ", imma read you")
}
