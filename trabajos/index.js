const fs = require("fs")


const productsArray = []

class ProductManager{   
    static codeInc = 1
    constructor(path, title, description, price, thumbnail,stock){
        this.path = path
        this.title = title
         this.description = description
         this. price = price
         this.thumbnail = thumbnail
         this.stock = stock
         ProductManager.codeInc
         this.loadFile()
    }
    addProduct(){
        const product ={
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            stock: this.stock,
            code: ProductManager.codeInc++
        }

    //      if(product){
    //     productsArray.find(producto => product.code === producto.code)
    //     console.log("el codigo ya existe")
    //    }else{   
    //    }
        
    productsArray.push(product)
    this.saveFile()

      
    }
    getProducts(){
        if(fs.existsSync("./productos.json")){
           console.log(JSON.parse(fs.readFileSync("./productos.json", "utf-8"))) 
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
        let item = itemFs.find(itemFs => itemFs.code === number)
          console.log(item)
        } else {
            let item = productsArray.find(item => item.code === number)
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

}


const productManager = new ProductManager("./productos.json","producto prueba","este es un producto prueba", 200, "Sin imagen", 25) 
// const productManager2 = new ProductManager("./productos.json","producto prueba2","este es un producto prueba", 300, "Sin imagen", 35) 
// const productManager3 = new ProductManager("./productos.json","producto prueba3","este es un producto prueba", 400, "Sin imagen", 45) 
// const productManager4 = new ProductManager("./productos.json","producto prueba4","este es un producto prueba", 500, "Sin imagen", 55) 
// productManager.addProduct()
// productManager2.addProduct()
// productManager3.addProduct()
// productManager4.addProduct()



productManager.getProducts()
productManager.getProductById(2)
