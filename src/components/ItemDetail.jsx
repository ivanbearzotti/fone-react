import React from "react"

const ItemDetail = ( {item} ) => {
    return(
        <div id="productos" className="grid grid-cols-1 px-10 pb-10 pt-10 gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-4">
            <div className="card-container bg-white rounded-xl flex flex-col p-8 gap-4 drop-shadow-xl lg:transition lg:duration-300 lg:hover:scale-105">
                <div className="card-img">
                    <img src={`../../public/assets/img/${item.img}`} alt={item.name} className="flex justify-center w-full lg:transition lg:duration-300 lg:hover:scale-105"/>
                </div>
                <div className="card-info">
                    <div className="name-description-price flex justify-between">
                        <div className="name-description">
                            <h3 className="font-poppins font-bold text-xl">{item.name}</h3>
                            <p className="font-poppins font-normal text-gris">{item.type}</p>
                        </div>
                        <div className="price">
                            <p className="font-poppins font-bold text-xl">${item.price}</p>
                        </div>
                    </div>
                </div>
                <p>The {item.name} is a no compromise freestyle machine designed for winners; it’s even in the name: Win The Freestyle!</p>
                <button className="boton-agregar font-poppins font-bold text-white text-m bg-gris w-full px-4 py-2 rounded-lg">Add to cart</button>
            </div>
        </div>
    )
}

export default ItemDetail
