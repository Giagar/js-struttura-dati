// DATI
const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

const powerValues = [1, 2, 3, 4, 5];

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}

const cards = [{

  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[2],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

    },
  {

    cardName: 'Sviluppatore junior',

    cost: {
      genericCostNumber: 2,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[1],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[3],
    cardObject: 'Pokemon',

    editionType: editions['SP'],

    description: 'Lo sviluppatore junior spezza i byte in bit!',
    story: 'Lo sviluppatore junior è una forma di essere umano evoluto.',

    score: {
      power: 4,  // r
      toughness: 5
    }

    },
  {

    cardName: 'Sviluppatore mid-level',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[1],
        fieldCodes[2],
        fieldCodes[3],
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[3],
    cardObject: 'Enchant',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

    },
  {

    cardName: 'Sviluppatore senior',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[5],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

    },
]


// LOGICA
//funzione che filtra l'array a seconda del valore di power
function filterByPower(arr, powerValue){
  return arr.filter(el => el.score.power === powerValue);
};

//funzione che filtra l'array a seconda del valore di card-type
function filterByCardType(arr, value){
  return arr.filter(el => el.cardType === value);
};

//funzione per renderizzare le carte
function renderCards(domTarget, array) {

  let content = "";
  
  if (array.length === 0) {
    content = "<div>Non ci sono carte corrispondenti al valore selezionato.</div>";
  } else {
    array.forEach(el => {
      content += `
      <div class="card">
        <div class="top-container">
          <h2>${el.cardName}</h2>
          <div class="cost-container">
          <span class="generic">${el.cost.genericCostNumber}</span>
          <span class="fields"></span>
          </div>
        </div>
        <div class="img-container">
          <img src="#" alt="immagine carta">
        </div>
        <div class="mid-container">
          <span class="card-type">${el.cardType}</span>
          <span class="card-object">${el.cardObject}</span>
          <span class="edition-type" style="background-color: ${el.editionType.rarity}">${el.editionType.edition}</span>
        </div>
        <div class="description-container">
          <p class="description">${el.description}</p>
          <p class="story">${el.story}</p>
        </div>
        <div class="bottom-container">
          <div class="credits">
            <span class="artist"></span><br>
            <span class="copy"></span>
          </div>
          <div class="score">${el.score.power}/${el.score.toughness}</div>
        </div>
      </div>
      `
    })
  }
  
  domTarget.innerHTML = content;
}

//funzione per renderizzare le option in select
function renderSelect(domTarget, array) {
  let content = "";
  
  array.forEach(el => {
    content += `<option value="${el}">${el}</option>`;
  })
  
  domTarget.innerHTML += content;
}

//???? non funziona: come faccio a passare la funzione come parametro in modo corretto ????
//funzione per prendere il valore di select e rirenderizzare la pagina dopo ogni change
// function displayOnChange(target, fn) {
//   $(target).change(function() {
//     if($(this).val() === "all") {
  
//       //se non è stato selezionato alcun livello, mostra tutte le cards
//       renderCards(cardsContainer, cards)
  
//     } else {
  
//       //prendi valore da select e crea un nuovo arrai di cards corrispondenti a quel valore
//       const selectedValue = $(this).val();
//       const filteredArray = fn(cards, selectedValue);
  
//       renderCards(cardsContainer, filteredArray)
//     }
//   })
// }
// // Es: displayOnChange("#cards-selection-type", filterByCardType)


// OUTPUT
//rendering iniziale dell'array completo: quello che vediamo al caricamento
const cardsContainer = document.querySelector(".cards-container"); //definizione del target
renderCards(cardsContainer, cards);

//rendering della select power in base ai valori di select disponibili in powerValues
const cardsSelector = document.querySelector("#cards-selection"); //definizione del target
renderSelect(cardsSelector, powerValues);

//rendering della select cardType in base ai valori di select disponibili in cardTypes
const cardsTypeSelector = document.querySelector("#cards-selection-type"); //definizione del target
renderSelect(cardsTypeSelector, cardTypes);

//rirendering della pagina in seguito a change in select power
$("#cards-selection").change(function() {
  if(isNaN($(this).val())) {

    //se livello di potere non è stato selezionato, mostra tutte le cards
    renderCards(cardsContainer, cards)

  } else {

    //prendi valore da select e crea un nuovo arrai di cards con power corrispondente a quel valore
    const selectedValue = parseInt($(this).val());
    const filteredArray = filterByPower(cards, selectedValue);

    renderCards(cardsContainer, filteredArray)
  }
})

//rirendering della pagina in seguito a change in select cardType
$("#cards-selection-type").change(function() {
  if($(this).val() === "all") {

    //se livello di potere non è stato selezionato, mostra tutte le cards
    renderCards(cardsContainer, cards)

  } else {

    //prendi valore da select e crea un nuovo arrai di cards con power corrispondente a quel valore
    const selectedValue = $(this).val();
    const filteredArray = filterByCardType(cards, selectedValue);

    renderCards(cardsContainer, filteredArray)
  }
})





