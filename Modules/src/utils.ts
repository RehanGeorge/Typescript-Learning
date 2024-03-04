function add(a: number, b: number) {
  return a + b
}

function sample<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export { add, sample }