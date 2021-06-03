// Play sound on click
const onClick = e => {
  // Create a note variable and pass it the clicked innerHtml value
  const note = e.target.innerHTML;
  // Pass the note variable as an argument to the playSound function
  playSound(note);
  // Pass the note variable as an argument to the keyAnimation function
  keyAnimation(note);
}

// Play sound on keypress
const onKeyPress = e => {
  // Prevent keydown to keep firing the sound while pressed down
  if (e.repeat) { return }
  // Pass the pressed key as an argument to the playSound function
  playSound(e.key);
  // Pass the pressed key as an argument to the keyAnimation function
  keyAnimation(e.key);
}

// Main function that plays the sounds
const playSound = key => {
  // Switch statement with each keyboard letter assigned to a note sound; pass in the clicked/pressed key and play the paired sound
  switch (key) {
    case 'q':
    case 'Q':
      let a0 = new Audio('sounds/1.a0.mp3');
      a0.play();
      break;

    case 'w':
    case 'W':
      const c_1 = new Audio('sounds/2.c_1.mp3');
      c_1.play();
      break;

    case 'e':
    case 'E':
      const e_1 = new Audio('sounds/3.e_1.mp3');
      e_1.play();
      break;

    case 'r':
    case 'R':
      const a1 = new Audio('sounds/4.a1.mp3');
      a1.play();
      break;

    case 't':
    case 'T':
      const c_2 = new Audio('sounds/5.c_2.mp3');
      c_2.play();
      break;

    case 'y':
    case 'Y':
      const e_2 = new Audio('sounds/6.e_2.mp3');
      e_2.play();
      break;

    case 'u':
    case 'U':
      const a2 = new Audio('sounds/7.a2.mp3');
      a2.play();
      break;

    case 'i':
    case 'I':
      const c = new Audio('sounds/8.c.mp3');
      c.play();
      break;

    case 'o':
    case 'O':
      const e_3 = new Audio('sounds/9.e_3.mp3');
      e_3.play();
      break;

    case 'p':
    case 'P':
      const a3 = new Audio('sounds/10.a3.mp3');
      a3.play();
      break;

    case 'a':
    case 'A':
      const c_4 = new Audio('sounds/11.c_4.mp3');
      c_4.play();
      break;

    case 's':
    case 'S':
      const e_4 = new Audio('sounds/12.e_4.mp3');
      e_4.play();
      break;

    case 'd':
    case 'D':
      const a4 = new Audio('sounds/13.a4.mp3');
      a4.play();
      break;

    case 'f':
    case 'F':
      const c_5 = new Audio('sounds/14.c_5.mp3');
      c_5.play();
      break;

    case 'g':
    case 'G':
      const e_5 = new Audio('sounds/15.e_5.mp3');
      e_5.play();
      break;

    case 'h':
    case 'H':
      const a5 = new Audio('sounds/16.a5.mp3');
      a5.play();
      break;

    case 'j':
    case 'J':
      const c_6 = new Audio('sounds/17.c_6.mp3');
      c_6.play();
      break;

    case 'k':
    case 'K':
      const e_6 = new Audio('sounds/18.e_6.mp3');
      e_6.play();
      break;

    case 'l':
    case 'L':
      const a6 = new Audio('sounds/19.a6.mp3');
      a6.play();
      break;

    case 'z':
    case 'Z':
      const c_7 = new Audio('sounds/20.c_7.mp3');
      c_7.play();
      break;

    case 'x':
    case 'X':
      const c_7b = new Audio('sounds/21.c_7b.mp3');
      c_7b.play();
      break;

    case 'c':
    case 'C':
      const e_7 = new Audio('sounds/22.e_7.mp3');
      e_7.play();
      break;

    case 'v':
    case 'V':
      const a7 = new Audio('sounds/23.a7.mp3');
      a7.play();
      break;

    case 'b':
    case 'B':
      const c8 = new Audio('sounds/24.c8.mp3');
      c8.play();
      break;

    default:
      break;
      // Default left empty on purpose
  }
}

// Function that triggers the note animation
const keyAnimation = currentKey => {
  // Keyboard letters that are paired with a sound
  const usedLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b'];
  // Check if the pressed key is paired with a sound
  // This prevents Errors when you press a button that is not paired with a sound (example CTRL)
  if (usedLetters.indexOf(currentKey) >= 0) {
    // Create a variable activeKey and set it to be the clicked/pressed div
    const activeKey = document.querySelector('.' + currentKey);
    // Adding the class 'pressed' to the activeKey starts the animation
    activeKey.classList.add('pressed');
    // Removing the class 'pressed' from the activeKey after a specified time ends the animation
    setTimeout(() => {
      activeKey.classList.remove('pressed');
    }, 100);
  }
}

// Get all the keyboard notes
const notes = document.querySelectorAll('.notes');
// Loop through and listen for a mouse press; if pressed, activate the onClick function
notes.forEach(note => note.addEventListener('mousedown', onClick));


// Listen for a keyboard press on every note and if pressed, activate the onKeyPress function
document.addEventListener('keydown', onKeyPress);

