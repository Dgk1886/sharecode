// GLOBALS -- NO WİNDOW !!

// __dirname = path to current directory
// __filename = file name
// require = function to use modules(common js)
// module = info about current module(file)
// process = info about env where the program is executed

console.log(__dirname)
//Set interval bir fonksiyon için belli bir zaman aralığı
//olan bir döngü oluşturur ve kodu bu döngü içinde çalıştırır
setInterval(() =>{
    console.log("hello world")
}, 1000)
// setInterval(fonksiyon, zaman aralığı)
//burada input'u olmayan bir arrow function kullandık