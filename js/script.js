/* - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto. 
   1. inizializzo un vettore vuoto che conterrá ciascun membro
   2. inizializzo un oggetto che contiene le info del membro
*/
let teamMembers = [
   {
      name : 'Angela Caroll',
      role : 'Chief Editor',
      photo : 'img/angela-caroll-chief-editor.jpg'
   },
   {
      name : 'Angela Lopez',
      role : 'Social Media Manager',
      photo : 'img/angela-lopez-social-media-manager.jpg'
   },
   {
      name : 'Barbara Ramos',
      role : 'Graphic Deisgner',
      photo : 'img/barbara-ramos-graphic-designer.jpg'
   },
   {
      name : 'Scott Estrada',
      role : 'Developer',
      photo : 'img/scott-estrada-developer.jpg'
   },
   {
      name : 'Walter Gordon',
      role : 'Office Manager',
      photo : 'img/walter-gordon-office-manager.jpg'
   }   
];

const teamContainer = document.querySelector('.team-container');

//
// console.log('log array', teamMembers);
/* - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.*/
generateMembersTeamDOM();

/**
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. 
 */
//intercetto il bottone del form
const addMemberButton = document.getElementById('addMemberButton');

/**
 * una serie di eventi accade al click del bottone
 */
addMemberButton.addEventListener('click', function () {
   
   //aggiungo un nuovo membro
   //1. salvo le info
   //2. le stampo in DOM

   //memorizzo le info del nuovo membro
   const name = document.getElementById('name').value;
   const role = document.getElementById('role').value;
   const image = document.getElementById('image').value;

   // controllo campi vuoti form
   if (name === '' || role === '' || image === '') {
      
      alert('Inserisci correttamente i dati');
   } else {

      const newMember = {
         name : name,
         role : role,
         photo : image
      }
      // console.log(newMember);
      
      //aggiungo il nuovo membro al team
      teamMembers = pushMember(newMember);
      
      // sovrascrivo tutti i membri stampati precedentemente con l'uniuco presente in html per non creare duplicati
      teamContainer.innerHTML = `
         <div class="team-card">
            <div class="card-image">
               <img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett"/>
            </div>
            <div class="card-text">
               <h3>Wayne Barnett</h3>
               <p>Founder & CEO</p>
            </div>
         </div>
      `;

      // Ri-stampo a schermo tutti i membri + il nuovo aggiunto
      generateMembersTeamDOM();

   }

});


//////////FUNZIONI////////////

/**
 * questa funzione aggiunge un oggetto all'array e restituisce l'array aggiornato
 * @param {Object} member 
 * @returns 
 */
function pushMember (member) {

   teamMembers.push(member);

   return teamMembers;
}

/**
 * questa funzione aggiunge nel container html ogni membro
 */
function generateMembersTeamDOM () {

   // teamContainer.innerHTML = '';

   for (let i = 0; i < teamMembers.length; i++) {
      
      const member = getMember(i);
      
      teamContainer.append(member);
   }

}

/**
 * questa funzione crea una card che contiene tutte le info del membro selezionato attraverso l'index, e ci restituisce la card costruita
 * @param {Number} index 
 * @returns 
 */
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

   // console.log('teamCard', teamCard)

   return teamCard;
}