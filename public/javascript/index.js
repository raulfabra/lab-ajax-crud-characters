const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(result => {
      const parentDiv = document.querySelector(".characters-container");
      const hiddenDivOnFetch = document.getElementById('character - info - to - hide')
      console.log("Des de Db Api rest : ", result.data)
    })
  allCharacters.forEach((character) => {
    let oneCharacter = document.createElement("div");
    oneCharacter.className = "character-info";

    let newDivName = document.createElement("div");
    newDivName.classList.add = ('name');
    newDivName.innerHTML= `Name: ${character.name}`;
    oneCharacter.appendChild(newDivName);

    parent.DivappendChild(oneCharacter)
  });
  hiddenDivOnFetch.style.fetch = "none";
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});



//NO ENTIENDO DE QUE SE TRATA ESTE LAB. NO HAY PAQUETES INSTALADOS, NO SE COMO PUEDO VER EL INDEX QUE NO SEA POR EL LIVE SERVER Y 
//SUPONGO QUE NO DEBE SER POR EL LIVE.SERVER. ME LO DEJO PENDIENTE, LO SIENTO. HE PREFERIDO ESTUDIAR TEMA AXIOS, APIS REST Y DEMAS Y LO TERMINARE
//EL LUNES DURANTE LA MAÑANA CON LA EXPLICACIÓN QUE LE PEDIRE A LA TA. AUN ASÍ ESTA HECHO HASTA LA ITERACION 3. Y OTRA COSA, COMO PUEDO VER LOS CONSOLE LOG?
// ARRANCANDO EL JSON SERVER NO ES SUFICIENTE!!!