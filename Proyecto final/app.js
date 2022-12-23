const express = require("express")
const app = express()

//setear sv

//endpoints
app.get("/", function(req, res){

    res.send("Hola Mundo")
})

app.get("/bienvenida/:nombre/:apellido", function(req, res){
    const nombre = req.params.nombre
    const apellido = req.params.apellido
    const respuesta = `
    <html>
        <body>
            <h1 style="color: blue">
                Bienvenido ${nombre} ${apellido}! 
            </h1>
        </body>
    </html>`
    res.send(respuesta)
})

app.get("/bienvenida/:nombre/", function(req, res){
    const nombre = req.params.nombre
    const respuesta = `
    <html>
        <body>
            <h1 style="color: red">
                Bienvenido ${nombre}! 
            </h1>
        </body>
    </html>`
    res.send(respuesta)
})

const estudiantes = [
{nombre:"Santiago Gonzalez", id: 1},
{nombre:"Cristian Stocco",id: 2 },
{nombre:"Facundo Rey",id: 3 },
{nombre:"Fabrizio Bertolo",id: 4 }
]


app.get("/estudiante/:id", function(req, res){
  const estudiante = estudiantes.find((e)=>e.id === Number(req.params.id))
    res.send(estudiante)
})

app.get("/estudiantes", function(req, res){
    const limite = req.query.limite
    const idEstudiante = req.query.id
    let respuesta = estudiantes

if(limite && !isNaN(Number(limite))){
    respuesta = respuesta.slice(0, limite)
}

if(idEstudiante && !isNaN(Number(idEstudiante))){
    respuesta = respuesta[idEstudiante]
}
      res.send(respuesta)
  })

app.get("/usuario", function(req, res){
    const respuesta = {
        nombre: "Susana",
        apellido: "Horia",
        edad: 69,
        correo: "susana_hot@hotmail.com"
    }
   


    res.send(respuesta)
})

//levantar sv
app.listen(3000)