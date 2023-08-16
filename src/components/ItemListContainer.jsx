import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { pedirProductos } from '../functions/pedirProductos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer(){

  const [productos, setProductos] = useState([]);

  const categoria = useParams().categoria;
  console.log(categoria)

  useEffect( () => {
    pedirProductos()
      .then((res) => {
        if(categoria){
          setProductos(res.filter(prod => prod.type = categoria));
        } else {
          setProductos(res);
        }
      })
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