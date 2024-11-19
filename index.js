// const post = {
//     username: '@saad._._.sultan',
//     content: 'Should I Give Up',
//     likes: 150,
//     comments: 20,
//     repost: 100,
//     tags: ['@SaadSultan', '@Saadii']
// }

// console.log(post)

// const student = {
//     name: 'Saad',
//     age: 20,
//     grade: 'A',
//     subjects: ['Math', 'Science', 'English'],
//     city: 'Sialkot',
// }


// Nested Objects
// const classInfo = {
//     saad: {
//         grade: "A",
//         City: "Lahore"
//     },
//     Asad: {
//         grade: "B",
//         City: "Karachi"
//     },
//     Ali: {
//         grade: "C",
//         City: "Islamabad"
//     }
// }

// Array of Objects

// const classInfo = [
//     {
//         name: 'Saad',
//         grade: 'A',
//         city: 'Lahore'
//     },
//     {
//         name: 'Asad',
//         grade: 'B',
//         city: 'Karachi'
//     },
//     {
//         name: 'Ali',
//         grade: 'C',
//         city: 'Islamabad'
//     }

// ]

//Randon Integers 

// let step1 = Math.random();
// let step2 = step1 *10;

// let step3 = Math.floor(step2);

// let shortStep=Math.floor(Math.random() *100)+1
// let shortStep1=Math.floor(Math.random() *5)+1

// console.log(shortStep);
// console.log(shortStep1);

// //Number Guessing Game 

// let max = prompt ('Enter your Max Number');

// let random = Math.floor((Math.random()* max)) + 1;

// let guess = prompt('Guess The Number');
// while(true){
//     if(guess == 'quit'){
//         console.log('You quit the game 😔');
//         break;
//     }

//     if(guess == random ){
//         console.log('You guessed it right 🎉, random number was ', random)
//         break;
//     }
//     else if(guess < random ){
//         guess = prompt('Your Guess Was too small. Please Try Again 🤔 ');
//     }
//     else{
//         guess = prompt('Your Guess Was too large. Please Try Again 🤔 ');
//     }

// }

let randomNumber;
let maxNumber;
let gameActive = false;

document.getElementById('startGame').addEventListener('click', () => {
    maxNumber = document.getElementById('maxNumber').value;
    if (maxNumber && maxNumber > 0) {
        startGame();
    } else {
        alert('Please enter a valid max number!');
    }
});

document.getElementById('submitGuess').addEventListener('click', () => {
    if (!gameActive) return;

    let guess = document.getElementById('guessInput').value;
    guess = parseInt(guess);

    if (guess == randomNumber) {
        document.getElementById('feedback').innerText = `🎉 You guessed it right! The number was ${randomNumber}.`;
        gameActive = false;
        document.getElementById('restartGame').style.display = 'inline';
    } else if (guess < randomNumber) {
        document.getElementById('feedback').innerText = 'Your guess was too small. Try again 🤔';
    } else {
        document.getElementById('feedback').innerText = 'Your guess was too large. Try again 🤔';
    }
});

document.getElementById('quitGame').addEventListener('click', () => {
    document.getElementById('feedback').innerText = 'You quit the game 😔';
    gameActive = false;
    document.getElementById('restartGame').style.display = 'inline';
});

document.getElementById('restartGame').addEventListener('click', () => {
    restartGame();
});

function startGame() {
    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    document.getElementById('maxDisplay').innerText = maxNumber;
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('feedback').innerText = '';
    gameActive = true;
    document.getElementById('restartGame').style.display = 'none';
}

function restartGame() {
    document.getElementById('maxNumber').value = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('feedback').innerText = '';
    gameActive = false;
}

// let car={
// name:'Suzuki',
// model:'v8',
// color:'red'
// }

// console.log(car)


// let Person = {
//     name:'Saad',
//     age: 25,
//     city:'Lahore'
// }

// console.log(Person)