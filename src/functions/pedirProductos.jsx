import products from "../products.json";

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {

      const item = products.find(el => el.id === id)

      if(item){
        resolve(item)
      }
  })
}

export function capitalizarPrimeraLetra(cadena) {
  return cadena
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}