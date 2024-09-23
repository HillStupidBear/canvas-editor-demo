export function debounce<T extends unknown[]>(
  func: (...arg: T) => unknown,
  delay: number
) {
  let timer: number
  return function (this: unknown, ...args: T) {
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
