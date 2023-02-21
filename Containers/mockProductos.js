import { faker } from '@faker-js/faker'
import Container from './Container.js'
faker.locale = 'es'

function generarProducto() {
    return {
        producto: faker.commerce.productName(),
        precio: faker.commerce.price(),
        thumbnail: faker.image.fashion(),
    }
}



function productosNuevos (cant) {
    const nuevos = []
        for (let i = 0; i < cant; i++) {
            //const productoNuevo = generarProducto()
            //const guardado = this.guardar(productoNuevo)
            nuevos.push({id:i, ...generarProducto()})
        }
        return nuevos

}

export { productosNuevos }
