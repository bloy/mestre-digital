//onde em 1D6 contam os pares como sucessos e o número 6 do dado explode!

const macroVersion = 'v0.1';
/* Terra Devastada
## Features
- dice so nice

source: 
icon: 
*/
let dice = 1; // coloque a quantidade de dados que deseja usar

(async () => {  
  let truedice = dice;
  let sucessos=0;
  let roll3d;
  let roll;
  let message = '';
  
  for (var i = 0; i < truedice; i++) {
    console.log(i);
    roll3d = new Roll('1d6').roll();    
    game.dice3d.showForRoll(roll3d);      
    roll = roll3d.total;
    
    if(roll==2 || roll==4 || roll==6){
      sucessos+=1;
      if(roll==6){
        truedice+=1;
      }
    }
    
  } // fim for

  message+=`<h2 style="color:Red">Terra Devastada</h2>`;
  message+=`<p>Você rolou ${dice} e teve <b style="color:Red">${sucessos}</b>.</p>`;
  
  let chatData = {
    user: game.user._id,    
    content: message,
    whisper : ChatMessage.getWhisperRecipients("GM")
  };  
  ChatMessage.create(chatData, {});  

})(); // fim async