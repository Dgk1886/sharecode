// şimdi ayırdığımız isimlere erişeceğiz

/*Not: Bu işlemi yaparken başa en az 1 nokta koy
çünkü third party module veya built-in module
kullanacağız*/

const names = require('./4-1stmodule');
const sayHi = require('./5-2ndmodule');
const data = require('./6-alternative-export')

// Fonk Module içinde uyandırıldığı için bir daha değişken
//atamadan istediğimiz fonk'u istediğimiz yerde çalıştırdık
require('./7-wokedfunc');

console.log(data)

sayHi("ahmet")
//İsimleri yerleştirdiğimiz module'un içinden değer
//aldığımız için bu şekiilde belirttik
sayHi(names.john)
sayHi(names.peter)