import { User } from './models/User'

void (async () => {
  const user = new User({ name: 'Oat', age: 29 })
  const name = user.get('name')

  console.log('This Users name is:', name)

  user.set({ id: 2 })

  const eventExample = 'EXAMPLE'

  user.events.on(eventExample, () => {
    console.log('triggerd', eventExample)
  })

  user.events.trigger(eventExample)

  user.fetch()

  const user2 = new User({ id: 4, name: 'Putted user 2' })
  await user2.save()
  console.log('User3:', user2)
})()

void (() => {
  console.log('VOID!')
})()
