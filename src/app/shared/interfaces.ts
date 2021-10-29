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

export interface Powerup {
  id: string,
  title: string,
  stat: string,
  imageUrl: string
}

export interface UserPowerup {
  id: string,
  usesLeft: number,
}

export interface SingleHero extends Hero {
  biography: {
    'full-name': string,
    'alter-egos': string,
    'place-of-birth': string,
    'first-appearance': string,
    alignment: string
  },
  'appearance': {
    gender: string,
    race: string,
    'eye-color': string,
    'hair-color': string
  },
}

export interface Bonuses{
  intelligence: boolean,
  strength: boolean,
  speed: boolean,
  durability: boolean,
  power: boolean,
  combat: boolean
}
