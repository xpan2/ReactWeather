// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('San Diego', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City Not Found from promise')
//     }, 1000);
//   });
// }
//
// // first success, second is error
// getTempPromise('San Diego').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

// Challenge Area


function addPromise (a, b) {
  // return promise, add them up
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Type mismatch');
    }

  })
}

addPromise(2, 6).then(function (sum) {
  console.log('Promise success! sum is ', sum);
}, function (err) {
  console.log('Promise erorr!', err);
});
