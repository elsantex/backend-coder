const express = require("express")
const { productManager } = require("./index");

const app = express()
const port = 8080
//setear sv

//endpoints
app.get("/", function(req, res){

    res.send("Hola Mundo")
})

app.get("/products", function(req, res){
    const productos = productManager.getProducts()
    let respuesta = productos
    // Si hay query de limit, limitar la cantidad de productos que voy a devolver con array.prototype.slice
    const limite = req.query.limite
    if(limite && !isNaN(Number(limite))){
        respuesta = respuesta.slice(0, limite)
    }
    res.send(respuesta)
  });

  app.get("/products/:id", function(req, res){
    const productos = productManager.getProducts()
    const producto = productos.find((e)=>e.id === Number(req.params.id))
    
    res.send(producto)
  });




//levantar sv
app.listen(port, () => {
    console.log("Servidor levantado en el puerto", port);
  });