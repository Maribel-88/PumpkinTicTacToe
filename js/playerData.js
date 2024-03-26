
let PlayerBoard = document.getElementById('playerboard');
let basket = JSON.parse(localStorage.getItem('form')) || [];

console.log(basket)

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerFormData = new FormData(form);
    const obj = Object.fromEntries(playerFormData);
    
    const json = JSON.stringify(obj);
    localStorage.setItem('form', json);
     
})

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

let YourName = basket.playerName;
console.log(YourName);
let generatePlayerData = () => {
    return(PlayerBoard.innerHTML = playerData.map((x)=>{
        let { id,name,img } = x;

        return`<div id=product-id-${id} class="item">
        <img width="50" height="50" src=${img} alt="">
          <h2>${YourName}</h2>
          <h3>${name}</h3>
          <div><h5 id=${id}>Score: </h5></div>
          </div>`;
    }).join(""));
};
generatePlayerData(); 





