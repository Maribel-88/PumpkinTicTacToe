/*
let userInfo = document.getElementById("playerInfo");
let firstPlayer = document.getElementById("playerName");
let secondPlayer = document.getElementById("player2Name");
let userImage = document.getElementById('player1Image');

let playerFolder = []; //chosen character data is stored
let firstPlayerData = []; // user name input is stored



//push the user input , user name to firstPlayerData
const addUser = (event)=>{
    let user = {playerName1:document.getElementById("firstPlayerName").value}
    
    firstPlayerData.push(user);
    document.forms[0].reset(); // to clear the form for the next entries
       
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('userSaveBtn').addEventListener('click', addUser);
});



let playerData = [
  {
      id:"fhgfdhrrvr",
      name:"Skull Pirate",
      img:"images/x2.png"
  },

  {
      id:"fghtjtjtkh",
      name:"Pumpkin Head",
      img:"images/o2.png"
  }
];  



let generatePlayerData = () => {
    return(userInfo.innerHTML = playerData.map((x)=>{
            let {id, name, img } = x
            return ` 
                     <div id=player-id-${id} class="item">
                            <img width="50" height="50" src=${img} alt="">
                            <div class="details">
                            <h3>${name}</h3>
                            <button id=${id} type="button" class="btn btn-light choose" onclick="choosePlayer(${id})">Choose</button>
                            </div>
                     </div>
  `;
    }) .join("")); 
};
generatePlayerData(); 


let choosePlayer = (id) => {
    
    let selectedPlayer= id;
    
    let playerImage= playerData.find((x)=> x.id === selectedPlayer.id);
    playerFolder.push(playerImage);
    let search = playerData.find((x)=> x.id !== selectedPlayer.id);
    secondPlayer.innerHTML = 
    `<div id=product-id-${id} class="item">
        <h4>Random</h4>
        <img id="player2Image" width="50" height="50" src=${search.img} alt="">
        <div class="details">
          <h3 id="playerName2">${search.name}</h3>
          <div id="score2">Score:</div>
        </div>
     </div>
  ` ; 
    return firstPlayer.innerHTML =
    `<div id=product-id-${id} class="item">
        <h4>${firstPlayerData[0].playerName1}</h4>
        <img id="player1Image" width="50" height="50" src=${playerImage.img} alt="">
        <div class="details">
          <h3 id="playerName">${playerImage.name}</h3>
          <div id="score1">Score:</div>
        </div>
     </div>
  `
        ;
    
    }
    choosePlayer();
    gameCanvas();
   */