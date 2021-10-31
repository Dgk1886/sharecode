// bu bizim yarattığımız bir module olmadığı için
// çağırırken . ve / 'i kullanmadık
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds
//NOT: ${} özelliğini kullanabilmen için `` ları
//kullanman lazım
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs);