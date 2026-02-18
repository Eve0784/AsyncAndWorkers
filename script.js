// In passato si usava --------------XMLHttpRequest-------------------//

// const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

// const http = new XMLHttpRequest();
// http.onreadystatechange = callbackXMLHTTP;

// http.open("GET", url, true);
// http.send();

// function callbackXMLHTTP() {
//     if (this.readyState == 4 && this.status === 200) {
//         const ditto = JSON.parse(http.responseText)
//         console.log(ditto);
//     } else if (this.readyState ===4 && this.status !== 200) {
//         console.log('Siamo nei pasticci il server ha risposto', this.status);
        
        
//     }
// }

//Nel futuro ------------------------FETCH------------------------------//

// fetch(url)
// .then(callbackFetch)
// .then(callbackJson)
// .catch(callbackError)

// function callbackFetch(resp) {
//     return resp.json();
// }

// function callbackJson(json) {
//     console.log(json);
// }

// function callbackError(error) {
//     console.log('Siamo nei pasticci il server ha risposto',error.message);
    
    
// }

//------------------------- AWAIT & ASYNC ------------------------------------//
// una funzione async sempre ritorna una promise

// async function loadPokemon() {
//     const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    
//     // fetch(url)
//     // .then(resp => resp.json())
//     // .then(json => console.log(json));

//     const response = await fetch(url);
//     const json = await response.json();
//    // console.log(json);
//     return json;
    
// }


// function loadPokemon2() {
//     const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    
//     return fetch(url)
//     .then(resp => resp.json())
//     .then(json => json);
// }

// loadPokemon().then(ditto => console.log(ditto, 'async await'));
// loadPokemon2().then(ditto => console.log(ditto, 'then'));


//-------------------------------- PROMISE ------------------------------------//

function testaOCroce() {
    const randomNumber = Math.random();

    if (randomNumber > 0.5) {
        return 'testa'
    } else{
        return 'croce'
    }
    
}