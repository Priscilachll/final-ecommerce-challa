export const products = [
  {
    id: '1',
    name: 'Iphone 12',
    price: 1000,
    category: 'celular',
    img: "/img/A32celular.png",
    stock: 25,
    description: 'Descripción de Iphone 12',
  },
  {
    id: '2',
    name: 'Samsung S21',
    price: 800,
    category: 'celular',
    img: "/img/notebook.jpeg",
    stock: 20,
    description: 'Descripción de Samsung S21',
  },
  {
    id: '3',
    name: 'Ipad 8va generación',
    price: 1200,
    category: 'tablet',
    img: "/img/tabletApple.jpg",
    stock: 30,
    description: 'Descripción de Ipad 8va generación',
  },
  // ... Otros productos si es necesario
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === category));
    }, 500);
  });
};


// const products = [
//   {
//     id: '1',
//     name: 'Iphone 12',
//     price: 1000,
//     category: 'celular',
//     img: "/img/A32celular.png",
//     stock: 25,
//     description: 'Descripción de Iphone 12',
//   },
//   {
//     id: '2',
//     name: 'Samsung S21',
//     price: 800,
//     category: 'celular',
//     img: "/img/notebook.jpeg",
//     stock: 20,
//     description: 'Descripción de Samsung S21',
//   },
//   {
//     id: '3',
//     name: 'Ipad 8va generación',
//     price: 1200,
//     category: 'tablet',
//     img: "/img/tabletApple.jpg",
//     stock: 30,
//     description: 'Descripción de Ipad 8va generación',
//   },
//   // ... Otros productos si es necesario
// ];

// export const getProducts = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(products);
//     }, 500);
//   });
// }

// export const getProductById = (productId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(products.find(prod => prod.id === productId));
//     }, 500);
//   });
// }

  