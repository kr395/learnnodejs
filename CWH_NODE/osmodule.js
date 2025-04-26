const os = require('node:os');
const freemem = os.freemem()
console.log((freemem/1024));
console.log(os.homedir());
console.log(os.uptime()/60/60);


