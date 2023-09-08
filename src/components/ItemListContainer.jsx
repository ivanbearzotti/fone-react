import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { pedirProductos } from '../functions/pedirProductos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"
import { capitalizarPrimeraLetra } from '../functions/pedirProductos';

function ItemListContainer(){

  const [productos, setProductos] = useState([]);

  const categoria = useParams().categoria;

  useEffect( () => {

    const collectionRef = categoria ? 
      query(collection(db, "products"), where("type", "==", capitalizarPrimeraLetra(categoria)))
      :
      collection(db, "products");

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return {...data}
        })
        setProductos(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })

    // pedirProductos()
    //   .then((res) => {
    //     if(categoria){
    //       setProductos(res.filter((prod) => prod.type.toLowerCase().replace(/\s/g, '') === categoria));
    //     } else {
    //       setProductos(res);
    //     }
    //   })
  }, [categoria])

  return(
    <>
      <div>
        <ItemList productos={productos} />
      </div>
    </>
  );
}

export default ItemListContainer;