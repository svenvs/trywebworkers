let n = 1;

onmessage = e => {
  console.log(e.data)
  start();
};

function start() {
  search: while (n < 1000000) {
    n += 1;
    for (let i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
       continue search;
    postMessage(n);
  }
}
