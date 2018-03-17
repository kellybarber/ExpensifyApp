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

export { firebase, database as default }


// // Child Removed
// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   })

// // Child Changed
// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   })

// //Child Added
// database.ref('expenses')
// .on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   })


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)

//   })


// database.ref('expenses').push({
//   description: 'Coffee',
//   note: 'Starbucks',
//   amount: 250,
//   createdAt: 709991
// })

// database.ref('expenses').push({
//   description: 'Shawarma',
//   note: 'Lunch',
//   amount: 395,
//   createdAt: 758903
// })

// database.ref('expenses').push({
//   description: 'Burrito',
//   note: 'Dinner',
//   amount: 985,
//   createdAt: 768989
// })


// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Go for a run'
// })


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref('name').set('Mike')

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })


// database.ref().set({
//     name: 'Kelly Barber',
//     age: '26',
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Toronto',
//       country: 'Canada'
//     }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   'location/country': 'United States'
// }).then(() => {
//   console.log('Changed company and stress level')
// }).catch((e) => {
//   console.log('Did not change job and thus stress level', e)
// })


// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed')
//   })
//   .catch((e) => {
//     console.log('Data was not removed', e)
//   })
