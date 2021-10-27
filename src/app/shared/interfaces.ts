export interface User {
  username: string,
  email: string,
  password:string,
}

export interface Token {
  value: string,
  expiresDate: number
}

export interface Hero {
  name: string,
  id: string,
  image: {url: string}
  powerstats: {
    intelligence: number | string,
    strength: number  | string,
    speed: number  | string,
    durability: number  | string,
    power: number  | string,
    combat: number | string
  }
}

export interface Battle {
  date: Date,
  hero: string,
  enemy: string,
  result: string,
}
