const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./img/female3.png"
  }
];

// ***** DICHIARAZIONI ELEMENTI HTML E VARIABILI ***** 
const container = document.querySelector(".card-container"); 

renderMembers(teamMembers, container);

// **** FUNZIONI ****

function renderMembers (objArray, htmlOutput)
{
  let cards = "";

  for (let i = 0; i < objArray.length; i++) {
    const member = objArray[i];
    cards += addNewCard(member);
  }
  htmlOutput.innerHTML = cards;
}






function addNewCard (objElement){
  const card = `
  <div> 
    <figure>
      <img src="${objElement.img}" alt="${objElement.name}">
      <figcaption>${objElement.name} ${objElement.role} ${objElement.email}
    </figure>
  </div>` ;

  return card;
}

