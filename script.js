// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('selesai');
//   }, 2000);
// });
// // console.log(coba);
// coba.then(() => console.log(coba));

function cobaPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('selesai');
    }, 2000);
  });
}
// const coba = cobaPromise();
// coba.then(() => console.log(coba));

async function cobaAsync() {
  const coba = await cobaPromise();
  console.log(coba);
}
cobaAsync();
