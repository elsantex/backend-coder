class ProductManager{
    products
    static codeInc = 0
    constructor(){
        this.products=[]
    }
    addProduct(title, description, price, thumbnail, code = ProductManager.codeInc, stock){
        ProductManager.codeInc++
        const product ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

       if(product){
        this.products.find(producto => product.code === producto.code)
        console.log("el codigo ya existe")
       }
    }
    getProducts(){
        return this.products
    }
    getProductById(id){
        if(this.products.find(id => this.product.code === id)){
        return console.log(id)
        }
    }
}


const productManager = new ProductManager() 
productManager.addProduct("producto prueba", "este es un producto prueba", 200, "Sin imagen", undefined ,25)

