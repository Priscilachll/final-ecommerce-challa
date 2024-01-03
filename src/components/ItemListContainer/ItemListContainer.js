// Importa 'useParams' correctamente
import React, { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';  // Agrega esta línea
import db from '../../services/firebase/firebaseConfig';
import ItemList from '../ItemList/ItemList';


// ...resto del código


// ItemListContainer.js
// Elimina la siguiente línea, ya que 'db' ya se importa arriba
// import db from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '=', categoryId))
      : collection(db, 'products');

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <p>Loading...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;


// import React, { useState, useEffect } from 'react';
// import { getProducts, getProductsByCategory } from '../../asyncMock';
// import ItemList from '../ItemList/ItemList';
// import { useParams } from 'react-router-dom';


// const ItemListContainer = ({ greeting }) => {
//   const [products, setProducts] = useState([]);
//   const { categoryId } = useParams();

//   useEffect(() => {
//     const asyncFunc = categoryId ? getProductsByCategory : getProducts;

//     asyncFunc(categoryId)
//       .then(response => {
//         setProducts(response);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [categoryId]);

//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <ItemList products={products} />
//     </div>
//   );
// };

// export default ItemListContainer;

// import React, { useState, useEffect } from 'react';
// import { getProducts, getProductsByCategory } from '../../asyncMock';
// import ItemList from '../ItemList/ItemList';
// import { useParams } from 'react-router-dom';


// const ItemListContainer = ({ greeting }) => {
//   const [products, setProducts] = useState([]);
//   const { categoryId } = useParams();

//   useEffect(() => {
//     const asyncFunc = categoryId ? getProductsByCategory : getProducts;

//     asyncFunc(categoryId)
//       .then(response => {
//         setProducts(response);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [categoryId]);

//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <ItemList products={products} />
//     </div>
//   );
// };

// export default ItemListContainer;
