const fs = require("fs")

const productsArray = []

class ProductManager{   
    static codeInc = 1
    constructor(path, title, description, price, thumbnail, code, stock){
        this.path = path
        this.title = title
         this.description = description
         this. price = price
         this.thumbnail = thumbnail
         this.code = code
         this.stock = stock
         ProductManager.codeInc
        //  this.loadFile()
    }
    addProduct(){
        const product ={
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            stock: this.stock,
            code: this.code,
            id:ProductManager.codeInc++
        }

let codigo = productsArray.find((producto) => product.code === producto.code)
         if(codigo){
        console.log(`el codigo para el producto ${this.title} ya existe, por favor, escriba otro codigo`)
       }else{  
            productsArray.push(product)
            this.saveFile()
       }
       
    }
    getProducts(){
        if(fs.existsSync("./productos.json")){
            console.log(JSON.parse(fs.readFileSync("./productos.json", "utf-8")))
           return JSON.parse(fs.readFileSync("./productos.json", "utf-8"))
        }else{
            console.log(productsArray)
        }
        
    }

    getProductById(number){
       let itemFs
        if (fs.existsSync("./productos.json")) {
            if(itemFs !== Object){
           itemFs = JSON.parse(fs.readFileSync("./productos.json", "utf-8"))
            }
        let item = itemFs.find(itemFs => itemFs.id === number)
          console.log(item)
        } else {
            let item = productsArray.find(item => item.id === number)
      console.log(item)
        }
    }

    saveFile(){
        try {
            fs.writeFileSync(this.path, JSON.stringify(productsArray))
        } catch (err) {
            throw new Error(err)
        }
    }

    loadFile(){
        try {
            let item = JSON.parse(fs.readFileSync(this.path, "utf-8"))
            productsArray.push(item)
        } catch (err) {
            throw new Error(err)
        }
    }
    updateProduct(id, product) {
        const data = JSON.parse(fs.readFileSync(`./productos.json`, "utf-8"))
        data.map(element => {
        if (element.id === id) {
        element.title = product.title,
        element.description = product.description,
        element.price = product.price,
        element.thumbnail = product.thumbnail,
        element.stock = product.stock,
        element.code = product.code,
        element.id = id
        }
        })
        fs.writeFileSync("productos.json", JSON.stringify(data))
    }

    deleteProduct(id) {
        let arrayVacio = []
        productsArray.map((product) => {
        if (product.id !== id)
         arrayVacio.push(product)
        fs.writeFileSync("./productos.json", JSON.stringify(arrayVacio),(err) => {
        if (err) throw err;
        },
        )
        })
        }
}


const productManager = new ProductManager("./productos.json","producto prueba","este es un producto prueba", 200, "Sin imagen", 121,25) 
const productManager2 = new ProductManager("./productos.json","producto prueba2","este es un producto prueba", 300, "Sin imagen", 250,25) 
const productManager3 = new ProductManager("./productos.json","producto prueba3","este es un producto prueba", 400, "Sin imagen", 350,25) 
const productManager4 = new ProductManager("./productos.json","producto prueba4","este es un producto prueba", 500, "Sin imagen", 450,25) 
productManager.addProduct()
productManager2.addProduct()
productManager3.addProduct()
productManager4.addProduct()
const productManager5 = new ProductManager("./productos.json","producto prueba5","este es un producto prueba", 300, "Sin imagen", 250,25) 
productManager5.addProduct() //agrego producto con mismo codigo y no pushea porque el codigo ya existe



productManager.getProducts()
// productManager.getProductById(2)
// productManager.deleteProduct(2)
// productManager.updateProduct(1,{title: "producto nuevo",description: "descripcion nueva",price: 45, thumbnail: "nueva imagen", stock: 350, code: 999 })
// productManager.getProducts()

module.exports = {
    productManager
}