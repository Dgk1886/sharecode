const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./First.txt', 'utf8')
console.log(first);
//flag durum anlamında ör: a 'nın anlamı append
const second = writeFileSync('./result-sync.txt', 
    `Here is the result : ${first}`, 
    {flag: 'a'}
)