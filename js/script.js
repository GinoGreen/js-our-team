/* - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto. 
   1. inizializzo un vettore vuoto che conterrá ciascun membro
   2. inizializzo un oggetto che contiene le info del membro
*/
let teamMembers = [];
const member1 = {
   name : '1',
   role : '1',
   photo : 'img\angela-caroll-chief-editor.jpg'
};
const member2 = {
   name : '2',
   role : '2',
   photo : 'img\angela-lopez-social-media-manager.jpg'
};
const member3 = {
   name : '3',
   role : '3',
   photo : 'img\barbara-ramos-graphic-designer.jpg'
};
const member4 = {
   name : '4',
   role : '4',
   photo : 'img\scott-estrada-developer.jpg'
};
const member5 = {
   name : '5',
   role : '5',
   photo : 'img\walter-gordon-office-manager.jpg'
};

const teamCard = document.createElement('div');
const cardImage = document.createElement('div');
const cardText = document.createElement('div');
const nameText = document.createElement('h3');
const roleText = document.createElement('p');

teamCard.className = 'team-card';
cardImage.className = 'card-image';
cardText.className = 'card-text';

//pusho all'interno del vettore tutti i membri
teamMembers = pushMember();

//
console.log('log 1', teamMembers);
printMemberTeam();


/* - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.*/

//////////FUNZIONI////////////

function pushMember () {

   teamMembers.push(member1);
   teamMembers.push(member2);
   teamMembers.push(member3);
   teamMembers.push(member4);
   teamMembers.push(member5);
   
   console.log(teamMembers);
   
   return teamMembers;
}

function printMemberTeam () {

   const teamContainer = document.querySelector('.team-container');

   for (let index of teamMembers) {

      const member = teamMembers[index];

      console.log(member.name);
      console.log(member.role);
      console.log(member.photo);
      
      cardImage.innerHTML = `<img src="${member.photo}" alt=""/>`;
      
      nameText.innerHTML = member.name;
      
      roleText.innerHTML = member.role;
      
      cardText.innerHTML = nameText;
      
      cardText.innerHTML += roleText;
      
      teamCard.innerHTML = cardImage;
      
      teamCard.innerHTML += cardText;

      teamContainer.innerHTML += teamCard;

   }

}