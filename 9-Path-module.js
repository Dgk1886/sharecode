const path = require('path')

//path'teki isimleri birbirinden ayıran elemanı yazdırır
console.log(path.sep);

const filePath = path.join('/Oyunlar/', 'Others')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'Oyunlar', 'Others')
console.log(absolute)