
// const tags = [Acoustic, Electric, Ambient, Groove, Dancing, Modern, LOOP,];


const samples = [
    {
        "id": 1,
        "nombre": "Heavy Metal",
        "precio": 20,
        "tags": ["Electric", "Groove"],
        "image": "./image/Heavy_Metal.jpg",
        "stock": 5,
        "description": "Colección de canciones de heavy metal llenas de energía."
    },
    {
        "id": 2,
        "nombre": "Bass 5 Strings",
        "precio": 15,
        "tags": ["Acoustic", "Groove"],
        "image": "./image/Bass_5_Strings.jpg",
        "stock": 3,
        "description": "Explora el profundo sonido del bajo de 5 cuerdas."
    },
    {
        "id": 3,
        "nombre": "Clásico Criollo",
        "precio": 12,
        "tags": ["Acoustic", "Modern"],
        "image": "./image/Clasico_Criollo.jpg",
        "stock": 7,
        "description": "Selección de piezas instrumentales de música clásica criolla."
    },
    {
        "id": 4,
        "nombre": "Campo",
        "precio": 18,
        "tags": ["Acoustic", "Ambient"],
        "image": "./image/Campo.jpg",
        "stock": 1,
        "description": "Colección de piezas que te sumergirán en la tranquilidad de la vida campestre."
    },
    {
        "id": 5,
        "nombre": "Drumset",
        "precio": 22,
        "tags": ["Electric", "Dancing"],
        "image": "./image/Drumset.jpg",
        "stock": 6,
        "description": "Colección de ritmos percusivos llenos de energía."
    },
    {
        "id": 6,
        "nombre": "Lake",
        "precio": 10,
        "tags": ["Acoustic", "Ambient"],
        "image": "./image/Lake.jpg",
        "stock": 8,
        "description": "Melodías que te transportarán a paisajes lacustres serenos."
    },
    {
        "id": 7,
        "nombre": "Ableton",
        "precio": 25,
        "tags": ["Electric", "LOOP", "Modern"],
        "image": "./image/Ableton.jpg",
        "stock": 0,
        "description": "Pistas que exploran paisajes sonoros creados con Ableton."
    },
    {
        "id": 8,
        "nombre": "Acoustic",
        "precio": 17,
        "tags": ["Acoustic", "LOOP"],
        "image": "./image/Acoustic.jpg",
        "stock": 2,
        "description": "Colección de canciones íntimas y calmantes."
    },
    {
        "id": 9,
        "nombre": "Rock Exterior",
        "precio": 29,
        "tags": ["Electric", "LOOP"],
        "image": "./image/Rock_Exterior.jpg",
        "stock": 9,
        "description": "Canciones llenas de energía para conciertos al aire libre."
    },
    {
        "id": 10,
        "nombre": "Evening Embrace",
        "precio": 8,
        "tags": ["Acoustic", "Ambient"],
        "image": "./image/Evening_Embrace.jpg",
        "stock": 4,
        "description": "Melodías de guitarra acústica para relajarse al final del día."
    },
    {
        "id": 11,
        "nombre": "Reamp",
        "precio": 14,
        "tags": ["Electric", "Ambient"],
        "image": "./image/Reamp.jpg",
        "stock": 3,
        "description": "Colección de pistas con paisajes sonoros transformados."
    },
    {
        "id": 12,
        "nombre": "DJ Set",
        "precio": 19,
        "tags": ["Electric", "Dancing"],
        "image": "./image/DJ_Set.jpg",
        "stock": 7,
        "description": "Ritmos electrónicos y melodías hipnóticas para la pista de baile."
    },
    {
        "id": 13,
        "nombre": "Production",
        "precio": 27,
        "tags": ["Electric", "Modern"],
        "image": "./image/Production.jpg",
        "stock": 5,
        "description": "Exploración del proceso de producción musical."
    },
    {
        "id": 14,
        "nombre": "Mixing Artist",
        "precio": 30,
        "tags": ["Electric", "Groove"],
        "image": "./image/Mixing_Artist.jpg",
        "stock": 9,
        "description": "Colección que destaca la habilidad del ingeniero de sonido."
    },
    {
        "id": 15,
        "nombre": "Guitar Ibanez",
        "precio": 11,
        "tags": ["Electric", "LOOP", "Groove"],
        "image": "./image/Guitar_Ibanez.jpg",
        "stock": 2,
        "description": "Explora el mundo del rock y el metal con la guitarra Ibanez."
    }
]

export const getSamples = () => {

    return new Promise ((res) => {
        setTimeout (() => {
            // resolve(samples)
    }, 555)
})

}


// export const getSamplesByID = (id) => {
//     return ner Promise ((res) => {
//         setTimeout(() => {
//             resolve(samples.find(prod => prod.id === id))
//         }, 1111)
//     })
// }



