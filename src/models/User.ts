import axios, { AxiosResponse } from 'axios'

interface UserProps {
  id?: number
  name?: string
  age?: number
}

type Callback = () => void

export class User {
  events: { [key: string]: Callback[] } = {}
  private baseUrl: string = 'http://localhost/3000'

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName]
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update }
    Object.assign(this.data, update)
  }

  on(eventName: Event['type'], callback: Callback): void {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName]
    handlers.forEach(callback => {
      callback()
    })
  }

  fetch(): void {
    axios
      .get(`${this.baseUrl}/users/${this.get('id')}`)
      .then((response: AxiosResponse) => {
        this.set(response.data)
      })
  }
}
