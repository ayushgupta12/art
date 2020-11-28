const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

document.querySelector('#lebron').onclick = function(){
    var image = document.getElementById("image");
    image.src = "lebron.jpg";
    document.querySelector("#description").innerHTML = "Lebron James";
  }
document.querySelector('#kobe2').onclick = function(){
    var image = document.getElementById("image");
    image.src = "kobe2.jpg";
    document.querySelector("#description").innerHTML = "Kobe Bryant";
  }
document.querySelector('#steph').onclick = function(){
    var image = document.getElementById("image");
    image.src = "steph.jpg";
    document.querySelector("#description").innerHTML = "Steph Curry";
  }
document.querySelector('#ariana2').onclick = function(){
    var image = document.getElementById("image");
    image.src = "ariana2.jpg";
    document.querySelector("#description").innerHTML = "Ariana Grande";
  }
document.querySelector('#virgil').onclick = function(){
    var image = document.getElementById("image");
    image.src = "virgil.jpg";
    document.querySelector("#description").innerHTML = "Virgil Abloh";
  }
document.querySelector('#GIAW').onclick = function(){
    var image = document.getElementById("image");
    image.src = "GIAW.jpg";
    document.querySelector("#description").innerHTML = "Ariana Grande";
  }
document.querySelector('#dababy').onclick = function(){
    var image = document.getElementById("image");
    image.src = "dababy.jpg";
    document.querySelector("#description").innerHTML = "DaBaby";
  }
document.querySelector('#jordan').onclick = function(){
    var image = document.getElementById("image");
    image.src = "jordan.jpg";
    document.querySelector("#description").innerHTML = "Michael Jordan";
  }
document.querySelector('#maleeyes').onclick = function(){
    var image = document.getElementById("image");
    image.src = "maleeyes.jpg";
    document.querySelector("#description").innerHTML = "Male Eyes";
  }
document.querySelector('#harden').onclick = function(){
    var image = document.getElementById("image");
    image.src = "harden.jpg";
    document.querySelector("#description").innerHTML = "James Harden";
  }
document.querySelector('#ari').onclick = function(){
    var image = document.getElementById("image");
    image.src = "ari.jpg";
    document.querySelector("#description").innerHTML = "Ariana Grande";
  }
document.querySelector('#durant').onclick = function(){
    var image = document.getElementById("image");
    image.src = "durant.jpg";
    document.querySelector("#description").innerHTML = "Kevin Durant";
  }