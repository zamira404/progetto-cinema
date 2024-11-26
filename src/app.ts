type Immagini = {
    titolo : string,
     immagine: string, 
}

// Array delle immagini con il tipo specificato
const immagini: Immagini[] = [
    { titolo: "La storia infinita", immagine: "assets/Artax-e-Atreju.jpg" },
    { titolo: "Igor", immagine: "assets/igor.avif" },
    { titolo: "Doc", immagine: "assets/Doc.png" },
    { titolo: "Marinelli Borghi", immagine: "assets/Marinelli-Borghi.jpeg" },
    { titolo: "Santa Marinelli", immagine: "assets/Santa-Marinelli.jpg" }
];


// funzione che manda le immagini a schermo.
function createImageGrid() {
    const imageGrid = document.getElementById('imageGrid');

    if (imageGrid) {
        immagini.forEach((immagine) => {
            const imageHTML = `
                <div class="col-md-4 col-sm-4 mb-4 mt-2 ml-0 p-0 card-film" style="flex: 0 0 auto; padding: 5px; overflow: hidden;">
                    <div class="card" style="margin: 0; width: 100%; ">
                        <img src="${immagine.immagine}" class="card-img-top" style="height: 300px;" alt="${immagine.titolo}" style="width: 100%; object-fit: cover;">
                     <div class="card-body" style="display: flex; justify-content: space-between; align-items: center;;color: darkgoldenrod">
                        <h5 class="card-title text-center" style="flex-grow: 1; text-align: center;">${immagine.titolo}</h5>
                        <button type="button" class="btn btn-warning w-1 m-1" style="width: 25%;">Acquista</button>
                    </div>
                    </div>
                </div>
            `;
            imageGrid.innerHTML += imageHTML;
        });
    }
}
// Chiamata della funzione per costruire la griglia di immagini
createImageGrid();

// card dei film.
interface Film {
    titolo: string;       
    anno: number;         
    genere: string; 
    regia: string;
    cast: string;     
    durata: number;       
    immagineLocandina: string; 
  }
  

  const films: Film[] = [

    {
      titolo: "Frankenstein Junior",
      anno: 1974,
      genere: "Comico, Fantascienza",
      regia: "Mel Brooks",
      cast: "Gene Wilder,Peter Boyle,Marty Feldman,Cloris Leachman,Teri Garr,Kenneth Mars,Madeline Kahn",
      durata: 105,
      immagineLocandina: "assets/frankenstein junior.jpg",
    },
    {
        titolo: "Gatto nero e bianco",
        anno: 1998,
        genere: "Commedia, Drammatico",
        regia: "Emir Kusturica",
        cast: "Bajram Severdzan, Srdjan Todorovic, Branka Katic",
        durata: 127,
        immagineLocandina: "assets/gatto nero gatto bianco.jpg",
      },
      {
        titolo: "Il castello errante di Howl",
        anno: 2004,
        genere: "Animazione, Fantasy, Avventura",
        regia: "Hayao Miyazaki",
        cast: "Chieko Baisho, Takuya Kimura, Akihiro Miwa (doppiatori giapponesi)",
        durata: 119,
        immagineLocandina: "assets/il castello errante.jpg",
      },
      {
        titolo: "Il Marchese del Grillo",
        anno: 1981,
        genere: "Commedia, Storico",
        regia: "Mario Monicelli",
        cast: "Alberto Sordi, Paolo Stoppa, Caroline Berg",
        durata: 135,
        immagineLocandina: "assets/il marchese del grillo.jpeg",
      },
      {
        titolo: "L'odio",
        anno: 1995,
        genere: "Drammatico, Sociale",
        regia: "Mathieu Kassovitz",
        cast: "Vincent Cassel, Hubert Koundé, Saïd Taghmaoui",
        durata: 98,
        immagineLocandina: "assets/l'odio.jpg",
      },
      {
        titolo: "La Storia Infinita",
        anno: 1984,
        genere: "Fantasy, Avventura",
        regia: "Wolfgang Petersen",
        cast: "Barret Oliver, Noah Hathaway, Tami Stronach",
        durata: 102,
        immagineLocandina: "assets/la storia infinita.jpg",
      },
      {
        titolo: "Non essere cattivo",
        anno: 2015,
        genere: "Drammatico, Crime",
        regia: "Claudio Caligari",
        cast: "Luca Marinelli, Alessandro Borghi, Silvia D'Amico",
        durata: 100,
        immagineLocandina: "assets/non essere cattivo.jpg",
      },
      {
        titolo: "Pretty Woman",
        anno: 1990,
        genere: "Commedia romantica",
        regia: "Garry Marshall",
        cast: "Richard Gere, Julia Roberts, Ralph Bellamy",
        durata: 119,
        immagineLocandina: "assets/pretty woman.jpg",
      },
      {
        titolo: "The Goonies",
        anno: 1985,
        genere: "Avventura, Commedia",
        regia: "Richard Donner",
        cast: "Sean Astin, Josh Brolin, Corey Feldman",
        durata: 114,
        immagineLocandina: "assets/the goonies.jpg",
      },
      {
        titolo: "Ritorno al futuro",
        anno: 1985,
        genere: "Fantascienza, Avventura",
        regia: "Robert Zemeckis",
        cast: "Michael J. Fox, Christopher Lloyd, Lea Thompson",
        durata: 116,
        immagineLocandina: "assets/ritorno al futuro.jpg",
      },
   
  ];
  

  const orari: {
      orario1: string;
      orario2: string;
      orario3: string;
      orario4: string;
      orario5: string;
  } = {
      orario1: "18:00",
      orario2: "20:00",
      orario3: "22:00",
      orario4: "00:00",
      orario5: "02:00"
  };

  function displayFilms() {
      const filmsContainer = document.getElementById('films');
  
      if (filmsContainer) {
          films.forEach(film => {
              const filmCard = document.createElement('div');
             

              filmCard.innerHTML = `
                                <div class="locandineFilm card-body m-4" style="display: flex; align-items: center;border: 1px solid white;">
                                <div class="img-locandina m-5 p-2"  style="width:10%; height:7%;" >
                                    <img src="${film.immagineLocandina}" alt="${film.titolo}" style="width: 100%;">
                                </div>
                    <div style="width: 40%;padding-left: 10px;display: flex;flex-direction: column;justify-content: start;">
                        <div class="text m-2" style="text-align: left;margin-left:20px">
                            <p style="text-align: left;"><strong>${film.titolo}</strong></p>
                            <p style="text-align: left;"><strong>Anno:</strong> ${film.anno}</p>
                            <p style="text-align: left;"><strong>Genere:</strong> ${film.genere}</p>
                            <p style="text-align: left;"><strong>Regia:</strong> ${film.regia}</p>
                            <p style="text-align: left;"><small>Durata: ${film.durata} min</small></p>
                            <p style="text-align: left;"><small><strong>Cast:</strong> ${film.cast}</small></p>
                        </div>
                      <div class="m-2" >
                            <button class="btn btn-warning orari m-2"> ${orari.orario1}</button>
                            <button class="btn btn-warning orari m-2">${orari.orario2}</button>
                            <button class="btn btn-warning orari m-2">${orari.orario3}</button>
                            <button class="btn btn-warning orari m-2">${orari.orario4}</button>
                            <button class="btn btn-warning orari m-2">${orari.orario5}</button>
                        </div>
                    </div>
                </div>

              `;
  
              filmsContainer.appendChild(filmCard);
          });
      }
  }
  
  displayFilms();
