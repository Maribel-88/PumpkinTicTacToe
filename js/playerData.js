// let playerData = [
//     {
//         id:"daneigdirw",
//         name:"Skull Pirate",
//         img:"images/x2.png"
//     },

//     {
//         id:"kdignfdjre",
//         name:"Pumpkin Head",
//         img:"images/o2.png"
//     }
// ];

let formData = JSON.parse(localStorage.getItem("form")) || [];
  
let playerData = [
  {
      id:"daneigdirw",
      name:"Skull Pirate",
      img:"images/x2.png"
  },

  {
      id:"kdignfdjre",
      name:"Pumpkin Head",
      img:"images/o2.png"
  }
];  

let PlayerBoard = document.getElementById('playerboard');
let generatePlayerData = () => {
    return(PlayerBoard.innerHTML = playerData.map((x)=>{
        let { id,name,img } = x;
        let search = formData.find((x) => x.id === id) || [];
        return`<div id=product-id-${id} class="item">
        <img width="50" height="50" src=${img} alt="">
        
          <h3>${name}</h3>
          <div><h5>Score: </h5></div>
          </div>`;
    }).join(""));
};
generatePlayerData(); 

let welcomePopup = document.getElementById('pop2Msg');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerFormData = new FormData(form);
    const obj = Object.fromEntries(playerFormData);
    
    const json = JSON.stringify(obj);
    localStorage.setItem('form', json);
    console.log(localStorage);

  
})

