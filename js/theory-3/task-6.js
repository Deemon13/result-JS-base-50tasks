function createCounter(value) {
  const inc = () => (value += 1);
  const dec = () => (value -= 1);
  const get = () => value;

  return { inc, dec, get };
}

const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7
