import axios from 'axios'
import { Eventing } from './Eventing'

interface UserProps {
  id?: number
  name?: string
  age?: number
}

export class User {
  private baseUrl: string = 'http://localhost:3000'

  public events: Eventing = new Eventing()

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName]
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update }
    Object.assign(this.data, update)
  }

  async fetch(): Promise<void> {
    const response = await axios.get(`${this.baseUrl}/users/${this.get('id')}`)
    this.set(response.data)
  }

  async save(): Promise<void> {
    const id = this.get('id')
    if (id) {
      const response = await axios.put(`${this.baseUrl}/users/${id}`, this.data)
      this.set(response.data)
    } else {
      const response = await axios.post(`${this.baseUrl}/users/`, this.data)
      this.set(response.data)
    }
  }
}
