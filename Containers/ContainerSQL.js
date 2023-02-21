// Llamo librerias

import knex from "knex";

// Clase

export class ContenedorSQL {
    constructor(options, table) {
        this.knex = knex (options);
        this.table = table;
    }

    //Crear tablas
    crearTablaMensajes() {
        return this.knex.schema.dropTableIfExists('mensajes')
            .finally(() => {
                return this.knex.schema.createTable('mensajes', table => {
                    table.increments('id').primary()
                    table.string('dateAndTime', 100).notNullable()
                    table.string('email', 100).notNullable()
                    table.string('message', 100).notNullable()
                })
            })
    }

    crearTablaProductos() {
        
        return this.knex.schema.dropTableIfExists('productos')
            .finally(() => {
                return this.knex.schema.createTable('productos', table => {
                    table.increments('id').primary()
                    table.string('producto', 100).notNullable()
                    table.float('precio')
                    table.string('thumbnail', 200).notNullable()
                })
            })
    }

    //Funciones

   
    getAll() {
        return this.knex(this.table).select('*')
    }

    getById (){
        return this.knex(this.table).select('*').where("id","=",id)
    }

    deleteById(id) {
        return this.knex.from(this.table).where('id', '=', id).del()
    }

    deleteAll() {
        return this.knex(this.table).del()
    }

    save(nuevo) {
        return this.knex(this.table).insert(nuevo)
    }

    updateStock(stock, id) {
        return this.knex.from(this.table).where('id', '=', id).update({stock: stock})
    }

    close() {
        this.knex.destroy()
    }
}

//module.exports = Contenedor