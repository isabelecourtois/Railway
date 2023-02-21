import { normalize, schema } from 'normalizr'

const mensajes = {
    id: "mensajesCoder",

    mensaje: [
        {
            author: {
                mail: "rodleco@gmail.com",
                nombre: "Rodrigo",
                apellido: "Lecourtois",
                edad: "41",
                alias: "rodleco",
                avatar: "rodleco.jpg"
            },
            message: "Hola",
            _id: "1",
            dateAndTime: "30/11/2022, 21:23:19",
        },
        {
            author: {
                mail: "rocleco@gmail.com",
                nombre: "Isabel",
                apellido: "Lecourtois",
                edad: "35",
                alias: "rocleco",
                avatar: "rocleco.jpg"
            },
            message: "Todo bien por aquí",
            _id: "2",
            dateAndTime: "30/11/2022, 21:23:47",
        },
        {
            author: {
                mail: "fabio.amarques1990@gmail.com",
                nombre: "Fábio",
                apellido: "Marques",
                edad: "32",
                alias: "fabio",
                avatar: "fabio.jpg"
            },
            message: "Por aquí también",
            _id: "2",
            dateAndTime: "30/11/2022, 21:24:05",
        },
    ]
}

// Definimos schemas

const schemaAuthor = new schema.Entity('author',{},{idAttribute: 'mail'})

const schemaMessage = new schema.Entity('mensaje', {
 author:schemaAuthor,   
})

const schemaMessageAll =new schema.Entity("mensajes", {
    mensaje: [schemaMessage],
  });


// normalizar

const messNormalizado = normalize(mensajes, schemaMessageAll)
print (messNormalizado)

console.log(messNormalizado);

// utils

import util from 'util'

function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true))
}

