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
