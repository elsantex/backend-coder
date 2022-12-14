class ProductManager{
    products
    static codeInc = 0
    constructor(){
        this.products=[]
    }
    addProduct(title, description, price, thumbnail, code, stock){
        ProductManager.codeInc++
        const product ={
            title,
            description,
            price,
            thumbnail,
            code: ProductManager.codeInc,
            stock
        }

        // if(){

        // }
    }
    getProducts(){
        return this.products
    }
    getProductById(){
        //retornar producto que cuente con este id
        //utilizar find()
    }
}


const productManager = new ProductManager() 
productManager.addProduct("producto prueba", "este es un producto prueba", 200, "Sin imagen",undefined,25)
