
"use strict";

let bd= [
    {
    "country":"Word",
    "suspeitos":"<div class='spinner blue'></div>",
    "confirmados":"<div class='spinner gold'></div>",
    "mortes":"<div class='spinner red'></div>"
   }
];

const showData = ( data ) => {
    const panel =`
     <div class='estado'>
        ${data.country}
     </div>
     <div class='card suspeitos'>
        <div class='numeros'>
           ${data.suspeitos} 
        </div>
        <div class='titulo'>SUSPEITOS</div>
     </div>
     <div class='card mortes'>
        <div class='numeros'>
           ${data.mortes} 
        </div>
        <div class='titulo'>MORTES</div>
     </div>
`;
    const $container = document.createElement('div');
    $container.innerHTML= panel;
    
    const $info= document.getElementById('info');
    $info.removeChild($info.firstChild);
    $info.appendChild($container);
    
};

const getCoronaCountry = async () => {
    const url='https://corona.lmao.ninja/countries?sort=country';
    const getApi= await fetch(url);
    const json = await getApi.json();
    bd= json;
   
}

const findCountry= (evento) => {
    const maps= evento.target.id;
    const getCountry= bd.find( country => country.countryInfo.iso2 == maps? country:"");
    const country= {
            "country":getCountry.country,
            "suspeitos":getCountry.cases,
            "mortes":getCountry.deaths
    }
    showData ( country );
}

document.querySelector('svg').addEventListener('click', findCountry);

showData( bd[0] );
getCoronaCountry();