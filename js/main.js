
const URL = 'https://www.theaudiodb.com/api_guide.php';

const button = document.getElementById("sendButton");
const main = document.getElementById("main");
const inputElement = document.getElementById("search");



button.addEventListener("click", ()=>{
  searchArtist(inputElement.value);
});


function searchArtist(wordToSearch){
  console.log('Palabra', wordToSearch);


  const fetchPromise = fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${wordToSearch}`);

  
 
  fetchPromise.then(response => {
  
    return response.json();
  }).then(result => {
    console.log('data', result);
     artist = result.artists[0].strArtist;
    console.log(artist);
    madeGrid(result);
  }).catch(err =>{
    console.log('salio mal!: ', err);
  });



}

function madeGrid(data){
  const artist = data.artists[0].strArtist ;
  
  const bio = data.artists[0].strBiographyES ;
const genero = data.artists[0].strGenre ;
const fb = data.artists[0].strFacebook ;
const tw = data.artists[0].strTwitter ;
const web = data.artists[0].strWebsite ;

const banner = data.artists[0].strArtistFanart ;

  main.innerHTML = `<ul><li><p>Artista: ${artist} </p></li>

                        <li><p>Género: ${genero} </p></li>
                        <li><p>Biografía: ${bio} </p></li>
                        <li><p>Facebook: ${fb} </p></li>
                        <li><p>Twitter: ${tw} </p></li>
                        <li><p>Web: ${web} </p></li>
                        <img class="d-block w-100" src="${banner}" alt="Imagen del Artista en cuestión">
 
  </ul>`


}


