const os = require('os')

const user = os.userInfo()

console.log(user)

console.log(`The os uptime is${(os.uptime())}seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)

