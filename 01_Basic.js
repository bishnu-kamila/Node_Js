const http = require('http')

const server = http.createServer((req, res) =>{
    res.end('<h1>hello node</h1>')
})



server.listen(3000,()=>{
    console.log('server run on port 3000');
    
})