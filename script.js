/*jshint esversion: 6 */

// Detect mouse press on all notes
const numberOfKeyNotes = document.querySelectorAll('.notes').length;
for (let i = 0; i < numberOfKeyNotes; i++) {
  document.querySelectorAll('.notes')[i].addEventListener('mousedown', clickFunc);
}

// Detect Keyboard press
document.addEventListener('keydown', keydownFunc);



// Function activation. Clicking on any note, the innerHTML of that particular note gets passed to the a variable 'note', which gets passed as argument to two functions: the function that makes the sound and the function that triggers the note animation;
function clickFunc() {
  const note = this.innerHTML;
  makeSound(note);
  keyAnimation(note);
}

// Functions activation
function keydownFunc(event) {
  makeSound(event.key);
  keyAnimation(event.key);
}




// Animation
function keyAnimation(currentKey) {
  const activeKey = document.querySelector('.' + currentKey);
  activeKey.classList.add('pressed');

  setTimeout(function() {
    activeKey.classList.remove('pressed');
  }, 100);
}



// Switch statement with each keyboard letter assigned to a sound
function makeSound(key) {
  switch (key) {
    case 'q':
      const c4 = new Audio('sounds/1.c4.ogg');
      c4.play();
      break;

    case 'w':
      const c_4 = new Audio('sounds/2.c_4.ogg');
      c_4.play();
      break;

    case 'e':
      const d4 = new Audio('sounds/3.d4.ogg');
      d4.play();
      break;

    case 'r':
      const d_4 = new Audio('sounds/4.d_4.ogg');
      d_4.play();
      break;

    case 't':
      const e4 = new Audio('sounds/5.e4.ogg');
      e4.play();
      break;

    case 'y':
      const f4 = new Audio('sounds/6.f4.ogg');
      f4.play();
      break;

    case 'u':
      const f_4 = new Audio('sounds/7.f_4.ogg');
      f_4.play();
      break;

    case 'i':
      const g4 = new Audio('sounds/8.g4.ogg');
      g4.play();
      break;

    case 'o':
      const g_4 = new Audio('sounds/9.g_4.ogg');
      g_4.play();
      break;

    case 'p':
      const a4 = new Audio('sounds/10.a4.ogg');
      a4.play();
      break;

    case 'a':
      const a_4 = new Audio('sounds/11.a_4.ogg');
      a_4.play();
      break;

    case 's':
      const b4 = new Audio('sounds/12.b4.ogg');
      b4.play();
      break;

    case 'd':
      const c5 = new Audio('sounds/13.c5.ogg');
      c5.play();
      break;

    case 'f':
      const c_5 = new Audio('sounds/14.c_5.ogg');
      c_5.play();
      break;

    case 'g':
      const d5 = new Audio('sounds/15.d5.ogg');
      d5.play();
      break;

    case 'h':
      const d_5 = new Audio('sounds/16.d_5.ogg');
      d_5.play();
      break;

    case 'j':
      const e5 = new Audio('sounds/17.e5.ogg');
      e5.play();
      break;

    case 'k':
      const f5 = new Audio('sounds/18.f5.ogg');
      f5.play();
      break;

    case 'l':
      const f_5 = new Audio('sounds/19.f_5.ogg');
      f_5.play();
      break;

    case 'z':
      const g5 = new Audio('sounds/20.g5.ogg');
      g5.play();
      break;

    case 'x':
      const g_5 = new Audio('sounds/21.g_5.ogg');
      g_5.play();
      break;

    case 'c':
      const a5 = new Audio('sounds/22.a5.ogg');
      a5.play();
      break;

    case 'v':
      const a_5 = new Audio('sounds/23.a_5.ogg');
      a_5.play();
      break;

    case 'b':
      const b5 = new Audio('sounds/24.b5.ogg');
      b5.play();
      break;

      // Default left empty on purpose so the user is free to use keyboard shortcuts without interfering with the switch statement (example: fn + random key)
      // default:

  }
}