const p1 = new Promise((res, rej) => setTimeout(res, 1000));
const p2 = new Promise((res, rej) => setTimeout(rej, 1000));

Promise.allSettled([p1, p2]).then(data => console.log(data));