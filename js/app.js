
'use strict';
alert('Welcome to my "About Me" demo.');
var myName = 'Smitty';
console.log(myName);
var user = prompt('What is your name?');
console.log(user);
alert('Hello ' + user + ', my name is' + myName);

//if the user's name starts with an _
if (user[0].toLowerCase() === 's') {
  alert(user + ', you slay');
} else {
  alert(user + ', imma read you');
}
//question 1
confirm('Ready to get to know Smitty better?');
var born = prompt('Where was Smitty born?');
console.log(born);
if (born.toLowerCase() == 'okanogan'){
  alert('Yas!' + user);
} else if (born.toLowerCase() == 'washington') {
  alert('That is the state, the town was Okanogan. Good try, ' + user);
} else {
  alert('Not quite, ' + user + ', Smitty was born in Okanogan, Washington.');
}
//question2
var lives = prompt('Where does Smitty live now?');
console.log(lives);
if (lives.toLowerCase() == 'west seattle'){
  alert(user + ', Yas!');
} else if (lives.toLowerCase() == 'seattle') {
  alert('Technically West Seattle ,' + user + '.');
}
//question3
var talk = prompt('Does Smitty like or dislike disclosing personal information?');
console.log(talk);
if (talk.toLowerCase() == 'dislike'){
  alert('This is correct, ' + user + ' Smitty enjoys privacy.');
} else {
  alert('Actually, ' + user + ' Smitty enjoys privacy.');
}
//question 4
var hobby = prompt('What does Smitty like to do hobby wise: surf, sail, hike?');
console.log(hobby);
var hobbyslice = hobby.slice(0,3);
if (hobbyslice.toLowerCase() == 'all'){
  alert('Yes, ' + user + ', Smitty likes all those activities and more.');
} else {
  alert('Tbh, ' + user + ' Smitty enjoys all those activities');
}
//question5
var learn = prompt('Although a lifelong computer geek/programmer, what was the impituous that finally got Smitty into learning code professionally?');
console.log(learn);
if (learn.toLowerCase() == 'public health'){
  alert('Yes, ' + user + ' Public Health and Epidemology Data Science with a specific interest in GIS interface.');
}
else if (learn.toLowerCase() == 'epidemology'){
  alert('Yes, ' + user + ' Public Health and Epidemology Data Science with a specific interest in GIS interface.');
} else {
  alert('Smitty became interested in Public Health and Epidemology Data Science with a specific interest in GIS interface.');
}
alert('Thanks for taking some time to learn more about me.');

//(user[0].toLowerCase() === 's')
// if (answer == 'yes' || answer == 'y') { } else { }
// userPoints++ or =+;

//git add --all
//git commit -m ""
//git push origin master

//daily learning journal in markdown
