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

// //contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('janji telah ditepati');
//   } else {
//     reject('ingkar janji');
//   }
// });

// janji1
//   .then((Response) => console.log('OK, ' + Response))
//   .catch((Response) => console.log('not OK, ' + Response));

// // contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Janji ditepati setelah beberapa waktu!');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve('Janji tidak ditepati setelah beberapa waktu!');
//     }, 2000);
//   }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('selesai menunggu!'))
//   .then((Response) => console.log('OK, ' + Response))
//   .catch((Response) => console.log('not OK, ' + Response));
// console.log('selesai');

// promise.all

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        Judul: 'october',
        Sutradara: 'Shoojit Sircar',
        Pemeran: 'Banita Sandhu, Varun Dhawan',
      },
    ]);
  }, 2000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        Kota: 'Banjarbaru',
        Suhu: '28',
      },
    ]);
  }, 4000);
});

// film.then((Response) => console.log(Response));
// cuaca.then((Response) => console.log(Response));

//bisa dijalankan sekaligus
Promise.all([film, cuaca])
  // .then((Response) => console.log(Response));
  // dipecah menggunakan spread operator
  .then((Response) => {
    const [film, cuaca] = Response;
    console.log(film);
    console.log(cuaca);
  });
