import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBcpQ13JPXrtKl6NQ6RR39RH2WdxpahS-0",
  authDomain: "expensify-9e5c2.firebaseapp.com",
  databaseURL: "https://expensify-9e5c2.firebaseio.com",
  projectId: "expensify-9e5c2",
  storageBucket: "expensify-9e5c2.appspot.com",
  messagingSenderId: "87074830477"
}

firebase.initializeApp(config)

const database = firebase.database()

// database.ref().set({
//     name: 'Kelly Barber',
//     age: '26',
//     isSingle: true,
//     location: {
//       city: 'Toronto',
//       country: 'Canada'
//     }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed', e)
// })

database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('Data was removed')
  })
  .catch((e) => {
    console.log('Data was not removed', e)
  })
