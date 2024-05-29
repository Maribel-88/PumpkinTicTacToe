
// this code assigns X to be the active player or to be the first to make a move in our game
let activePlayer = 'X';
// stores our players data
let players = {
// we pushed the user name input and character choice    
    playerOne: { name:"" , characterName: "" , img:"" , image: "", id:"", score: 0},
//  pushed the generated random character to this object
    playerTwo: { name:"" , characterName: "" , img:"" , image:"", id:"", score: 0}
};
// this holds all the selected squares by both players
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];
// this is for clear game button
const clearGame = document.getElementById("clearGame");
// popup message containing the wins and draw messages
const msgRef = document.getElementById("message");
// start a new game after every end game
const newgameBtn = document.getElementById("new-game"); 
// will contain the info(name, character, score) for player1 in html
let firstPlayer = document.getElementById("playerName");
// will contain the info(name, character, score) for player2 in html
let secondPlayer = document.getElementById("player2Name");
// will hold info for both player1 and player2
let playerInfo = document.getElementById('playerInfo');
let playersFolder = [];//first player name data
// contain the popup message every end of a game
let popupRef = document.querySelector(".popup");
// popup before starting the game
let modal = document.getElementsByClassName('popup2');
// will show who's turn it is
const gameInstructionInfo = document.getElementById('game_Instructions_Info'); 
let startButton = document.getElementById('closePop');
      
// contains all the characters data
let playerData = [

    {
        id:"lofkgmusof",
        characterName:"AmongUs Rainbow",
        img:'url(images/rainbow.png)',
        image:'images/rainbow.png',
        name: "Raibow"
    },

    {
        id:"fhgfdhrrvr",
        characterName:"Skull Pirate",
        img:'url(images/x2.png)',
        image:'images/x2.png',
        name: "Jack Sparrow"
    },
  
    {
        id:"fghtjtjtkh",
        characterName:"Pumpkin Head",
        img:'url(images/o2.png)',
        image:'images/o2.png',
        name: "Smashed"
    },

    {
        id:"gfdbnrhjst",
        characterName:"AmongUs Black",
        img:'url(images/black.png)',
        image:'images/black.png',
        name: "Black Mamba"
    },

    {
        id:"ldkjfindjs",
        characterName:"Slasher",
        img:'url(images/girl.png)',
        image:'images/girl.png',
        name: "Killer Blade"
    },

    {
        id:"iodjgnelsf",
        characterName:"AmongUs Orange",
        img:'url(images/orange.png)',
        image:'images/orange.png',
        name: "Orange Head"
    },

    {
        id:"ldjifnmkss",
        characterName:"AmongUs OrangePlant",
        img:'url(images/orangePlant.png)',
        image:'images/orangePlant.png',
        name: "Grut"
    },

    {
        id:"pajfsnfkda",
        characterName:"AmongUs Red",
        img:'url(images/amongUsRed.png)',
        image:'images/amongUsRed.png',
        name: "Red Slayer"
    },

    {
        id:"ierndlvndl",
        characterName:"AmongUs Witch",
        img:'url(images/AmongUsWitch.png)',
        image:'images/AmongUsWitch.png',
        name: "Witch Hunter"
    },

    

  ]; 
  
//push the user input , user name to firstPlayerData
const addUser = (event)=>{
    let user = {name:document.getElementById("firstPlayerName").value}
    playersFolder.push(user);
    document.forms[0].reset(); // to clear the form for the next entries  
    
    let inputName = document.getElementById("userDetails");
    inputName.style.display= 'none';

    
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('userSaveBtn').addEventListener('click', addUser);
});
// restart a new game board
const resetGame = () => {
    for (let i = 0; i < 9; i++) {
        //This for loop iterates through each HTML square element
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}



// popup message X winner 
let xWins = () => {
    const winner =  players.playerOne;
    winner.score += 1;
    updateScores();
    audio('./media/youWin.mp3');
    popupRef.classList.remove("hide");
    msgRef.innerHTML = `&#x1F389; <br> ${playersFolder[0].name} ${players.playerOne.characterName} <br> Wins!`;
    document.querySelector("#new-game").addEventListener("click", function() {
    popupRef.classList.add("hide"); 
    resetGame();
    });  
}
// popup message O winner 
let oWins = () => {
    const winner =  players.playerTwo;
    winner.score += 1;
    updateScores();
    audio('./media/youLose.mp3');
    popupRef.classList.remove("hide");
    msgRef.innerHTML = `&#128531; <br> ${playersFolder[0].name} ${players.playerOne.characterName} <br>  Loses!`;
    document.querySelector("#new-game").addEventListener("click", function() {
    popupRef.classList.add("hide");
    resetGame();
    })    
}
// popup message when it's a draw
let xoDraw = () => {
    audio('./media/angryDraw.mp3');
    popupRef.classList.remove("hide");
    msgRef.innerHTML = "&#128565; <br>'It's a draw!";
    document.querySelector("#new-game").addEventListener("click", function() {
    popupRef.classList.add("hide");
    resetGame();
    })      
}



//generates the characters images
let generatePlayer = () => {
    return (playerInfo.innerHTML = playerData.map((x)=>{
        let { id,image } = x;
        return `<div id=player-id-${id} class="item">
        <img width="50" height="50" src=${image} alt="">
        <div class="details">
        
        <button  id="${id}" type="button" class="btn btn-light choose" onclick="chooseCharacter(${id})">Choose</button>
        </div>
        </div>`;
    }) 
    .join(""));
};

generatePlayer();


  

// this generates both players info board in html
  let chooseCharacter = (id) => {
        let selectedPlayer= id;
        let playerImage= playerData.find((x)=> x.id === selectedPlayer.id);
        players.playerOne.characterName = playerImage.characterName;
        players.playerOne.id = playerImage.id;
        players.playerOne.img = playerImage.img;
        players.playerOne.name = playersFolder[0].name;
        // player1
        firstPlayer.innerHTML =
            `<div id=product-id-${id} class="item">
                <h4>${playersFolder[0].name}</h4>
                <img  width="50" height="50" src=${playerImage.image} alt="">
                <div class="details">
                <h3 id="playerName">${playerImage.characterName}</h3>
                <div id="score1">Score:</div>
                </div>
            </div>
        ` ;
           
   
        const search = playerData.filter((x)=> x.id !== players.playerOne.id);
        const randomCharacterIndex = Math.floor(Math.random()*search.length);
        search[randomCharacterIndex].id;
      
        console.log(search[randomCharacterIndex].id);
        players.playerTwo.characterName = search[randomCharacterIndex].characterName;
        players.playerTwo.id = search[randomCharacterIndex].id;
        players.playerTwo.img = search[randomCharacterIndex].img;
        players.playerTwo.name = search[randomCharacterIndex].name;
        //player2
        secondPlayer.innerHTML = 
            `<div id=product-id-${search[randomCharacterIndex].id} class="item">
                <h4>${search[randomCharacterIndex].name}</h4>
                <img width="50" height="50" src=${search[randomCharacterIndex].image} alt="">
                <div class="details">
                <h3 id="playerName2">${search[randomCharacterIndex].characterName}</h3>
                <div id="score2">Score:</div>
                </div>
            </div>
        ` ;
        startButton.style.visibility = "visible";
    }     
     

   






//This function is for placing an x or o in a square.
function placingXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of selectedSquare array to 
    //see if it contains the square number clicked on.
    if (!selectedSquares.some(element=>element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is
        if (activePlayer === 'X') {
        //If activePlayer is equal to 'X', the players.playerOne.img is placed in HTML.
            select.style.backgroundImage = players.playerOne.img ;
        // Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'    
        } else {
        //if activePlayer is equal to 'O', the players.playerTwo.img is placed in HTML     
            select.style.backgroundImage = players.playerTwo.img ;
        }
        //squareNumber and activePlayer are concatenated together together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a fucntion to check for any win conditions.
        checkWinConditions();
        //This condtion is for changing the active player.
        if  (activePlayer==='X') {
        //If active player is 'X' change it to 'O'.    
            activePlayer = 'O';
            gameInstructionInfo.innerHTML=`${players.playerTwo.name}'s turn`;
           
           
        //If active player is anything other than 'X'.    
         } else {
        //Change the activePlayer to 'X'.    
            activePlayer = 'X';
            gameInstructionInfo.innerHTML=`${players.playerOne.name}'s turn`;
           
        }
        //This function plays placement sound.
        audio('./media/place2.mp3');
        //This condition checks to see if it is computers turn.
        if (activePlayer=== 'O') {
        //This function disables clicking for computer choice
            disableClick();
        //This function waits 1 second before placing the image
        //and enabling click.    
            setTimeout(function() { computersTurn();}, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This function results in a random square being selected.
    function computersTurn() {
    //This boolean is needed for our while loop.    
        let success = false;
    //This variable stores a random number 0 -8    
        let chooseASquare;
    //This condition allows our while loop to keep
    //trying if a square is selected already    
        while (!success) {
            //A random number between 0 and 8 is selected
            chooseASquare = String(Math.floor(Math.random()*9));
            //If the random number evaluates return true, the square hasn't been selected yet.
            if (placingXOrO(chooseASquare)) {
                //This line calls the function.
                placingXOrO(chooseASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}


/*This function parses the selectedSquares array to search for the win conditions.
drawWinLine function is called to draw line if condition is met.*/
function checkWinConditions() {
    //X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X',)) { drawWinLine(30, 68, 400, 68); setTimeout(function() { xWins();}, 1000); }
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(30, 204, 400, 204); setTimeout(function() { xWins();}, 1000); }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(30, 340, 400, 340); setTimeout(function() { xWins();}, 1000); }
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(60, 60, 60, 400); setTimeout(function() { xWins();}, 1000); }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(204, 30, 204, 400); setTimeout(function() { xWins();}, 1000);}
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(340, 50, 340, 400); setTimeout(function() { xWins();}, 1000);}
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(30,380, 360, 60); setTimeout(function() { xWins();}, 1000);}
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(70, 70, 380, 380); setTimeout(function() { xWins();}, 1000);}
    // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(30, 68, 400, 68); setTimeout(function() { oWins();}, 1000);}
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(30, 204, 400, 204); setTimeout(function() { oWins();}, 1000); }
    //O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(30, 340, 400, 340); setTimeout(function() { oWins();}, 1000);}
    // O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(60, 60, 60, 400); setTimeout(function() { oWins();}, 1000);}
     // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(204, 30, 204, 400); setTimeout(function() { oWins();}, 1000);}
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(340, 50, 340, 400); setTimeout(function() { oWins();}, 1000);}
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(30,380, 360, 60); setTimeout(function() { oWins();}, 1000);}
    // O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(70, 70, 380, 380); setTimeout(function() { oWins();}, 1000);}
    //This condition checks for tie. If none of the above conditions register 
    // and 9 squares are selected, the code executes.
    else if (selectedSquares.length >= 9) { 
        //This function plays the tie game sound
        audio('./media/tie.mp3');
        setTimeout(1000);
        xoDraw();
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function() { resetGame(); }, 1000);
    }
    //This fucntion checks if any array includes 3 strings.
    //It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //The next 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB); 
        const c = selectedSquares.includes(squareC);
        /*If the 3 variables we pass are all included in our array true is
        returned and our else if condition executes the drawWinLine function.*/
        if (a === true && b === true && c === true) { return true; }

    }
} 
//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}
//This function takes a string parameter of the path you set earlier for 
//placement sound ('./media/place.mp3')
function audio (audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio (audioURL);
    //Play method plays our audio sound
    audio.play();
}
//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our html canvas element
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
    //This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        //This line indicates where the end of a lines x axis is.
        x2 = coordX2,
        //This line indicates where the end of a lines y axis is.
        y2 = coordY2,
        //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
        //This variable stores temporary y axis data we update in our animation loop.
        y = y1;
//This function interacts with the canvas
function animateLineDrawing() {
    //This variable creates the loop for when the game ends it restarts.
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //This method clears content from last loop iteration.
    c.clearRect(0, 0, 408, 408);
    //This method starts a new path
    c.beginPath();
    //This method moves us to a starting point for our line.
    c.moveTo(x1, y1);
    //This method indicates the end point in our line.
    c.lineTo(x,y);
    //This method sets the width of our line.
    c.lineWidth = 10;
    //This method sets the color of our line.
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    c.stroke();
    //this condition checks if we've reached the endpoint.
    if(x1 <= x2 && y1 <= y2) {
        //This condition adds 10 to the previous end x point.
        if (x < x2) { x += 10; }
        //This condition adds 10 to the previous end y point.
        if (y < y2) { y += 10; }
        //This cancels our animation loop if reach the end points.
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }
    //This condition is similar to the one above.
    //It was necessary for the 6, 4, 2 win condition.
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }
} 
//This function clears our canvas after our win line is drawn.
function clear() {
    //This line starts our animation loop.
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 408, 408);
    cancelAnimationFrame(animationLoop);
}
//This line disallows clicking while the win sound is playing
disableClick();
//This line plays the win sounds.
 audio('./media/winGame2.mp3');
//This line calls our main animation loop.
animateLineDrawing();
//This line waits 1 second.
//Then, clears canvas, resets game, and allows clicking again.
setTimeout(function() {clear(); resetGame(); }, 1000);
}
//This function resets the game in a tie or a win.


clearGame.addEventListener("click", () => {
    setTimeout(function() { resetGame(); }, 1000);
   
  });



  function updateScores() {
    score1.innerHTML = `<h3>Score: ${players.playerOne.score}</h3>`
    score2.innerHTML = `<h3>Score: ${players.playerTwo.score}</h3>`
  }  
 
module.exports = addUser;

       