const searchs = [];
const searchFilter =[]
console.log(document.querySelector("#dataList"));

function refreshPage(){
  window.location.reload();

}

function createCard(res) {
  document.querySelector('.initial-container').style.display = 'none';
  document.querySelector('.container-cards').innerHTML = '';
  console.log(res);  
  for (let i = 0; i < res[0].series.length; i++) {
      const card = document.createElement("div");

      const nameCountry = document.createElement("p");
      nameCountry.textContent = `País: ${res[0].series[i].pais.nome}`

      const scienceInvestment = document.createElement("p");
      scienceInvestment.textContent = `Invest. Ciência:${res[0].series[i].serie[46]["2018"]} % do PIB`;

      const idh = document.createElement("p");
      idh.textContent = `IDH:${res[1].series[i].serie[48]['2019']}`;
      
      const usersInternet = document.createElement("p");
      usersInternet.textContent = `Usuários: ${res[2].series[i].serie[49]['2020']+'%'}`;

      let id = res[0].series[i].pais.id;
      id.toLowerCase();

      const flagCountry = document.createElement("img")
      flagCountry.setAttribute(
        "src",
        `https://flagcdn.com/${id.toLowerCase()}.svg`
      );
      flagCountry.setAttribute("alt", `${id}`);
      flagCountry.setAttribute('class', 'flag');
      
      card.append(flagCountry);
      card.append(nameCountry);
      card.append(usersInternet);
      card.append(idh);
      card.append(scienceInvestment);


      const container = document.querySelector(".container-cards");
      container.append(card);
      card.className= 'card'
      container.classList.add = "container-cards";
      container.classList.add = "container";
      container.style.display = "visible";
    }
    setTimeout(() => {
      document.querySelectorAll(".container-cards p").forEach((e)=> {
        e.style.border = 'none'    
      }
      );
    }, 5000);
  }


async function fetchAPI(slug) {
  const data = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/paises/${slug}/indicadores/77857|77821|77831`
  );
  const response = await data.json();
  createCard(response); 
}

let search = document.querySelector("#countries").addEventListener('keyup', () => {
    search = document.querySelector("#countries").value.slice(0,2);
  });

document.querySelector("#submit").addEventListener("click", () => {
  searchs.push(search);
  document.querySelector("#countries").value = '';

  let slug = searchs.join('|'); 
  fetchAPI(slug);
  }); 
