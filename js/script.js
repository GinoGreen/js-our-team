/* - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto. 
   1. inizializzo un vettore vuoto che conterrá ciascun membro
   2. inizializzo un oggetto che contiene le info del membro
*/
let teamMembers = [];

const member1 = {
   name : 'Angela Caroll',
   role : 'Chief Editor',
   photo : 'img/angela-caroll-chief-editor.jpg'
};
const member2 = {
   name : 'Angela Lopez',
   role : 'Social Media Manager',
   photo : 'img/angela-lopez-social-media-manager.jpg'
};
const member3 = {
   name : 'Barbara Ramos',
   role : 'Graphic Deisgner',
   photo : 'img/barbara-ramos-graphic-designer.jpg'
};
const member4 = {
   name : 'Scott Estrada',
   role : 'Developer',
   photo : 'img/scott-estrada-developer.jpg'
};
const member5 = {
   name : 'Walter Gordon',
   role : 'Office Manager',
   photo : 'img/walter-gordon-office-manager.jpg'
};

//pusho all'interno del vettore tutti i membri
teamMembers = pushMember();

//
console.log('log array', teamMembers);

generateMembersTeamDOM();

/* - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.*/

//////////FUNZIONI////////////

function pushMember () {

   teamMembers.push(member1);
   teamMembers.push(member2);
   teamMembers.push(member3);
   teamMembers.push(member4);
   teamMembers.push(member5);
   
   return teamMembers;
}

function generateMembersTeamDOM () {

   for (let i = 0; i < teamMembers.length; i++) {
      
      const teamContainer = document.querySelector('.team-container');

      const member = getMember(i);
      
      teamContainer.append(member);
   }

}

function getMember (index) {

   console.log('index', index);
   console.log('teamMembers[index]', teamMembers[index]);

   const teamCard = document.createElement('div');
   const cardImage = document.createElement('div');
   const cardText = document.createElement('div');

   teamCard.className = 'team-card';
   cardImage.className = 'card-image';
   cardText.className = 'card-text';

   const member = teamMembers[index];

   /*console.log(member.name);
   console.log(member.role);
   console.log(member.photo);*/
   
   cardImage.innerHTML = `<img src="${member.photo}" alt=""/>`;
   
   cardText.innerHTML = `
      <h3>${member.name}</h3>
      <p>${member.role}</p>
   `;

   teamCard.innerHTML = '';
   
   teamCard.append(cardImage);
   
   teamCard.append(cardText);

   console.log('teamCard', teamCard)

   return teamCard;
}