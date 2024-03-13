import http from 'http'

const server = http.createServer()

server.on('request',(request, res)=>{
    res.write("<h1>Bom dia!</h1>")
    res.end()
})

server.on('listening',()=>{ 
    console.log("Ouvindo na porta 8080")
})

server.listen(8080)
