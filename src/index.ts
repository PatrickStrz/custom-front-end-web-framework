import { User } from './models/User'

const user = new User({ name: 'Oat', age: 29 })
const name = user.get('name')

console.log('This Users name is:', name)

user.set({ name: 'NOTOAT' })

user.on('yooSteve', () => {})

console.log(user.events)

user.on('yooSteve', () => {
  console.log('second juan')
})

user.on('yooBDJ', () => {
  console.log('triggggered BD')
})

user.trigger('yooBDJ')

console.log(user.events)

import axios from 'axios'

// const users = axios.post('http://localhost:3000/users', {
//   name: 'pat',
//   age: 27
// })
const users = axios.get('http://localhost:3000/users')

console.log('users', users)
