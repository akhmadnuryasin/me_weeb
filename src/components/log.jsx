export default function log(func) {
  return setTimeout(() => {
    func(true);
  }, 2000);
}
