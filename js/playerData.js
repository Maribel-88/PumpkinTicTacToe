
let userInfo = document.getElementById("playerInfo");
let firstPlayer = document.getElementById("playerName");
let secondPlayer = document.getElementById("player2Name");

let firstPlayerData = [];
            

const addUser = (event)=>{
    Event.preventDefault();
    let user = {firstPlayerName:document.getElementById("firstPlayerName").value}
    
    firstPlayerData.push(user);
    document.forms[0].reset(); // to clear the form for the next entries
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('userSaveBtn').addEventListener('click', addUser);
});

console.log(firstPlayerData);
let playerFolder = [];





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
                            <button id=${id} type="button" class="btn btn-light quantity" onclick="choosePlayer(${id})">Choose</button>
                            </div>
                     </div>

                     
   
  `;
    })

        .join(""));
  
};
generatePlayerData(); 

let choosePlayer = (id) => {
    let selectedPlayer = id;

    playerFolder.push({ id:selectedPlayer.id});

   
};





