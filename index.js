// const playBoard=document.querySelector(".play-board");
// const scoreElement=document.querySelector(".score");
// const highScoreElement=document.querySelector(".high-score");
// const controls=document.querySelector(".controls i");

// let gameOver=false;
// let foodX, foodY;
// let snakeX=5, snakeY=5;
// let velocityX=0, velocityY=0;
// let snakeBody=[];
// let setIntervalId;
// let score=0;

// // get high score from local storage

// let highScore=localStorage.getItem("highScore") || 0;
// highScoreElement.innerText=`High Score = ${highScore}`;

// //pass a random number to generate food position

// const updateFoodPosition= () => {
//     foodX=Math.floor(Math.random()*30)+1;
//     foodY=Math.floor(Math.random()*30)+1;
// }


// const handleGameOver = () => {
//     clearInterval(setIntervalId);
//     alert("Game Over! Press OK to replay...");
//     location.reload();

// }

// // change Velocity based on key press 

// const changeDirection = e => {
//     if (e.key === "ArrowUp" && velocityY !== 1) {
//         velocityX=0;
//         velocityY= -1;
//     } else if (e.key === "ArrowDown" && velocityY !== -1) {
//         velocityX=0;
//         velocityY= 1;
//     } else if (e.key === "ArrowLeft" && velocityX !== 1) {
//         velocityX = -1;
//         velocityY=0;
//     } else if (e.key === "ArrowRight" && velocityX !== -1) {
//         velocityX = 1;
//         velocityY=0;
//     }

// }


// // change direction on each key click

// controls.forEach(button => button.addEventListener("click", () => changeDirection({key: button.dataset.key})));

// const initGame = () => {
//     if (gameOver) return handleGameOver();
//     let html=`<div class = "food" style = " grid-area: ${foodY}/ ${foodX}"></div>`;

//     // when snake eat food
//     if (snakeX=== foodX && snakeY === foodY){
//         updateFoodPosition();
//         snakeBody.push([foodY,foodX]); // add food to snake body array
//         score++;
//         highScore= score > highScore ? score : highScore;

//         localStorage.setItem("high-score", highScore);
//         scoreElement.innerText = `Socre: ${score}`;
//         highScoreElement.innerText = `High Score: ${highScore}`;


//     }

//     // update snake head
//     snakeX += velocityX;
//     snakeY += velocityY;

//     // shift things forward values of element in snake body array
//     for (let i = snakeBody.length - 1; i > 0; i--){
//         snakeBody[i] = snakeBody[i - 1];

//     }

//     snakeBody[0] = [snakeX,snakeY];

//     // check snake body is out of wall or no

//     if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
//         return gameOver=true;
//     }

//     //add div for each part of snake body 

//     for(let i =0; i<snakeBody.length; i++){
//         html += `<div class="head" style=grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]} "></div>`;

//         //check snake head hit body or not.
//         if (i != 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
//             gameOver=true;
//         }
//     }

//     playBoard.innerHTML= html;
// }

// updateFoodPosition();
// setIntervalId=setIntervalId(initGame,100);
// document.addEventListener("keyup", changeDirection);


const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

// Get high score from local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

// Function to generate random food position
const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
};

// Change velocity based on key press
const changeDirection = e => {
    if (e.key === "ArrowUp" && velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
    }
};

// Change direction on each control click
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

const initGame = () => {
    if (gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX};"></div>`;

    // When snake eats food
    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]); // Add food to snake body array
        score++;
        highScore = score > highScore ? score : highScore;

        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }

    // Update snake head
    snakeX += velocityX;
    snakeY += velocityY;

    // Shift elements in snake body array
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY];

    // Check if snake is out of bounds
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    // Add div for each part of snake body
    for (let i = 0; i < snakeBody.length; i++) {
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]};"></div>`;
        
        // Check if snake's head collides with body
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }

    playBoard.innerHTML = html;
};

updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);

