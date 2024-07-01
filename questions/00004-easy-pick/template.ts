type A = 'asd' | 'ddq'

type B = A

type MyPick<T, K extends keyof T> = {
  [ key in K ]: T[ key ]
}
