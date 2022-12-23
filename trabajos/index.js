const productsArray = []

class ProductManager{
    static codeInc = 1
    constructor(title, description, price, thumbnail,  stock){
        this.title = title
         this.description = description
         this. price = price
         this.thumbnail = thumbnail
         this.stock = stock
         ProductManager.codeInc
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
    
    productsArray.push(product)

    //    if(product){
    //     this.products.find(producto => product.code === producto.code)
    //     console.log("el codigo ya existe")
    //    }
    }
    getProducts(){
        console.log(productsArray)
    }
    // getProductById(id){
    //     if(this.products.find(id => this.product.code === id)){
    //     return console.log(id)
    //     }
    // }
}


const productManager = new ProductManager("producto prueba","este es un producto prueba", 200, "Sin imagen", 25) 
const productManager2 = new ProductManager("producto prueba2","este es un producto prueba", 300, "Sin imagen", 25) 
const productManager3 = new ProductManager("producto prueba3","este es un producto prueba", 400, "Sin imagen", 25) 
const productManager4 = new ProductManager("producto prueba4","este es un producto prueba", 500, "Sin imagen", 25) 
productManager.addProduct()
productManager2.addProduct()
productManager3.addProduct()
productManager4.addProduct()

productManager.getProducts()


// ///// ejemplo ////

// const arrayPersonas2 = []

// class Personas{
//     static id = 1
//     constructor(nombre, apellido, edad){
//         this.name = nombre
//         this.surname = apellido
//         this.age = edad
//         Personas.id
//     }

//     GuardarPersona(){
//         const persona = {
//             nombre: this.name,
//             apellido: this.surname,
//             edad: this.age,
//             id: Personas.id++
//         }
//     arrayPersonas2.push(persona)
//     }
//     getPersona(){
//         console.log(arrayPersonas2)
//     }
// }
// const persona1 = new Personas("Santiago", "Grosso", 21)
// const persona2 = new Personas("Carlos", "Baute", 33)
// const persona3 = new Personas("Juan", "Quiroz", 75)

// persona1.GuardarPersona()
// persona2.GuardarPersona()
// persona3.GuardarPersona()

// persona2.getPersona()