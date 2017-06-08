'use strict';
alert('Welcome to my "About Me" demo.');
var myName = 'Smitty';
console.log(myName);
var user = prompt('What is your name?');
console.log(user);
while (!user) {
  user = prompt('Really type your name in the box bish.');
}
alert('Hello ' + user + ', my name is ' + myName);

//if the user's name starts with an _
if (user[0].toLowerCase() === 's') {
  alert(user + ', you slay');
} else {
  alert(user + ', imma read you');
}
var totalPoints = 0;
//question 1
confirm('Ready to get to know Smitty better?');
var born = prompt('Where was Smitty born?');
console.log(born);
if (born.toLowerCase() == 'okanogan') {
  alert('Yas!');
  totalPoints++;
  console.log(totalPoints);
} else if (born.toLowerCase() == 'washington') {
  alert('That is the state, the town was Okanogan. Good try, ' + user);
  //no points added nor subtracted
} else {
  alert('Not quite, ' + user + ', Smitty was born in Okanogan, Washington.');
}
console.log(totalPoints);
//question2
var lives = prompt('Where does Smitty live now?');
console.log(lives);
if (lives.toLowerCase() == 'west seattle') {
  alert(user + ', Yas!');
  totalPoints++;
} else if (lives.toLowerCase() == 'seattle') {
  alert('Technically West Seattle ,' + user + '.');
  //no points added nor subtracted
} else {
  alert('Smitty lives in West Seattle.');
}
console.log(totalPoints);
//question3
var talk = prompt('Does Smitty like or dislike disclosing personal information?');
console.log(talk);
if (talk.toLowerCase() == 'dislike' || 'no' || 'nope' || 'n'){
  alert('This is correct, ' + user + ' Smitty enjoys privacy.');
  totalPoints++;
} else {
  alert('Actually, ' + user + ' Smitty enjoys privacy.');
}
console.log(totalPoints);
//question 4
var hobby = prompt('What does Smitty like to do hobby wise: surf, sail, hike?');
console.log(hobby);
var hobbyslice = hobby.slice(0,3);
if (hobbyslice.toLowerCase() == 'all'){
  alert('Yes, ' + user + ', Smitty likes all those activities and more.');
  totalPoints++;
} else {
  alert('Tbh, ' + user + ' Smitty enjoys all those activities');
}
console.log(totalPoints);
//question5
var learn = prompt('Although a lifelong computer geek/programmer, what was the impituous that finally got Smitty into learning code professionally?');
console.log(learn);
if (learn.toLowerCase() == 'public health' || 'epidemiology'){
  alert('Yes, ' + user + ' Public Health and Epidemiology Data Science with a specific interest in GIS interface.');
  totalPoints++;
//}
//else if (learn.toLowerCase() == 'epidemiology'){
//  alert('Yes, ' + user + ' Public Health and Epidemology Data Science with a specific interest in GIS interface.');
} else {
  alert('Smitty became interested in Public Health and Epidemiology Data Science with a specific interest in GIS interface.');
}
//needs no statement
console.log(totalPoints);

//sixth question guessing game. four opportunities to guess higher or lower
var age = prompt('How old is Smitty? You get four tries on this one.');
for (var a = 0; a < 4 && age !== 38; a++) {
  if (a !== 0) {
    age = prompt('Try again. How old is Smitty?');
  }
  if (age > 38) {
    alert('I am not quite that old.');
  } else if (age < 38) {
    alert('I know I look young but I have got some wisdom.');
  } else if (age == 38) {
    alert('That is correct, Smitty is 38 years young.');
    totalPoints++;
    break;
  }
  if (a === 3) {
    alert('Sorry your used up four tries. Smitty is 38.');
  }
  console.log(a);
  console.log(age);
}

console.log(totalPoints);
//seventh question. six tries. multiple answers. Display message with all possible answers.

//goals ffr learn to make multi lowercase
var multi = prompt('Guess at least one of Smitty\'s other favorite things, you have six tries:');
var hobbies = ['sailing', 'art', 'dogs', 'cooking', 'puppets', 'biking', 'gardening'];
var correct = false;
for (var m = 0; m < 6 && correct === false; m++) {
  if (m !== 0) {
    multi = prompt('Try again:');
  }
  for (var i in hobbies) {
    console.log(hobbies[i]);
    if (multi === hobbies[i]) {
      alert('Yes, you got one. Smitty likes sailing, dogs, art, puppets and cooking amoung other things.');
      correct = true;
      break;
    }
    totalPoints++;

    //console.log(m);
    //console.log(multi);
  }
  if (m === 5) {
    hobbies = hobbies.join(', ');
    alert('Sorry your used up six tries. Smitty likes ' + hobbies + ' and cooking amoung other things.');
  }
}

//return tally of correct answers
all = [born, live, talk, hobbies, live, age, multi];
alert('Congrats ' + user + '! You got ' + totalPoints + ' out of 7. Today you learned ' + all + '. Thanks for taking some time to learn more about me.');
