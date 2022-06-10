// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=9c1581a1&s=october',
//   success: (movies) => console.log(movies),
// });

// //ajax vanila JS
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open('GET', 'http://www.omdbapi.com/?apikey=9c1581a1&s=october');
// xhr.send();

// // fetch
// fetch('http://www.omdbapi.com/?apikey=9c1581a1&s=october')
//   .then((Response) => Response.json())
//   .then((Response) => console.log(Response));

//promise = object yang merepresentasikan keberhasilan/kegagalan di masa yang akan datang
// janji (terpenuhi/ingkar)
// states (fulfilled/rejected/pending)
// callback (resolve[terpenuhi], reject[tdk dipenuhi], finally[selesai])
// aksi (then[terpenuhi] /catch[tdk dipenuhi])

//contoh 1
let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve('janji telah ditepati');
  } else {
    reject('ingkar janji');
  }
});

janji1
  .then((Response) => console.log('OK, ' + Response))
  .catch((Response) => console.log('not OK, ' + Response));
