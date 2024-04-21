export const productos = [
  {
    "id": 1,
    "nombre": "Cupcake arándano mágico",
    "precio": 3000,
    "categoria": "Cupcakes",
    "stock": 5,
    "descripcion": "Cupcake de arándano con crema de naranja",
    "img": "/src/data/img/cupcake-arandano.png"
  },
  {
    "id": 2,
    "nombre": "Cupcake chocolate tentación",
    "precio": 2800,
    "categoria": "Cupcakes",
    "stock": 8,
    "descripcion": "Cupcake de chocolate con ganache de chocolate negro",
    "img": "/src/data/img/cupcake-chocolate.png"
  },
  {
    "id": 3,
    "nombre": "Cupcake frutilla sueño",
    "precio": 3200,
    "categoria": "Cupcakes",
    "stock": 3,
    "descripcion": "Cupcake de frutilla con crema chantilly",
    "img": "/src/data/img/cupcake-frutilla.png"
  },
  {
    "id": 4,
    "nombre": "Cupcake pistacho delicia",
    "precio": 3500,
    "categoria": "Cupcakes",
    "stock": 6,
    "descripcion": "Cupcake de pistacho con glaseado de vainilla",
    "img": "/src/data/img/cupcake-pistacho.png"
  },
  {
    "id": 5,
    "nombre": "Cupcake uva encanto",
    "precio": 3300,
    "categoria": "Cupcakes",
    "stock": 4,
    "descripcion": "Cupcake de uva con frosting de queso crema",
    "img": "/src/data/img/cupcake-uva.png"
  },
  {
    "id": 6,
    "nombre": "Cupcake limón refrescante",
    "precio": 3100,
    "categoria": "Cupcakes",
    "stock": 7,
    "descripcion": "Cupcake de limón con glaseado de limón",
    "img": "/src/data/img/cupcake-limon.png"
  },
  {
    "id": 7,
    "nombre": "Dona arándano delicioso",
    "precio": 2500,
    "categoria": "Donas",
    "stock": 10,
    "descripcion": "Dona de arándano con glaseado de azúcar",
    "img": "/src/data/img/dona-arandano.png"
  },
  {
    "id": 8,
    "nombre": "Dona chocolate seducción",
    "precio": 2300,
    "categoria": "Donas",
    "stock": 12,
    "descripcion": "Dona de chocolate con chips de chocolate",
    "img": "/src/data/img/dona-chocolate.png"
  },
  {
    "id": 9,
    "nombre": "Dona frutilla pasión",
    "precio": 2700,
    "categoria": "Donas",
    "stock": 9,
    "descripcion": "Dona de frutilla con glaseado de frutilla",
    "img": "/src/data/img/dona-frutilla.png"
  },
  {
    "id": 10,
    "nombre": "Dona pistacho amor",
    "precio": 3000,
    "categoria": "Donas",
    "stock": 8,
    "descripcion": "Dona de pistacho con glaseado de pistacho",
    "img": "/src/data/img/dona-pistacho.png"
  },
  {
    "id": 11,
    "nombre": "Dona uva tentación",
    "precio": 2800,
    "categoria": "Donas",
    "stock": 11,
    "descripcion": "Dona de uva con glaseado de vainilla",
    "img": "/src/data/img/dona-uva.png"
  },
  {
    "id": 12,
    "nombre": "Dona limón exquisita",
    "precio": 2600,
    "categoria": "Donas",
    "stock": 13,
    "descripcion": "Dona de limón con glaseado de limón",
    "img": "/src/data/img/dona-limon.png"
  },
  {
    "id": 13,
    "nombre": "Paleta arándano sorpresa",
    "precio": 1800,
    "categoria": "Paletas",
    "stock": 15,
    "descripcion": "Paleta de arándano cubierta de chocolate blanco",
    "img": "/src/data/img/paleta-arandano.png"
  },
  {
    "id": 14,
    "nombre": "Paleta chocolate indulgencia",
    "precio": 1600,
    "categoria": "Paletas",
    "stock": 18,
    "descripcion": "Paleta de chocolate cubierta de chocolate negro",
    "img": "/src/data/img/paleta-chocolate.png"
  },
  {
    "id": 15,
    "nombre": "Paleta frutilla tentación",
    "precio": 2000,
    "categoria": "Paletas",
    "stock": 14,
    "descripcion": "Paleta de frutilla cubierta de chocolate con leche",
    "img": "/src/data/img/paleta-frutilla.png"
  },
  {
    "id": 16,
    "nombre": "Paleta pistacho placer",
    "precio": 2300,
    "categoria": "Paletas",
    "stock": 16,
    "descripcion": "Paleta de pistacho cubierta de chocolate blanco",
    "img": "/src/data/img/paleta-pistacho.png"
  },
  {
    "id": 17,
    "nombre": "Paleta uva delicia",
    "precio": 2100,
    "categoria": "Paletas",
    "stock": 17,
    "descripcion": "Paleta de uva cubierta de chocolate con leche",
    "img": "/src/data/img/paleta-uva.png"
  },
  {
    "id": 18,
    "nombre": "Paleta limón refrescante",
    "precio": 1900,
    "categoria": "Paletas",
    "stock": 20,
    "descripcion": "Paleta de limón cubierta de chocolate blanco",
    "img": "/src/data/img/paleta-limon.png"
  }
]

// Función para reorganizar aleatoriamente el array
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shuffle(productos))
    }, 2000)
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {

      const productosFiltrados = productos.filter(
        (p) => p.categoria === category
      )

      resolve(shuffle(productosFiltrados))
    }, 2000)
  })
}

export const getProductDetailById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find(
        (prod) => prod.id === parseInt(id)
      )
      resolve(producto)
    }, 1000)
  })
}