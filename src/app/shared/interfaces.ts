export interface User {
  username: string,
  email: string,
  password:string,
}

export interface Token {
  value: string,
  expiresDate: number
}
